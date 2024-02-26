import classes from "./ProjectsPage.module.scss";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { NavLink } from "react-router-dom";
import { useProjects } from "../api/projectsPageApi";
import { useSelector } from "react-redux";
import { Rating } from "primereact/rating";
import { Paginator, PaginatorPageChangeEvent } from "primereact/paginator";
import {
    getProjectPageLimit,
    getProjectPagePageNumber,
    getProjectPageQuery,
    getProjectPageSelectedLevel,
    getProjectPageSelectedTechnologies,
} from "../model/selectors/projectPageSelectors";
import { ProjectsPageFilters } from "./ProjectsPageFilters/ProjectsPageFilters";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { projectPageActions } from "../model/slices/projectPageSlice";
import NoResImage from "shared/assets/images/no-results-found.webp";
import { CardsSkeleton } from "./CardsSkeleton/CardsSkeleton";

const mapLevelToNumber: Record<string, number> = {
    Beginner: 1,
    Advanced: 2,
    Expert: 3,
};

export const ProjectsPage = () => {
    const dispatch = useAppDispatch();
    const selectedTechnologies = useSelector(getProjectPageSelectedTechnologies);
    const selectedLevel = useSelector(getProjectPageSelectedLevel);
    const query = useSelector(getProjectPageQuery);
    const limit = useSelector(getProjectPageLimit);
    const pageNumber = useSelector(getProjectPagePageNumber);
    const {
        isLoading,
        data: projects,
        isFetching,
    } = useProjects({ stack: selectedTechnologies, level: selectedLevel, limit, page: pageNumber, search: query }, {});

    // для пагинации нужно знать общее количество записей, соответственно делаем запрос без параметров
    const totalData = useProjects(
        { stack: selectedTechnologies, level: selectedLevel, limit: "", page: "", search: query },
        {}
    );

    const onPageChange = (e: PaginatorPageChangeEvent) => {
        dispatch(projectPageActions.setPageNumber(e.page + 1));
    };

    const dataIsLoading = isLoading || totalData.isLoading || isFetching;

    const content = projects?.length ? (
        <div className={classes.cards}>
            {projects?.map((project) => (
                <Card
                    key={project.id}
                    className={classes.card}
                    title={
                        <div className={classes.titleContainer}>
                            {project.id}. {project.title}
                            <Rating
                                className={classes.rating}
                                cancel={false}
                                value={mapLevelToNumber[project.level]}
                                stars={3}
                            />
                        </div>
                    }
                    header={
                        <div className={classes.cardImageContainer}>
                            <div
                                style={{ background: `url('${project.image}') center 0/cover` }}
                                className={classes.cardImage}
                            />
                        </div>
                    }
                    subTitle={<div className={classes.subtitle}>{project.description}</div>}
                    footer={
                        <NavLink to={`/projects/${project.id}`}>
                            <Button className={classes.showMoreBtn}>SHOW MORE</Button>
                        </NavLink>
                    }
                />
            ))}
        </div>
    ) : (
        <div className={classes.notFound}>
            <span>NO RESULTS FOUND</span>
            <img style={{ maxWidth: "100vw" }} src={NoResImage} />
        </div>
    );

    // скрывать пагинатор если dataIsLoading или проекты не найдены
    const hidePaginator = !projects?.length || dataIsLoading;

    return (
        <div className={classes.ProjectsPage}>
            <div className="container">
                <div className={classes.mainFlex}>
                    <ProjectsPageFilters />

                    <div className={classes.contentContainer}>
                        {dataIsLoading ? <CardsSkeleton /> : content}
                        {hidePaginator ? null : (
                            <Paginator
                                className={classes.paginator}
                                first={(pageNumber - 1) * limit}
                                rows={limit}
                                totalRecords={totalData.data?.length}
                                onPageChange={onPageChange}
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

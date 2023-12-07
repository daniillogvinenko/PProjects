import classes from "./ProjectsPage.module.scss";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { NavLink } from "react-router-dom";
import { useProjects } from "../api/projectsPageApi";
import { Skeleton } from "primereact/skeleton";
import { useSelector } from "react-redux";
import { Rating } from "primereact/rating";
import { Paginator, PaginatorChangeEvent, PaginatorPageChangeEvent } from "primereact/paginator";
import {
    getProjectPageLimit,
    getProjectPagePageNumber,
    getProjectPageSelectedLevel,
    getProjectPageSelectedTechnologies,
} from "../model/selectors/projectPageSelectors";
import { ProjectsPageFilters } from "./ProjectsPageFilters/ProjectsPageFilters";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { projectPageActions } from "../model/slices/projectPageSlice";
import { useState } from "react";

export const ProjectsPage = () => {
    const dispatch = useAppDispatch();
    const selectedTechnologies = useSelector(getProjectPageSelectedTechnologies);
    const selectedLevel = useSelector(getProjectPageSelectedLevel);
    const limit = useSelector(getProjectPageLimit);
    const pageNumber = useSelector(getProjectPagePageNumber);

    const { isLoading, data, isFetching } = useProjects({ stack: selectedTechnologies, level: selectedLevel, limit, page: pageNumber }, {});
    const projects = data;

    const totalData = useProjects({ stack: selectedTechnologies, level: selectedLevel, limit: "", page: "" }, {});
    console.log(totalData.data?.length);

    const mapLevelToNumber: Record<string, number> = {
        Beginner: 1,
        Advanced: 2,
        Expert: 3,
    };

    const onPageChange = (e: PaginatorPageChangeEvent) => {
        dispatch(projectPageActions.setPageNumber(e.page + 1));
    };

    return (
        <div className={classes.ProjectsPage}>
            <div className="container">
                <div className={classes.mainFlex}>
                    <ProjectsPageFilters />
                    {isLoading || isFetching || totalData.isLoading ? (
                        <div className={classes.cards}>
                            <Skeleton width="283px" height="586px" />
                            <Skeleton width="283px" height="586px" />
                            <Skeleton width="283px" height="586px" />
                            <Skeleton width="283px" height="586px" />
                            <Skeleton width="283px" height="586px" />
                            <Skeleton width="283px" height="586px" />
                        </div>
                    ) : (
                        <div>
                            <div className={classes.cards}>
                                {projects?.map((project) => (
                                    <Card
                                        key={project.id}
                                        className={classes.card}
                                        title={
                                            <div className={classes.titleContainer}>
                                                {project.id}. {project.title}
                                                <Rating cancel={false} value={mapLevelToNumber[project.level]} disabled stars={3} />
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
                            {data?.length ? (
                                <Paginator
                                    className={classes.paginator}
                                    first={(pageNumber - 1) * limit}
                                    rows={limit}
                                    totalRecords={totalData.data?.length}
                                    onPageChange={onPageChange}
                                />
                            ) : null}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

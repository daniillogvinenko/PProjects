import classes from "./ProjectsPage.module.scss";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { NavLink } from "react-router-dom";
import { useProjects } from "../api/projectsPageApi";
import { Skeleton } from "primereact/skeleton";
import { useSelector } from "react-redux";
import { Rating } from "primereact/rating";
import {
    getProjectPageSelectedLevel,
    getProjectPageSelectedTechnologies,
} from "../model/selectors/projectPageSelectors";
import { ProjectsPageFilters } from "./ProjectsPageFilters/ProjectsPageFilters";

export const ProjectsPage = () => {
    const selectedTechnologies = useSelector(getProjectPageSelectedTechnologies);
    const selectedLevel = useSelector(getProjectPageSelectedLevel);

    const { isLoading, data, isFetching } = useProjects({ stack: selectedTechnologies, level: selectedLevel }, {});
    const projects = data;

    const mapLevelToNumber: Record<string, number> = {
        Beginner: 1,
        Advanced: 2,
        Expert: 3,
    };

    return (
        <div className={classes.ProjectsPage}>
            <div className="container">
                <div className={classes.mainFlex}>
                    <ProjectsPageFilters />
                    {isLoading || isFetching ? (
                        <div className={classes.cards}>
                            <Skeleton width="283px" height="586px" />
                            <Skeleton width="283px" height="586px" />
                            <Skeleton width="283px" height="586px" />
                            <Skeleton width="283px" height="586px" />
                            <Skeleton width="283px" height="586px" />
                            <Skeleton width="283px" height="586px" />
                        </div>
                    ) : (
                        <div className={classes.cards}>
                            {projects?.map((project) => (
                                <Card
                                    key={project.id}
                                    className={classes.card}
                                    title={
                                        <div className={classes.titleContainer}>
                                            {project.title}
                                            <Rating
                                                cancel={false}
                                                value={mapLevelToNumber[project.level]}
                                                disabled
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
                    )}
                </div>
            </div>
        </div>
    );
};

import { useProjectById } from "pages/ProjectDetailsPage/api/projectDetailsPaeApi";
import classes from "./ProjectDetails.module.scss";
import { Link, useParams } from "react-router-dom";
import { Skeleton } from "primereact/skeleton";
import { ProgressSpinner } from "primereact/progressspinner";
import { ProjectDetailsCarousel } from "../ProjectDetailsCarousel/ProjectDetailsCarousel";

export const ProjectDetails = () => {
    const { id } = useParams<{ id: string }>();

    if (!id) return <div>ERROR, ID UNDEFINED</div>;

    const { data, isLoading } = useProjectById(+id, {});

    const project = data;

    if (isLoading) {
        return (
            <div className={classes.ProjectDetails}>
                <div className={classes.skeletonContainer}>
                    <div className={classes.title}>
                        <Skeleton height="30px" width="20%" />
                    </div>
                    <div className={classes.description}>
                        <Skeleton height="16px" width="100%" />
                        <Skeleton height="16px" width="80%" />
                    </div>
                    <div className={classes.image} style={{ background: `url('${project?.image}') center 0/cover` }}>
                        <Skeleton height="100%" width="100%" />
                    </div>
                    <div className={classes.stackTitle}>
                        <Skeleton height="30px" width="20%" />
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className={classes.ProjectDetails}>
            <div className={classes.title}>{project?.title}</div>
            <div className={classes.description}>{project?.description}</div>
            <div className={classes.image} style={{ background: `url('${project?.image}') center 0/cover` }}></div>
            <div className={classes.stackTitle}>Stack</div>
            <div>
                {project?.stack.map((item) => (
                    <div key={item} className={classes.stackItem}>
                        {item}
                    </div>
                ))}
            </div>
            <div className={classes.functionsTitle}>APP FUNCTIONS</div>
            <div>
                {project?.appFunctions.map((item) => (
                    <div key={item} className={classes.functionItem}>
                        {item}
                    </div>
                ))}
            </div>
            <div className={classes.designLinksTitle}>FIGMA DESIGNS</div>
            <ProjectDetailsCarousel project={project} />
        </div>
    );
};

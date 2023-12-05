import { NavLink } from "react-router-dom";
import classes from "./ProjectDetailsPage.module.scss";
import { ProjectDetails } from "entities/Project";

export const ProjectDetailsPage = () => {
    return (
        <div className={classes.ProjectsPage}>
            <div className="container">
                <NavLink to="/projects">
                    <div className={classes.backBtn}>
                        <i className="pi pi-angle-left" style={{ fontSize: "20px" }}></i>
                        <div>GO BACK TO ALL PROJECTS</div>
                    </div>
                </NavLink>
                <ProjectDetails />
            </div>
        </div>
    );
};

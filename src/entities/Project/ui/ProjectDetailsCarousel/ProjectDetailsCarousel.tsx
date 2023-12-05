import { Project, figmaLink } from "../../model/types/project";
import { Carousel } from "primereact/carousel";
import { Card } from "primereact/card";
import classes from "./ProjectDetailsCarousel.module.scss";
import { NavLink } from "react-router-dom";
import { Button } from "primereact/button";

interface ProjectDetailsCarouselProps {
    project?: Project;
}

export const ProjectDetailsCarousel = (props: ProjectDetailsCarouselProps) => {
    const { project } = props;

    return (
        <div>
            <Carousel
                numVisible={1}
                value={project?.links}
                itemTemplate={(item: figmaLink) => (
                    <Card
                        className={classes.card}
                        header={
                            <NavLink target="_blank" to={item.link}>
                                <div
                                    style={{ background: `url('${item.linkImage}') center 0/cover` }}
                                    className={classes.image}
                                ></div>
                            </NavLink>
                        }
                        footer={
                            <NavLink target="_blank" to={item.link}>
                                <Button>SHOW MORE</Button>
                            </NavLink>
                        }
                    />
                )}
            />
        </div>
    );
};

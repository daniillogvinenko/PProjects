import { Project } from "../../model/types/project";
import { Carousel } from "primereact/carousel";

interface ProjectDetailsCarouselProps {
    project?: Project;
}

export const ProjectDetailsCarousel = (props: ProjectDetailsCarouselProps) => {
    const { project } = props;

    return (
        <div>
            <Carousel numVisible={2} value={[1, 2]} itemTemplate={() => 123} />
        </div>
    );
};

export interface figmaLink {
    linkImage: string;
    link: string;
}
export interface Project {
    id: string;
    image: string;
    title: string;
    description: string;
    stack: string[];
    appFunctions: string[];
    links: figmaLink[];
    level: string;
}

interface Link {
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
    links: Link[];
    level: string;
}

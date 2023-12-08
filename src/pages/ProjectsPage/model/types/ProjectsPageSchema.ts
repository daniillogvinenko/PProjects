export interface ProjectsPageSchema {
    selectedTechologies: string[];
    selectedLevel: string;
    query: string;
    // pagination
    pageNumber: number;
    limit: number;
    total: number;
}

export interface ProjectsPageSchema {
    selectedTechologies: string[];
    selectedLevel: string;
    // pagination
    pageNumber: number;
    limit: number;
    total: number;
}

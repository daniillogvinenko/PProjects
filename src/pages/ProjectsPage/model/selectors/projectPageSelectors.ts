import { StateSchema } from "app/providers/storeProvider";

export const getProjectPageSelectedTechnologies = (state: StateSchema) => state?.projectsPage?.selectedTechologies;
export const getProjectPageSelectedLevel = (state: StateSchema) => state?.projectsPage?.selectedLevel;
export const getProjectPageQuery = (state: StateSchema) => state?.projectsPage?.query;
export const getProjectPageLimit = (state: StateSchema) => state.projectsPage.limit;
export const getProjectPagePageNumber = (state: StateSchema) => state.projectsPage.pageNumber;

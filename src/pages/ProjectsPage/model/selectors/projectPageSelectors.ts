import { StateSchema } from "app/providers/storeProvider";

export const getProjectPageSelectedTechnologies = (state: StateSchema) => state?.projectsPage?.selectedTechologies;
export const getProjectPageSelectedLevel = (state: StateSchema) => state?.projectsPage?.selectedLevel;

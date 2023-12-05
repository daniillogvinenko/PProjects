import { rtkApi } from "shared/api/rtkApi";
import { ProjectsPageSchema } from "pages/ProjectsPage/model/types/ProjectsPageSchema";

export interface StateSchema {
    [rtkApi.reducerPath]?: ReturnType<typeof rtkApi.reducer>;
    projectsPage: ProjectsPageSchema;
}

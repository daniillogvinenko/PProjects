import { rtkApi } from "shared/api/rtkApi";
import { Project } from "entities/Project";
import { projectsPageQueryHelper } from "shared/lib/helpers/projectsPageQueryHelper";

const projectsPageApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getProjects: build.query<Project[], {stack: string[], level: string}>({
            query: (selectedFilters) => ({
                url: `/projects?${projectsPageQueryHelper(selectedFilters)}`,
            }),
        }),
    }),
});

export const useProjects = projectsPageApi.useGetProjectsQuery;

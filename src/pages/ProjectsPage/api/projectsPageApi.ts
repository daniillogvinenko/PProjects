import { rtkApi } from "shared/api/rtkApi";
import { Project } from "entities/Project";
import { projectsPageQueryHelper } from "shared/lib/helpers/projectsPageQueryHelper";

const projectsPageApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getProjects: build.query<Project[], { stack: string[]; level: string; limit: number | ""; page: number | "" }>({
            query: (params) => ({
                url: `/projects?${projectsPageQueryHelper(params)}&_limit=${params.limit}&_page=${params.page}`,
            }),
        }),
    }),
});

export const useProjects = projectsPageApi.useGetProjectsQuery;

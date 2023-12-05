import { rtkApi } from "shared/api/rtkApi";
import { Project } from "entities/Project";

const projectDetailsPageApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getProject: build.query<Project, number>({
            query: (id) => ({
                url: `/projects/${id}`,
            }),
        }),
    }),
});

export const useProjectById = projectDetailsPageApi.useGetProjectQuery;

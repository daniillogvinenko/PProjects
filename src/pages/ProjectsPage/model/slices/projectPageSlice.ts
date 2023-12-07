import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ProjectsPageSchema } from "../types/ProjectsPageSchema";

const initialState: ProjectsPageSchema = {
    selectedTechologies: [],
    selectedLevel: "",
    limit: 6,
    pageNumber: 1,
    total: 6,
};

export const projectPageSlice = createSlice({
    name: "dateDetailsPage",
    initialState,
    reducers: {
        setSelectedTechnologies: (state, action: PayloadAction<string[]>) => {
            state.selectedTechologies = action.payload;
        },
        setSelectedLevel: (state, action: PayloadAction<string>) => {
            state.selectedLevel = action.payload;
        },
        setPageNumber: (state, action: PayloadAction<number>) => {
            state.pageNumber = action.payload;
        },
    },
});

export const { actions: projectPageActions, reducer: projectPageReducer } = projectPageSlice;

import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ProjectsPageSchema } from "../types/ProjectsPageSchema";

const initialState: ProjectsPageSchema = {
    selectedTechologies: [],
    selectedLevel: "",
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
    },
});

export const { actions: projectPageActions, reducer: projectPageReducer } = projectPageSlice;

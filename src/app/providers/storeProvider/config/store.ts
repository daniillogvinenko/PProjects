import { configureStore } from "@reduxjs/toolkit";
import { rtkApi } from "shared/api/rtkApi";
import { projectPageReducer } from "pages/ProjectsPage/model/slices/projectPageSlice";

export const store = configureStore({
    reducer: {
        [rtkApi.reducerPath]: rtkApi.reducer,
        projectsPage: projectPageReducer,
    },
    devTools: _IS_DEV_,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(rtkApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

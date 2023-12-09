import "primeicons/primeicons.css";
import { Header } from "widgets/Header";
import { Routes, Route } from "react-router-dom";
import { ProjectDetailsPage } from "pages/ProjectDetailsPage/ui/ProjectDetailsPage";
import { Footer } from "widgets/Footer/ui/Footer";
import { MainPage } from "pages/MainPage";
import classes from "./App.module.scss";
import { Project } from "entities/Project";
import { ProjectsPage } from "pages/ProjectsPage/ui/ProjectsPage";

const projects: Project[] = [];

export const App = () => {
    return (
        <div className={classes.App}>
            <Header />
            <div className={classes.main}>
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/projects" element={<ProjectsPage />} />
                    <Route path="/projects/:id" element={<ProjectDetailsPage />} />
                </Routes>
            </div>
            <Footer />
        </div>
    );
};

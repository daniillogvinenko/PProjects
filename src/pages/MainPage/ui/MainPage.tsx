import { NavLink } from "react-router-dom";
import classes from "./MainPage.module.scss";
import { Button } from "primereact/button";

export const MainPage = () => {
    return (
        <div className={classes.MainPage}>
            <div className={classes.title}>FIND PET PROJECTS IDEAS FOR TRAINING AND FILLING YOUR RESUME!</div>
            <Button size="large" className={classes.Btn}>
                <NavLink to="/projects">SEE PROJECTS</NavLink>
            </Button>
        </div>
    );
};

import classes from "./Header.module.scss";
import { Splitter } from "primereact/splitter";
import { NavLink } from "react-router-dom";

export const Header = () => {
    return (
        <div className={classes.Header}>
            <div className="container">
                <div className={classes.headerContainer}>
                    <div className={classes.flex}>
                        <NavLink to="/">
                            <div className={classes.logo}>PProjects.</div>
                        </NavLink>
                        <div className={classes.avatarContainer}></div>
                    </div>
                </div>
            </div>
            <Splitter />
        </div>
    );
};

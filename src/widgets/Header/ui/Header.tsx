import classes from "./Header.module.scss";
import Logoipsum from "shared/assets/icons/logoipsum.png";
import { Avatar } from "primereact/avatar";
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
                        <div className={classes.avatarContainer}>
                            <div>USERNAME</div>
                            <Avatar icon="pi pi-user" size="xlarge" shape="circle" />
                        </div>
                    </div>
                </div>
            </div>
            <Splitter />
        </div>
    );
};

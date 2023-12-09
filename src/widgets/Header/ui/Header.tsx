import classes from "./Header.module.scss";
import { Splitter } from "primereact/splitter";
import { NavLink } from "react-router-dom";
import { InputSwitch } from "primereact/inputswitch";
import { useState } from "react";

enum Themes {
    dark = "/arya-green/theme.css",
    light = "/lara-light-cyan/theme.css",
}

const changeTheme = (theme: Themes) => {
    let themeLink = document.getElementById("app-theme") as HTMLAnchorElement;
    if (themeLink) {
        themeLink.href = theme;
    }
};

export const Header = () => {
    const [theme, setTheme] = useState(Themes.light);
    let isLight = theme === Themes.light;

    const handleOnThemeChange = () => {
        const newTheme = theme === Themes.light ? Themes.dark : Themes.light;
        setTheme(newTheme);
        changeTheme(newTheme);
    };

    return (
        <div className={classes.Header}>
            <div className="container">
                <div className={classes.headerContainer}>
                    <div className={classes.flex}>
                        <NavLink to="/">
                            <div className={classes.logo}>PProjects.</div>
                        </NavLink>
                        <InputSwitch
                            checked={isLight}
                            onChange={handleOnThemeChange}
                            className={classes.themeSwithcer}
                        ></InputSwitch>
                    </div>
                </div>
            </div>
            <Splitter />
        </div>
    );
};

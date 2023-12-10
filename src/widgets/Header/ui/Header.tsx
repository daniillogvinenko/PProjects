import classes from "./Header.module.scss";
import { Splitter } from "primereact/splitter";
import { NavLink } from "react-router-dom";
import { InputSwitch } from "primereact/inputswitch";
import { useState } from "react";
import { Dropdown, DropdownChangeEvent } from "primereact/dropdown";

enum Themes {
    dark = "/themes/arya-green/theme.css",
    light = "/themes/lara-light-cyan/theme.css",
}

const DropdownThemes = [
    "lara-light-cyan",
    "arya-green",
    "soho-dark",
    "viva-light",
    "viva-dark",
    "vela-blue",
    "bootstrap4-light-blue",
    "bootstrap4-dark-blue",
];

const changeTheme = (theme: string) => {
    let themeLink = document.getElementById("app-theme") as HTMLAnchorElement;
    if (themeLink) {
        themeLink.href = theme;
    }
};

export const Header = () => {
    const [theme, setTheme] = useState(Themes.light);
    let isLight = theme === Themes.light;

    const [dropdowntheme, setDropdowntheme] = useState("lara-light-cyan");

    const handleOnThemeChange = () => {
        const newTheme = theme === Themes.light ? Themes.dark : Themes.light;
        setTheme(newTheme);
        changeTheme(newTheme);
    };

    const handleDropdownChange = (e: DropdownChangeEvent) => {
        setDropdowntheme(e.value);
        changeTheme(`/themes/${e.value}/theme.css`);
    };

    return (
        <div className={classes.Header}>
            <div className="container">
                <div className={classes.headerContainer}>
                    <div className={classes.flex}>
                        <NavLink to="/">
                            <div className={classes.logo}>PProjects.</div>
                        </NavLink>
                        {/* <InputSwitch
                            checked={isLight}
                            onChange={handleOnThemeChange}
                            className={classes.themeSwithcer}
                        ></InputSwitch> */}
                        <Dropdown
                            className={classes.Dropdown}
                            onChange={handleDropdownChange}
                            options={DropdownThemes}
                            value={dropdowntheme}
                        />
                    </div>
                </div>
            </div>
            <Splitter />
        </div>
    );
};

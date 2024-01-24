import classes from "./Header.module.scss";
import { Splitter } from "primereact/splitter";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { Dropdown, DropdownChangeEvent } from "primereact/dropdown";

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
    const [dropdowntheme, setDropdowntheme] = useState("lara-light-cyan");

    const handleDropdownChange = (e: DropdownChangeEvent) => {
        setDropdowntheme(e.value);
        changeTheme(`/themes/${e.value}/theme.css`);
    };

    return (
        <div className={classes.Header}>
            <div className="container">
                <div className={classes.flex}>
                    <NavLink to="/">
                        <div className={classes.logo}>PProjects.</div>
                    </NavLink>
                    <Dropdown
                        className={classes.Dropdown}
                        onChange={handleDropdownChange}
                        options={DropdownThemes}
                        value={dropdowntheme}
                    />
                </div>
            </div>
            <Splitter />
        </div>
    );
};

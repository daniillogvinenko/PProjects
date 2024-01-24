import classes from "./Header.module.scss";
import { Splitter } from "primereact/splitter";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { Dropdown, DropdownChangeEvent } from "primereact/dropdown";
import { LOCALSTORAGE_THEME, changeTheme } from "shared/lib/helpers/changeTheme";

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

export const Header = () => {
    // начальной темой устанавливается та, которая находится в ls, если она пустая - lara light cyan
    const [dropdowntheme, setDropdowntheme] = useState(localStorage.getItem(LOCALSTORAGE_THEME) || "lara-light-cyan");

    const handleDropdownChange = (e: DropdownChangeEvent) => {
        setDropdowntheme(e.value);
        changeTheme(e.value);
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

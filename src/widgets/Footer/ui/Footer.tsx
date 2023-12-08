import { Splitter } from "primereact/splitter";
import classes from "./Footer.module.scss";

export const Footer = () => {
    const date = new Date();
    return (
        <>
            <Splitter className={classes.splitter} />

            <div className={classes.Footer}>
                <div>©Daniil Logvinenko {date.getFullYear()}</div>
            </div>
        </>
    );
};

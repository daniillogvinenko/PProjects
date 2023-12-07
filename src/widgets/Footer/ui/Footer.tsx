import { Splitter } from "primereact/splitter";
import classes from "./Footer.module.scss";

export const Footer = () => {
    return (
        <>
            <Splitter className={classes.splitter} />

            <div className={classes.Footer}>
                <div>©Daniil Logvinenko 2023</div>
            </div>
        </>
    );
};

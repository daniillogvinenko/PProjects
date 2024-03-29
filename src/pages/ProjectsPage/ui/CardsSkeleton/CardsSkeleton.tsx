import { Skeleton } from "primereact/skeleton";
import classes from "./CardsSkeleton.module.scss";
import cls from "../ProjectsPage.module.scss";

export const CardsSkeleton = () => {
    return (
        <div className={cls.cards}>
            <div className={classes.skeletonContainer}>
                <Skeleton width="100%" height="586px" />
            </div>
            <div className={classes.skeletonContainer}>
                <Skeleton width="100%" height="586px" />
            </div>
            <div className={classes.skeletonContainer}>
                <Skeleton width="100%" height="586px" />
            </div>
            <div className={classes.skeletonContainer}>
                <Skeleton width="100%" height="586px" />
            </div>
            <div className={classes.skeletonContainer}>
                <Skeleton width="100%" height="586px" />
            </div>
            <div className={classes.skeletonContainer}>
                <Skeleton width="100%" height="586px" />
            </div>
        </div>
    );
};

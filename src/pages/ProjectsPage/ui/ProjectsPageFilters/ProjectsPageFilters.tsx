import { Card } from "primereact/card";
import classes from "./ProjectsPageFilters.module.scss";
import { MultiSelect, MultiSelectChangeEvent } from "primereact/multiselect";
import { useSelector } from "react-redux";
import {
    getProjectPageSelectedLevel,
    getProjectPageSelectedTechnologies,
} from "../../model/selectors/projectPageSelectors";
import { projectPageActions } from "../../model/slices/projectPageSlice";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { Dropdown, DropdownChangeEvent } from "primereact/dropdown";
import { Button } from "primereact/button";

export const ProjectsPageFilters = () => {
    const dispatch = useAppDispatch();
    const selectedTechnologies = useSelector(getProjectPageSelectedTechnologies);
    const setSelectedTechnologies = (e: MultiSelectChangeEvent) => {
        dispatch(projectPageActions.setSelectedTechnologies(e.value));
    };

    const selectedLevel = useSelector(getProjectPageSelectedLevel);
    const setSelectedLevel = (e: DropdownChangeEvent) => {
        dispatch(projectPageActions.setSelectedLevel(e.value));
    };

    const onResetFilters = () => {
        dispatch(projectPageActions.setSelectedLevel("All"));
        dispatch(projectPageActions.setSelectedTechnologies([]));
    };

    const filterContent = (
        <div>
            <div className={classes.multiSelect}>
                <MultiSelect
                    placeholder="Stack"
                    value={selectedTechnologies}
                    onChange={setSelectedTechnologies}
                    options={["JavaScript", "React", "Functions", "npm", "API calls", "Redux"]}
                />
                <Dropdown
                    placeholder="Level"
                    value={selectedLevel}
                    onChange={setSelectedLevel}
                    options={["All", "Beginner", "Advanced", "Expert"]}
                />
                <Button className={classes.resetFiltersBtn} onClick={onResetFilters}>
                    RESET FILTERS
                </Button>
            </div>
        </div>
    );

    return (
        <div className={classes.ProjectsPageFilters}>
            <Card title="FILTERS" footer={filterContent} className={classes.filter} />
        </div>
    );
};

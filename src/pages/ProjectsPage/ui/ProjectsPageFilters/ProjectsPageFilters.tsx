import { Card } from "primereact/card";
import classes from "./ProjectsPageFilters.module.scss";
import { MultiSelect, MultiSelectChangeEvent } from "primereact/multiselect";
import { useSelector } from "react-redux";
import {
    getProjectPageQuery,
    getProjectPageSelectedLevel,
    getProjectPageSelectedTechnologies,
} from "../../model/selectors/projectPageSelectors";
import { projectPageActions } from "../../model/slices/projectPageSlice";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { Dropdown, DropdownChangeEvent } from "primereact/dropdown";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { FormEvent } from "react";
import { useDebounce } from "shared/lib/hooks/useDebounce/useDebounce";

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

    const query = useSelector(getProjectPageQuery);

    const onResetFilters = () => {
        dispatch(projectPageActions.setSelectedLevel("All"));
        dispatch(projectPageActions.setSelectedTechnologies([]));
    };

    const onChangeHandler = (e: FormEvent<HTMLInputElement>) => {
        dispatch(projectPageActions.setQuery(e.currentTarget?.value));
    };

    const filterContent = (
        <div>
            <div className={classes.multiSelect}>
                <span className="p-input-icon-left">
                    <i className="pi pi-search" />
                    <InputText
                        onChange={onChangeHandler}
                        value={query}
                        className={classes.searchInput}
                        placeholder="Search"
                    />
                </span>
                <MultiSelect
                    placeholder="Stack"
                    value={selectedTechnologies}
                    onChange={setSelectedTechnologies}
                    options={["JavaScript", "React", "SCSS", "Redux", "TailWind", "JSON server", "API calls"]}
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

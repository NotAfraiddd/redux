import { createSelector } from "reselect";

export const todoListSelector = (state) => state.todoList;
export const searchTextSelector = (state) => state.filters.search;
export const filterStatusSelector = (state) => state.filters.status;
export const filterPrioritySelector = (state) => state.filters.priority;

export const todoShowResults = createSelector(
    todoListSelector,
    searchTextSelector,
    filterStatusSelector,
    filterPrioritySelector,
    (todoList, searchText, filterStatus, filterPriority) => {
        return todoList.filter((dataInput) => {
            if (filterStatus === "All")
                return filterPriority.length
                    ? dataInput.name.includes(searchText) && dataInput.priority.includes(filterPriority)
                    : dataInput.name.includes(searchText);
            return (
                dataInput.name.includes(searchText) &&
                (filterStatus === "Completed" ? dataInput.completed : !dataInput.completed) &&
                (filterPriority.length ? dataInput.priority.includes(filterPriority) : true)
            );
        });
    }
);

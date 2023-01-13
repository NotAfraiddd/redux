import { createSelector } from "reselect";

export const todoListSelector = (state) => state.todoList;
export const searchTextSelector = (state) => state.filters.search;
export const filterStatusSelector = (state) => state.filters.status;

export const todoShowResults = createSelector(
    todoListSelector,
    searchTextSelector,
    filterStatusSelector,
    (todoList, searchText, filterStatus) => {
        return todoList.filter((dataInput) => {
            if (filterStatus === 'All')
                return dataInput.name.includes(searchText);
            return (
                dataInput.name.includes(searchText) &&
                (filterStatus === 'Completed' ? dataInput.completed : !dataInput.completed
                )
            )
        })
    })
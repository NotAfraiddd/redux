import { createSelector } from "reselect";

export const todoListSelector = (state) => state.todoList;
export const searchTextSelector = (state) => state.filters.search;

export const todoShowResults = createSelector(todoListSelector, searchTextSelector, (todoList, searchText) => {
    return todoList.filter((dataInput) => {
        return dataInput.includes(searchText)
    })
})
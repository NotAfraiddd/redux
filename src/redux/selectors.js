// // export const todoListSelector = (state) => state.todoList;
// export const todoListSelector = (state) => {
//     const todoShowResults = state.todoList.filter((data) => {
//         return data.name.includes(state.filters.search);
//     })
//     return todoShowResults;
// }

// export const searchTextSelector = (state) => state.filters.search;

// ----------------------sử dụng reselect cho gọn code
import { createSelector } from "reselect";

export const todoListSelector = (state) => state.todoList;
export const searchTextSelector = (state) => state.filters.search;

export const todoShowResults = createSelector(todoListSelector, searchTextSelector, (todoList, searchText) => {
    return todoList.filter((dataInput) => {
        return dataInput.includes(searchText)
    })
})
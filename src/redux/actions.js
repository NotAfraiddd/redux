export const addTodo = (data) => {
    return {
        type: "todoList/addTodo",
        payload: data,
    };
};

export const toggleTodoStatus = (dataID) => {
    return {
        type: "todoList/toggleTodoStatus",
        payload: dataID,
    };
};

export const searchTodo = (data) => {
    return {
        type: "filters/searchTodo",
        payload: data,
    };
};

export const statusFilterTodo = (data) => {
    return {
        type: "filters/statusFilterTodo",
        payload: data,
    };
};

export const priorityFilterTodo = (data) => {
    return {
        type: "filters/priorityFilterTodo",
        payload: data,
    };
};

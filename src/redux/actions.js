export const addTodo = (data) => {
    return {
        type: 'todoList/addTodo',
        payload: data,
    }
}

export const searchTodo = (data) => {
    return {
        type: 'filters/searchTodo',
        payload: data,
    }
}
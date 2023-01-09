const initState = {
    filters: {
        search: '',
        status: 'All',
        priority: []
    },
    todoList: [
        { id: 1, name: 'Hoc bai', completed: false, priority: 'High' },
        { id: 2, name: 'An', completed: true, priority: 'Medium' },
        { id: 3, name: 'Ngu', completed: true, priority: 'Low' },

    ]
}

const rootReducer = (state = initState, action) => {
    console.log({ state, action });
    switch (action.type) {
        case 'todoList/addTodo':
            return {
                ...state,
                // ...state, dùng để copy
                todoList: [
                    ...state.todoList,
                    // ...state, dùng để copy trong todoList htai
                    action.payload
                ]
            }

        default:
            return state
    }
}

export default rootReducer;
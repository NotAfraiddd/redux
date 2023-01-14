const initState = [
    { id: 1, name: "Hoc bai", completed: false, priority: "High" },
    { id: 2, name: "An", completed: true, priority: "Medium" },
    { id: 3, name: "Ngu", completed: true, priority: "Low" },
];

const todoListReducer = (state = initState, action) => {
    switch (action.type) {
        case "todoList/addTodo":
            return [...state, action.payload];
        case "todoList/toggleTodoStatus":
            return state.map((todo) => (todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo));
        default:
            return state;
    }
};

export default todoListReducer;

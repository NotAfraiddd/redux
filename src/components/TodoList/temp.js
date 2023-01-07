//REDUCERS
// => Là 1 fun
const initValue = { value: 0 };
const rootReducer = (state = initValue, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                // copy state hien tai
                ...state,
                // set lai state moi
                value: state.value + 1
            }
        case 'todoList/increment':
            return {
                ...state,
            }
        default:
            return state;
    }
}

// ACTION

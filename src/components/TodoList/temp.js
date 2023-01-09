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
                value: state.value + action.payload
            }
        default:
            return state;
    }
}

// ACTION

const INCREMENT = {
    type: 'todoList/increment',
    payload: 10,
}
// Action creators
const incrementCreator = (data) => {
    return {
        type: 'todoList/increment',
        payload: data,
    }
}

incrementCreator(10)

// dispatch
// dispatch(INCREMENT)
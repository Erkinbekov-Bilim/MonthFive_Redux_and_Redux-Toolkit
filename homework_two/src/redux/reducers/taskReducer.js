import { types } from "../types/types";

const initialState = {
    tasks: []
}

export default function taskReducer(state = initialState, action) {
    switch (action.type) {
        case types.ADD_TASK:
            return {
                ...state, 
                tasks: [
                    ...state.tasks, 
                    {
                        id: state.tasks.length + 1,
                        title: action.payload.title,
                        description: action.payload.description,
                        isCompleted: false
                    }
                ]
            };
        case types.EDIT_TASK:
            return {
                ...state,
                tasks: state.tasks.map(task =>
                    task.id === action.payload.id
                        ? { ...task, title: action.payload.title, description: action.payload.description }
                        : task
                ) 
            }
        case types.DELETE_TASK:
            return {
                ...state,
                tasks: state.tasks.filter(task => task.id !== action.payload.id)
            }
        case types.TOGGLE_TASK:
            return {
                ...state,
                tasks: state.tasks.map(task =>
                    task.id === action.payload.id ? { ...task, isCompleted: action.payload.isCompleted } : task
                )
            }
        default:
            return state
    }
}

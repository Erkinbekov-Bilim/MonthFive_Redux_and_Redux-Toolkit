import { types } from "../types/types";

export function addTaskAction(task) {
    return {
        type: types.ADD_TASK,
        payload: task
    }
}

export function editTaskAction(task) {
    return {
        type: types.EDIT_TASK,
        payload: task
    }
}

export function deleteTaskAction(id) {
    return {
        type: types.DELETE_TASK,
        payload: {id}
    }
}

export function toggleTaskAction(task) {
    return {
        type: types.TOGGLE_TASK,
        payload: task
    }
}
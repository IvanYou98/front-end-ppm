import {createSlice} from "@reduxjs/toolkit";
import {getErrors} from "./errors";
import axios from "axios";

const slice = createSlice({
    name: "backlogs",
    initialState: {
        taskList: [],
        selectedTask: {}
    },
    reducers: {
        tasksLoaded: (state, action) => {
            const {data} = action.payload;
            state.taskList = data;
        },

        taskFound: (state, action) => {
            const {data} = action.payload;
            state.selectedTask = data;
        },

        taskDeleted: (state, action) => {
            const {projectSequence} = action.payload;
            state.taskList = state.taskList.filter(task => task.projectSequence !== projectSequence)
        }
    }
});

export const {tasksLoaded, taskFound, taskDeleted} = slice.actions;
export default slice.reducer;


const baseURL = "/api/backlog"

export const saveTask = (projectId, task, history) => async dispatch => {
    try {
        await axios.post(baseURL + "/" + projectId, task);
        history.push(`/projectBoard/${projectId}`);
        dispatch({
            type: getErrors,
            payload: {}
        })
    } catch (err) {
        dispatch({
            type: getErrors,
            payload: {
                errors: err.response.data
            }
        })
    }
}


export const loadTasks = (projectId) => async dispatch => {
    try {
        const res = await axios.get(baseURL + "/" + projectId);
        dispatch({
            type: tasksLoaded,
            payload: {
                data: res.data
            }
        })

    } catch (err) {
        dispatch({
            type: getErrors,
            payload: {
                errors: err.response.data
            }
        })
    }
}

export const findTaskById = (projectId, projectSequence)  => async dispatch => {
    try {
        const res = await axios.get(baseURL + "/" + projectId + "/" + projectSequence);
        dispatch({
            type: taskFound,
            payload: {
                data: res.data
            }
        })
    } catch (err) {
        dispatch({
            type: getErrors,
            payload: {
                errors: err.response.data
            }
        })
    }
}

export const deleteTaskById = (projectId, projectSequence)  => async dispatch => {
    try {
        await axios.delete(baseURL + "/" + projectId + "/" + projectSequence);
        dispatch({
            type: taskDeleted,
            payload: {
                projectSequence
            }
        })
    } catch (err) {
        dispatch({
            type: getErrors,
            payload: {
                errors: err.response.data
            }
        })
    }
}





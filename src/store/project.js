import {createSlice} from "@reduxjs/toolkit";
import {getErrors} from "./errors";
import axios from "axios";

const slice = createSlice({
    name: "projects",
    initialState: {
        list: [],
        selectedProject: {}
    },
    reducers: {
        projectsLoaded: (projects, action) => {
            const {data} = action.payload;
            projects.list = data;
        },
        projectFound: (projects, action) => {
            const {data} = action.payload;
            projects.selectedProject = data;
        },
        projectDeleted: (projects, action) => {
            const {projectId} = action.payload;
            projects.list =  projects.list.filter(project => project.projectIdentifier !== projectId);
        }
    }
})

export const {projectsLoaded, projectFound, projectDeleted} = slice.actions;
export default slice.reducer;

const baseURL = "/api/project"

export const saveProject = (project, history) => async dispatch => {
    try {
        await axios.post(baseURL, project);
        history.push('/dashboard');
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

export const loadProjects = () => async dispatch => {
    try {
        const res = await axios.get(baseURL + "/all");
        dispatch({
            type: projectsLoaded,
            payload: {
                data: res.data
            }
        })

    } catch (err) {
        console.log(err);
    }
}

export const findProjectById = (projectId, history) => async dispatch => {
    try {
        const res = await axios.get(baseURL + "/" + projectId);
        dispatch({
            type: projectFound,
            payload: {
                data: res.data
            }
        })
    } catch (err) {
        history.push("/dashboard")
    }
}

export const deleteProjectById = (projectId, history) => async dispatch => {
    try {
        if (!window.confirm("Are you sure you want to delete this project?")) return;
        await axios.delete(baseURL + "/" + projectId);
        dispatch({
            type: projectDeleted,
            payload: {
                projectId
            }
        })
    } catch (err) {
        console.log(err);
    }
}




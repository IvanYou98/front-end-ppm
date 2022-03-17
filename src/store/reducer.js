import {combineReducers} from "redux";
import errorsReducer from "./errors";
import projectReducer from "./project"
import backlog from "./backlog";

export default combineReducers({
    projects: projectReducer,
    errors: errorsReducer,
    backlog: backlog
})
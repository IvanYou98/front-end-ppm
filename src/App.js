import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter, Route} from "react-router-dom";
import NavBar from "./components/NavBar";
import AddProject from "./components/project/AddProject";
import Dashboard from "./components/Dashboard";
import {Provider} from "react-redux";
import configureStore from "./store/configureStore";
import UpdateProject from "./components/project/UpdateProject";
import ProjectBoard from "./components/ProjectBoard/ProjectBoard";
import AddProjectTask from "./components/ProjectBoard/ProjectTasks/AddProjectTask";
import UpdateProjectTask from "./components/ProjectBoard/ProjectTasks/UpdateProjectTask";

const store = configureStore();

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <div>
                    <NavBar/>
                    <Route path="/dashBoard" exact component={props => <Dashboard {...props} />}/>
                    <Route path="/addProject" exact component={props => <AddProject {...props} />}/>
                    <Route path="/updateProject/:id" exact component={props => <UpdateProject {...props} />}/>
                    <Route path="/deleteProject/:id" exact component={props => <Dashboard {...props} />}/>
                    <Route path="/projectBoard/:id" exact component={props => <ProjectBoard {...props} />} />
                    <Route path="/addProjectTask/:id" exact component={props => <AddProjectTask {...props} />} />
                    <Route path="/updateProjectTask/:projectId/:projectSequence" exact component={props => <UpdateProjectTask {...props} />} />
                </div>
            </BrowserRouter>
        </Provider>
    );
}

export default App;

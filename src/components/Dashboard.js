import React, {Component} from 'react';
import ProjectItem from "./project/ProjectItem";
import CreateProjectItemButton from "./project/CreateProjectItemButton";
import {loadProjects} from "../store/project";
import {connect} from "react-redux";


class Dashboard extends Component {
    state = {
        projects: {}
    }

    componentDidMount() {
        this.props.loadProjects();
    }

    render() {

        const {projects} = this.props;

        return (
            <div className="projects">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="display-4 text-center">Projects</h1>
                            <br/>
                            <CreateProjectItemButton/>
                            <br/>
                            <hr/>
                            {projects.map(project =>
                                <ProjectItem
                                    key = {project.id}
                                    project={project}/>)}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


const mapStateToProps = state => ({
    projects: state.projects.list
})


export default connect(mapStateToProps, {loadProjects})(Dashboard);
import React from 'react';
import Form from "../common/Form";
import {connect} from "react-redux";
import {saveProject, findProjectById} from "../../store/project";


class UpdateProject extends Form {
    state = {
        data: {
            projectName: "",
            projectIdentifier: "",
            description: "",
            start_date: "",
            end_date: ""
        },
        errors: {}
    };

    componentDidMount() {
        const projectId = this.props.match.params.id;
        this.props.findProjectById(projectId, this.props.history);
    }

    componentWillReceiveProps(nextProps, nextContext) {
        const {project, errors} = nextProps;
        if (project) {
            this.setState({
                data: project
            })
        }
        if (errors) {
            this.setState({
                errors
            })
        }

    }


    handleSubmit = e => {
        e.preventDefault();
        this.props.saveProject(this.state.data, this.props.history);
    }


    render() {
        return (
            <div>
                <div className="project">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 m-auto">
                                <h5 className="display-4 text-center">Update Project form</h5>
                                <hr/>
                                <form onSubmit={this.handleSubmit}>
                                    {this.renderInput("projectName", "Project Name", "text")}
                                    {this.renderInput("projectIdentifier", "Unique Project ID", "text", true)}
                                    {this.renderTextArea("Project Description", "description")}
                                    <h6>Start Date</h6>
                                    {this.renderInput("start_date", 'Start Date', "date")}
                                    <h6>Estimated End Date</h6>
                                    {this.renderInput("end_date", "End Date", "date")}
                                    {this.renderSubmitBtn("btn btn-primary btn-block mt-4")}
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    errors: state.errors.data,
    project: state.projects.selectedProject
})


export default connect(
    mapStateToProps,
    {
        findProjectById,
        saveProject
    })(UpdateProject);

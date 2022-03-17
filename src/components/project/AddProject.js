import React from 'react';
import Form from "../common/Form";
import {connect} from "react-redux";
import {saveProject} from "../../store/project";


class AddProject extends Form {
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
                                <h5 className="display-4 text-center">Create Project form</h5>
                                <hr/>
                                <form onSubmit={this.handleSubmit}>
                                    {this.renderInput("projectName", "Project Name", "text")}
                                    {this.renderInput("projectIdentifier", "Unique Project ID", "text")}
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
    errors: state.errors.data
})

export default connect(mapStateToProps, {saveProject})(AddProject);

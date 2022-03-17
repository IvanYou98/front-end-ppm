import React from 'react';
import Form from "../../common/Form";
import {connect} from "react-redux";
import {saveTask} from "../../../store/backlog";
import {Link} from "react-router-dom";

class AddProjectTask extends Form {
    state = {
        data: {
            summary: "",
            acceptanceCriteria: "",
            dueDate: "",
            priority: 0,
            status: ""
        },
        errors: {}
    }

    handleSubmit = e => {
        e.preventDefault();
        const {match, history} = this.props;
        this.props.saveTask(match.params.id, this.state.data, history)
    }

    render() {
        return (
            <div className="add-PBI">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <Link to={`/projectBoard/${this.props.match.params.id}`} className="btn btn-light">
                                Back to Project Board
                            </Link>
                            <h4 className="display-4 text-center">Add Project Task</h4>
                            {/*<p className="lead text-center">Project Name + Project Code</p>*/}

                            <form onSubmit={this.handleSubmit}>
                                {this.renderInput("summary", "Place Task Summary", "text")}
                                {this.renderTextArea("Acceptance Criteria", "acceptanceCriteria")}
                                <h6>Due Date</h6>
                                {this.renderInput("dueDate", "Due Date", "date")}
                                {this.renderSelector(["Select Priority", "High", "Medium", "Low"], "priority")}
                                {this.renderSelector(["Select Status", "TO DO", "IN PROGRESS", "DONE"],
                                    "status",
                                    ["", "TO_DO", "IN_PROGRESS", "DONE"])}

                                <input type="submit" className="btn btn-primary btn-block mt-4"/>
                            </form>
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


export default connect(mapStateToProps, {saveTask})(AddProjectTask)


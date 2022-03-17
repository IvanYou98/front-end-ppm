import React from 'react';
import Form from "../../common/Form";
import {connect} from "react-redux";
import {saveTask, findTaskById} from "../../../store/backlog";
import {Link} from "react-router-dom";

class UpdateProjectTask extends Form {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                projectSequence: "",
                summary: "",
                acceptanceCriteria: "",
                dueDate: "",
                priority: 0,
                status: ""
            },
            errors: {}
        }
    }


    componentDidMount() {
        const {projectId, projectSequence} = this.props.match.params;
        this.props.findTaskById(projectId, projectSequence);
    }

    componentWillReceiveProps(nextProps, nextContext) {
        const {task, errors} = nextProps;
        if (task) {

            this.setState({
                data: task
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
        const {match, history} = this.props;
        this.props.saveTask(match.params.projectId, this.state.data, history)
    }

    render() {
        return (
            <div className="add-PBI">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <Link to={`/projectBoard/${this.state.projectId}`} className="btn btn-light">
                                Back to Project Board
                            </Link>
                            <h4 className="display-4 text-center">Update Project Task</h4>

                            <form onSubmit={this.handleSubmit}>
                                {this.renderInput("projectSequence", "", "text", true)}
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
    errors: state.errors.data,
    task: state.backlog.selectedTask
})


export default connect(mapStateToProps, {saveTask, findTaskById})(UpdateProjectTask)


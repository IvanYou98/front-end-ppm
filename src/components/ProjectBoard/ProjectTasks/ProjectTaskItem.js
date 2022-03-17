import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {deleteTaskById} from "../../../store/backlog";

class ProjectTaskItem extends Component {

    handleTaskDelete = (projectIdentifier, projectSequence) => {
        this.props.deleteTaskById(projectIdentifier, projectSequence);
    }



    render() {
        const {task} = this.props;

        let priorityString;
        let priorityClass;

        if (task.priority === 1) {
            priorityString = "HIGH";
            priorityClass = "bg-danger text-light";
        }
        if (task.priority === 2) {
            priorityString = "MEDIUM";
            priorityClass = "bg-warning text-light";
        }
        if (task.priority === 3) {
            priorityString = "LOW";
            priorityClass = "bg-info text-light";
        }

        return (
            <div className="card mb-1 bg-light">
                <div className= {"card-header text-primary " + priorityClass}>
                    ID:{task.projectSequence} -- Priority: {priorityString}
                </div>
                <div className="card-body bg-light">
                    <h5 className="card-title">{task.summary}</h5>
                    <p className="card-text text-truncate ">
                        {task.acceptanceCriteria}
                    </p>
                    <Link to={"/updateProjectTask/" + task.projectIdentifier + "/" + task.projectSequence} className="btn btn-primary">
                        View / Update</Link>
                    <button
                        className="btn btn-danger ml-4"
                        onClick= {() => this.handleTaskDelete(task.projectIdentifier, task.projectSequence) }>
                        Delete
                    </button>
                </div>
            </div>
        );
    }
}



export default connect(null, {deleteTaskById})(ProjectTaskItem);
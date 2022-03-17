import React, {Component} from 'react';
import ProjectTaskItem from "./ProjectTasks/ProjectTaskItem";

class Backlog extends Component {

    render() {
        const {tasks} = this.props;
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card text-center mb-2">
                            <div className="card-header bg-secondary text-white">
                                <h3>TO DO</h3>
                            </div>
                        </div>
                        {tasks.map(task => task.status === "TO_DO" ? <ProjectTaskItem task={task} key={task.projectSequence}/> : null)}

                    </div>
                    <div className="col-md-4">
                        <div className="card text-center mb-2">
                            <div className="card-header bg-primary text-white">
                                <h3>In Progress</h3>
                            </div>
                        </div>
                        {tasks.map(task => task.status === "IN_PROGRESS" ? <ProjectTaskItem task={task} key={task.projectSequence}/> : null)}
                    </div>
                    <div className="col-md-4">
                        <div className="card text-center mb-2">
                            <div className="card-header bg-success text-white">
                                <h3>Done</h3>
                            </div>
                        </div>
                        {tasks.map(task => task.status === "DONE" ? <ProjectTaskItem task={task} key={task.projectSequence} /> : null)}
                    </div>
                </div>
            </div>
        );
    }
}

export default Backlog;
import React, {Component} from "react";
import {connect} from 'react-redux'


class Todo extends Component {

    render() {
        return (
            <div className="todo-item">
             <span className="todo-content">{this.props.content}</span> 
             <span className="todo-status">{this.props.status}</span>    
            </div>
        );
    }
}

export default connect(null)(Todo);
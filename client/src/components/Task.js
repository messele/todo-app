import React, { Component } from 'react'

export default class Task extends Component {
    render() {
        return (

                <div className="task">
                    <input type="checkbox" className="taskStatus" value = {this.props.done}/>    
                    <span className="taskContent">{this.props.name}</span> 
                </div>
        
        );
    }
}

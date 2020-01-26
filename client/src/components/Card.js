import React, { Component } from 'react'
import { connect } from 'react-redux';
import Task from './Task'
import { removeCard } from '../actions';
import Draggable from 'react-draggable'
import ErrorBoundary from './ErrorBoundary'

class Card extends Component {

    constructor() {
        super(...arguments);
        this.state = {
            showDetails: false,
            deltaPosition: {
                x: 200, y: 200
            },
        }

    }

    toggleDetails =
        () => this.setState({
            showDetails: !this.state.showDetails
        });

    handleDrag = (e, ui) => {
        const { x, y } = this.state.deltaPosition;
        console.log("* handleDrag: (" + x + "," + y + ")")
        if (ui.deltaX > 0 && ui.deltaY > 0) {
            this.setState({
                deltaPosition: {
                    x: x + ui.deltaX,
                    y: y + ui.deltaY,
                }
            });
        }
    };

    onStart = () => {
        console.log("* OnStart -> ActiveDrags: " + this.state.activeDrags)
        this.setState({ activeDrags: this.state.activeDrags });
    };

    onStop = () => {
        console.log("* OnStop -> ActiveDrags: " + this.state.activeDrags)
        this.setState({ activeDrags: this.state.activeDrags });
    };

    render() {
        const dragHandlers = { onStart: this.onStart, onStop: this.onStop };
        const { id, title, description, status, tasks } = this.props;
        console.log("Card: " + description)
        return (
            <ErrorBoundary>
                <Draggable  onDrag={this.handleDrag} {...dragHandlers}>
                    <div className={"card " + status}>
                        {title &&
                            <div>
                                <div className={"title" + (this.state.showDetails ? "--is-open " : " ")} onClick={
                                    this.toggleDetails.bind(this)
                                }>
                                    {title}
                                </div>
                                <button className="btn remove" onClick={() => this.props.removeCard(id)}>-</button>
                                <br />
                            </div>

                        }
                        <div className="description" >{description}</div>

                        {this.state.showDetails && tasks && (tasks.length > 0) &&
                            <ul>
                                {tasks.map(task =>
                                    <li><Task key={task.id} {...task} /></li>)}
                            </ul>
                        }
                        {this.state.showDetails && (!tasks || tasks.length === 0) &&
                            <div className="warning">No tasks defined!!</div>
                        }

                    </div>
                </Draggable>
            </ErrorBoundary>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    removeCard: id => dispatch(removeCard(id))
})

export default connect(null, mapDispatchToProps)(Card);

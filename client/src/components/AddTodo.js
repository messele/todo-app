import React, {Component} from 'react'
import {addCard} from '../actions'
import {connect} from 'react-redux'

class AddTodo extends Component {

    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.input = React.createRef();
    }

    // addTask(ev) {
    //         ev.preventDefault();
    //         console.log("About to add : " + this.inputElement.value);
    //         if (this.inputElement.value !== "") {
    //             var newItem = {
    //               text: this.inputElement.value,
    //               key: Date.now()
    //             };
             
    //             this.setState((prevState) => {
    //               return { 
    //                 items: prevState.items.concat(newItem) 
    //               };
    //             });
               
    //             // reset value
    //             this.inputElement.value = "";
    //         }
    // }

    handleClick(e){
        this.props.addTodo(this.inputElement);
        this.inputElement="";
    }
   
    render() {
        return (
            <div>
                <input type="text" placeholder="add task" ref={this.inputElement} onChange={
                    e => this.inputElement = e.target.value
                }/>
                <button value="Add" onClick={this.handleClick}></button>
            </div>
        );
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
      addTodo: todo => dispatch(addCard(todo))
    };
}

export default connect(null, mapDispatchToProps)(AddTodo);
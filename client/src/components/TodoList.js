import React, {Component} from "react";
//import {connect} from "react-redux"
import Todo from "./Todo";
//import { FETCH_TODOS } from "../actionsType";


class TodoList extends Component {
    
    render() {
        console.log(this.props);
        const {todos} = this.props;
        return (
            <div>
             <p>Todos:</p>
             {todos.map( todo => 
                <Todo key={todo.id} {...todo} />
             )}

             {/* <button onClick={() => this.props.fetchAllTodos()} >fetchTodos</button> */}
            </div>
        );
    }
}

// function mapStateToProps (state) {
//     console.log("log state:")
//     console.log(state);
//     return {
//         todos : state.todos
//     };
// }

// const  mapDispatchToProps=  dispatch => {
//     return {
//         fetchAllTodos : () => dispatch({type:FETCH_TODOS})
//     }
// }

export default TodoList;
// export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
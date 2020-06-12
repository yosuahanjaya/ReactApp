import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

export class Todos extends Component {
    
    markComplete = () => {
        console.log('Hello');
    }

    render() {
        return this.props.todos.map((todo) => (
           <TodoItem todo={ todo } key={ todo.id } markComplete={this.props.markComplete} delTodo={this.props.delTodo}/>
        ));
    }
}



// PropTypes --> validation
Todos.propTypes = {
    todos: PropTypes.array.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
}

export default Todos

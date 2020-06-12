import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class TodoItem extends Component {
    getStyle =  () => {
        return {
            backgroundColor: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }

   // markComplete = (e) => {                         // using arrow function to avoid bind(this) when you call markComplete,
   //     console.log(this.props);                    // because markComplete is user defined function, not a built in function in react
   // }                                               // that's why markComplete can't access props --> ga bisa langsung ubah true false disini

    render() {
        const { id, title } = this.props.todo;
        return (
            <div style={ this.getStyle() }>
                <h3>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} />          
                    {'  '}
                    { title }
                </h3>
            </div>
        )
    }
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

export default TodoItem

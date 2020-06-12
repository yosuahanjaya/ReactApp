import React, { Component } from 'react';
import Todos from './components/Todos'
import './App.css';

class App extends Component {

  state = {
    todos: [
      {
        id: 1,
        title: 'Learn Golang',
        completed: false
      },
      {
        id: 2,
        title: 'Learn Flask',
        completed: false
      },
      {
        id: 3,
        title: 'Learn React',
        completed: true
      },
      {
        id: 4,
        title: 'Learn GraphQL',
        completed: true
      }
    ]
  }

  markComplete = (id) => {
    console.log(id);
  }

  render() {
    return (
      <div className="App">
        <h1>App</h1>
        <Todos todos={ this.state.todos } markComplete={this.markComplete}/>
      </div>
    )
  }
}

export default App;

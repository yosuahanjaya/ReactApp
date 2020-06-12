import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import Todos from './components/Todos'
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';


import './App.css';


class App extends Component {

  // state = {
  //   todos: [
  //     {
  //       id: uuidv4(),
  //       title: 'Learn Golang',
  //       completed: false
  //     },
  //     {
  //       id: uuidv4(),
  //       title: 'Learn Flask',
  //       completed: false
  //     },
  //     {
  //       id: uuidv4(),
  //       title: 'Learn React',
  //       completed: true
  //     },
  //     {
  //       id: uuidv4(),
  //       title: 'Learn GraphQL',
  //       completed: true
  //     }
  //   ]
  // }

  state = {
    todos:[]
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(res => {
        this.setState({ todos: res.data });
      })
  }

  // toggle complete
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    }) });
  }

  // delete todo
  // delTodo = (id) => {
  //   this.setState({ todos: [...this.state.todos.filter(todo => todo.id!==id)]})
  // }

  // add todo
  // addTodo = (title) => {
  //   const newTodo = {
  //     id:uuidv4(),
  //     title:title,
  //     completed:false
  //   }
  //   this.setState({ todos: [...this.state.todos, newTodo]})
  // }

  addTodo = (title) => {
    axios.post('https://jsonplaceholder.typicode.com/todos', {
      title,
      completed:false
    })
    .then(res => this.setState({ todos: [...this.state.todos, res.data]}));
  }

  delTodo = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(res => this.setState({ todos: [...this.state.todos.filter(todo => todo.id!==id)]}) )
  }
  render() {
    return (
      <Router>
        <div className="App">
          <div class="container">
            <Header />


              <Route exact path="/" render={ props => (
                <React.Fragment>
                    <AddTodo addTodo={ this.addTodo } />
                    <Todos todos={ this.state.todos } markComplete={this.markComplete} delTodo={ this.delTodo } />
                </React.Fragment>
              )} />


              <Route path="/about" component={About} />



          </div>
        </div>
      </Router>
    )
  }
}

export default App;

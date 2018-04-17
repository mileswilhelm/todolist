import React, { Component } from 'react';

import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

import './styles/semantic.min.css';
import './App.css';


window.id = 0;
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    };

    this.addTodo = this.addTodo.bind(this);
  }

  componentDidMount() {
    // localStorage.removeItem('todoCache');
    const cachedState = localStorage.getItem('todoCache');
    if (cachedState) {
      this.setState({ data: JSON.parse(cachedState) });
    }
  }

  //add todo function
  addTodo(content) {
    const todo = {content: content, id: window.id++};
    const addData = this.state.data.concat({todo});
    this.setState({ data: addData })
    console.log(this.state.data);
    localStorage.setItem('todoCache', JSON.stringify(addData));
    // console.log(todo);
    // console.log(addData);
  }

  //remove todo function
  handleRemove(id) {
    // console.log(id);

    const todosData = this.state.data.filter((todo) => {
      // console.log(todo.todo.id);
      return todo.todo.id !== id
    });
    // console.log(todosData);
    this.setState({data: todosData});
    localStorage.setItem('todoCache', JSON.stringify(todosData));
  }

  handleEdit(todoId, todoContent) {
    let currentData = this.state.data;
    console.log(currentData);
    console.log(todoId);
    const index = currentData.findIndex((todo) => todo.todo.id === todoId);
    console.log(index);
    console.log(currentData[index]);
    currentData[index].todo.content = todoContent;
    this.setState({data: currentData});
    localStorage.setItem('todoCache', JSON.stringify(currentData));
  }

  render() {
    return (
      <div className="App container ui">
        <header className="App-header ui header">
          <h1 className="aligned center header ui">To Do List</h1>
        </header>
        <TodoForm addTodo={this.addTodo} />
        <TodoList 
          todos={this.state.data}
          remove={this.handleRemove.bind(this)}
          edit={this.handleEdit.bind(this)}
        />
      </div>
    );
  }
}

export default App;

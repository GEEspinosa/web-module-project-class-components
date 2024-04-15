import React from 'react'
import TodoList from './TodoList'
import Form from './Form'


let id = 0
let getId = () => ++id

const initialTodos = [
  {
    name: 'Organize Garage',
    id: getId(), 
    completed: false
  },
  {
    name: 'Bake Cookies',
    id: getId(),
    completed: false
  }
]


export default class App extends React.Component {
  constructor () {
    super();
    this.state = {todos: initialTodos, input: '', showAll: true} 
    
    
  }

  handleChange = e => {
    
    this.setState({
      input: e.target.value
    })
  }

  addTodo = (name) => {
   
    this.setState({
      ...this.state,
      todos: this.state.todos.concat({name, id: getId(), completed: false})
    })
    this.setState({
      input: ''
    })
    
  }

  toggle = (id) => {
    console.log(id)
    this.setState({
      ...this.state,
      todos: this.state.todos.map(td => {
        if ( id == td.id) return {...td, completed: !td.completed}
        return td  
      })
    })
  }

  toggleShowAll = evt => {
   this.setState({
    ...this.state,
    showAll: !this.state.showAll
   })
  }

  render() {
    return (
      <div>
        <h1>Todo App</h1>
        <TodoList todos= {this.state.todos} toggle = {this.toggle} showAll = {this.state.showAll}/>
        <Form handleChange = {this.handleChange} addTodo = {this.addTodo} input ={this.state.input} showAll = {this.state.showAll} toggleShowAll = {this.toggleShowAll}/>
      </div>
    )
  }
}


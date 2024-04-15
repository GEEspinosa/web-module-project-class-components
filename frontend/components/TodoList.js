import React from 'react'
import Todo from './Todo'

export default class TodoList extends React.Component {
  
  
  
  render() {
    
    const {todos, toggle, showAll} = this.props
    const filtered = todos.filter(td => !td.completed || showAll )


    return (
      <div>
        <h2>TodoList</h2>
          <div> 
          {
              filtered.map((todo) => (<Todo key = {todo.id} todo = {todo} toggle={toggle}/>
              ))
            }

         </div>
      </div>
    )
  }
}

import React from 'react'

export default class Todo extends React.Component {
  
  
  
  render() {
    let {name, id, completed} = this.props.todo
    let {toggle} = this.props
    
    return (
      <div>
         <div onClick = {() => toggle(id)}> {name} {completed && 'X'}</div>
      </div>
    )
  }
}

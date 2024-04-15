import React from 'react'

export default class Form extends React.Component {
  
  
  
  render() {
    let {addTodo, input} = this.props
    let {toggleShowAll} = this.props
    

   
    return (
      <div>
        <h3>Form</h3>
        <input type='text' value = {input} placeholder='type here' onChange = {this.props.handleChange}/>
        <button onClick = {() => (addTodo(input))}>Submit</button>
        <button onClick = {toggleShowAll}>Hide Completed</button>
      </div>
    )
  }
}

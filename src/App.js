// Developer TODO: add App component
import React, {Component} from 'react'


class Test extends Component{
constructor(){
  super()
  this.state = {
    list: [
      "this",
      "is a ",
      "todo",
      "List"
    ],
    tood: ''
  }
}
  newTood(e){
    this.setState({tood: e.target.value})
  }
  pushList(e){
    e.preventDefault()
    console.log("2")
    this.state.list.push(this.state.tood)
    this.setState({list: this.state.list, tood: ''})
  }
  render(){
    // let todoList = [
    //   "this",
    //   "is a ",
    //   "todo",
    //   "List"
    // ]

    return (
      <div>
      <h1>Todo List Bro</h1>
      <div >
      {this.state.list.map(function(item, index){
        return <div key={index}><p>{item}</p> <input  type="checkbox"></input></div>
      })}
      </div>
      <form onSubmit={(e) => this.pushList(e)}>
      <input onChange={(e) => this.newTood(e)} value={this.state.tood}></input><button type="submit">add</button>
      </form>
      </div>
    )
  }
}

export default Test

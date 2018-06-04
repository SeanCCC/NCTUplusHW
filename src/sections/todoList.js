import React, { Component } from 'react';
import Home from '../components/Home';


class TodoList extends Component {
    constructor(props) {
        super(props)
        this.add2todoList=this.add2todoList.bind(this)
        this.removeFromTodoList=this.removeFromTodoList.bind(this)
        this.editFromTodoList=this.editFromTodoList.bind(this)
		this.state = {
			"todoList": []
		}
    }
    
    add2todoList(input){
        let currentList = this.state.todoList
        currentList.push(input)
        this.setState({"todoList":currentList})
    }

    removeFromTodoList(index){
        let currentList = this.state.todoList
        currentList.splice(index,1)
        this.setState({"todoList":currentList})
    }

    editFromTodoList(input,index){
        let currentList = this.state.todoList
        currentList.splice(index,1,input)
        this.setState({"todoList":currentList})
    }

	render() {
		return (
            <div className='TodoListLogic'>
                <Home  todoList={this.state.todoList} onAdd={this.add2todoList} onRemove={this.removeFromTodoList} onEdit={this.editFromTodoList}/>
            </div>
		);
	}
}

export default TodoList;
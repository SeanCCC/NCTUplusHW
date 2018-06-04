import React, { Component } from 'react'
import showProps from '../sections/showProps'
import Immutable from 'immutable'
import { Button, Input, Col, List, Form, DatePicker } from 'antd'

@showProps()
class Home extends Component {
    constructor(props) {
        super(props)
        this.handleTimeChange = this.handleTimeChange.bind(this);
		this.handleTextChange = this.handleTextChange.bind(this);
		this.state = {
            "title": '',
            "time": ''
		}
	}

    handleTextChange() {
        let oriState = Immutable.Map(this.state)
        oriState.title = this.refs.textarea.value
	    this.setState(oriState)
    }

    handleTimeChange(date, dateString){
        let oriState = Immutable.Map(this.state)
        oriState.time = dateString
	    this.setState(oriState)
    }

	render() {
		return (
            <div className='HomeContainer'>
                <List
                    itemLayout="horizontal"
                    dataSource={this.props.todoList}
                    renderItem={(item,idx) => (
                    <List.Item>
                        <List.Item.Meta
                        title={"Title:"+item.title}
                        description={"Date:"+item.time}
                        />
                        <Button type="primary" onClick={()=>{this.props.onRemove(idx)}}>Delete</Button>
                        <br/><br/><br/><br/>
                    </List.Item>
                    )}
                />
                <br/>
                <textarea onChange={this.handleTextChange} ref="textarea" defaultValue={this.state.value} />
                <DatePicker onChange={this.handleTimeChange} />
                <Button type="primary" onClick={()=>{this.props.onAdd({
                    "time":this.state.time,
                    "title":this.state.title
                })}}>Add</Button>
            </div>
		);
	}
}

export default Home;
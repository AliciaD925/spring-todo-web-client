import React, {Component} from 'react'
import {Space, Card, Checkbox} from 'antd'
import Todo from "../services/Todo";

interface TodoProp {
   todo: Todo;
}

class TodoItem extends Component<TodoProp>{
    constructor(props: TodoProp){
        super(props);
    }
    render() {
        return (
                <Card title={this.props.todo.title}>
                    <p>Description:</p>
                    <p>{this.props.todo.description}</p>
                    <p>Complete: <Checkbox defaultChecked={this.props.todo.complete} disabled /></p>
                 </Card>
        );
    }
}
export default TodoItem;
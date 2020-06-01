import React, {Component} from 'react'
import {Card, Checkbox, Col} from 'antd'
import Todo from "../services/Todo";
import styles from './styles.module.css';

interface TodoProp {
   todo: Todo;
}

class TodoItem extends Component<TodoProp>{
    constructor(props: TodoProp){
        super(props);
    }
    render() {
        return (
            <Col className="gutter-ro" span={6}>
                <Card title={this.props.todo.title} className={styles.todoCard}>
                    <p>Description:</p>
                    <p>{this.props.todo.description}</p>
                    <p>Complete: <Checkbox defaultChecked={this.props.todo.complete} disabled /></p>
                 </Card>
            </Col>
        );
    }
}
export default TodoItem;
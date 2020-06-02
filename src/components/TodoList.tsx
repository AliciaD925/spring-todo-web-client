import React, {Component} from 'react';
import Todo from "../services/Todo";
import {getTodos} from "../services/todoService";
import TodoItem from "./TodoItem";
import {Row} from "antd";
import TodoForm from "./TodoForm";
import styles from './styles.module.css';

interface TodoListState {
    todos: Todo[];
    loading: boolean;
}

class TodoList extends Component<any, TodoListState> {
    state = {
        todos: [],
        loading: true
    }

    async componentDidMount() {
       await this.loadPage();
    }

    loadPage = async () => {
    let todos = await getTodos();
    this.setState({todos, loading: false});
}

    render() {
        return (
            <div className={styles.todoBody}>
                <h2>This is a todo list</h2>
                {this.state.loading ? (
                    <>
                     <h2>this is loading</h2>
                    </>
                ) : (
                    <>
                        <TodoForm reload={this.loadPage}/>
                        <Row className={styles.todoRows}>
                            {this.state.todos.map((todo: Todo) =>
                                <TodoItem key={todo.id} todo={todo} reload={this.loadPage}/>
                            )}
                        </Row>
                    </>
                )}
            </div>
        );
    }
}

export default TodoList;

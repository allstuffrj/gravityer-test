import React, { useState, useEffect } from 'react';
import { Container, List } from '@mui/material';
import TodoItem from './TodoItem';
import AddTodo from './AddTodo';
import Filter from './Filter';

interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

const TodoApp: React.FC = () => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [filter, setFilter] = useState<string>('All');

    // Load from local storage
    useEffect(() => {
        const storedTodos = localStorage.getItem('todos');
        if (storedTodos) {
            setTodos(JSON.parse(storedTodos));
        }
    }, []);

    // Save to local storage
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const addTodo = (text: string) => {
        const newTodo: Todo = { id: Date.now(), text, completed: false };
        setTodos([...todos, newTodo]);
    };

    const toggleTodo = (id: number) => {
        setTodos(todos.map(todo => (
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        )));
    };

    const deleteTodo = (id: number) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    const changeFilter = (newFilter: string) => {
        setFilter(newFilter);
    };

    const filteredTodos = todos.filter(todo => {
        if (filter === 'Completed') {
            return todo.completed;
        }
        if (filter === 'Pending') {
            return !todo.completed;
        }
        return true;
    });

    return (
        <Container maxWidth="sm">
            <h1>Todo App</h1>
            <AddTodo addTodo={addTodo} />
            <Filter currentFilter={filter} changeFilter={changeFilter} />
            <List>
                {filteredTodos.map(todo => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        toggleTodo={toggleTodo}
                        deleteTodo={deleteTodo}
                    />
                ))}
            </List>
        </Container>
    );
};

export default TodoApp;

import React from 'react';
import { List } from '@mui/material';
import TodoItem from './TodoItem';

interface TodoListProps {
    todos: { id: number; text: string; completed: boolean }[];
    toggleTodo: (id: number) => void;
    deleteTodo: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, toggleTodo, deleteTodo }) => {
    return (
        <List>
            {todos.map(todo => (
                <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
            ))}
        </List>
    );
};

export default TodoList;

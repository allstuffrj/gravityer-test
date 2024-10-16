import React from 'react';
import { ListItem, ListItemText, IconButton, Box, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import DoneIcon from '@mui/icons-material/Done';
import UndoIcon from '@mui/icons-material/Undo';

interface TodoItemProps {
    todo: { id: number; text: string; completed: boolean };
    toggleTodo: (id: number) => void;
    deleteTodo: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, toggleTodo, deleteTodo }) => {
    return (
        <ListItem
            component="div"
            style={{ 
                textDecoration: todo.completed ? 'line-through' : 'none', 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                cursor: 'default'
            }}
        >
            <ListItemText primary={todo.text} />
            <Box>
                <Button 
                    variant="contained" 
                    color={todo.completed ? 'secondary' : 'primary'}
                    startIcon={todo.completed ? <UndoIcon /> : <DoneIcon />} 
                    onClick={() => toggleTodo(todo.id)}
                    style={{ marginRight: '10px' }}
                >
                    {todo.completed ? 'Undo' : 'Complete'}
                </Button>
                <IconButton 
                    edge="end" 
                    aria-label="delete" 
                    onClick={(e) => {
                        e.stopPropagation();
                        deleteTodo(todo.id);
                    }}
                >
                    <DeleteIcon />
                </IconButton>
            </Box>
        </ListItem>
    );
};

export default TodoItem;

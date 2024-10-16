import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

interface AddTodoProps {
    addTodo: (text: string) => void;
}

const AddTodo: React.FC<AddTodoProps> = ({ addTodo }) => {
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (inputValue.trim()) {
            addTodo(inputValue);
            setInputValue('');
        }
    };

    return (
        <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', mb: 2 }}>
            <TextField
                variant="outlined"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Add a new task"
                fullWidth
            />
            <Button type="submit" variant="contained" color="primary" sx={{ ml: 1 }}>
                Add
            </Button>
        </Box>
    );
};

export default AddTodo;

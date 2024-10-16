import React from 'react';
import { ButtonGroup, Button } from '@mui/material';

interface FilterProps {
    currentFilter: string;
    changeFilter: (filter: string) => void;
}

const Filter: React.FC<FilterProps> = ({ currentFilter, changeFilter }) => {
    return (
        <ButtonGroup variant="contained" aria-label="outlined primary button group" style={{ marginBottom: '20px' }}>
            <Button 
                onClick={() => changeFilter('All')} 
                color={currentFilter === 'All' ? 'primary' : 'inherit'}
            >
                All
            </Button>
            <Button 
                onClick={() => changeFilter('Completed')} 
                color={currentFilter === 'Completed' ? 'primary' : 'inherit'}
            >
                Completed
            </Button>
            <Button 
                onClick={() => changeFilter('Pending')} 
                color={currentFilter === 'Pending' ? 'primary' : 'inherit'}
            >
                Pending
            </Button>
        </ButtonGroup>
    );
};

export default Filter;

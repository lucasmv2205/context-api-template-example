import React from 'react';
import Paper from '@mui/material/Paper';
import { Button, Stack } from '@mui/material';

export function Scoreboard({score, handleIncreaseScore, handleDecreaseScore}) {
    
  return (
    <Paper elevation={5} sx={{color: '#fff', padding: 1, borderRadius: 5, display: 'flex', flexDirection: 'column', alignItems: 'center', my: 2, gap: 2, backgroundColor: '#3a3a3a'}}>
        <h2>Score Board</h2>
        <Stack direction="row" spacing={1}>
          <Button onClick={handleIncreaseScore} variant="contained">Score +</Button>
          <Button color='secondary' onClick={handleDecreaseScore} variant="contained">Score - </Button>
        </Stack>
        <h2>{score}</h2>
    </Paper>
  );
}
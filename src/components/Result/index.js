import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { useScore } from '../../hooks/useScore';

export function Result() {
  const { getScoreSum } = useScore();
  return (
    <Box  sx={{
        '& > :not(style)': {
          m: 1,
          width: 300,
          height: 300,
        },
      }}>
      <Paper elevation={2} sx={{color: '#fff', textAlign: 'center', padding: 2, backgroundColor: '#0A3359'}}>
        <h1>Sum of score</h1>
        <h2>{getScoreSum()}</h2>
      </Paper>
    </Box>
  );
}
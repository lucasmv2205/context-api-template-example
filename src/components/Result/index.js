import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { useScore } from "../../hooks/useScore";

export function Result() {
  const { getScoreSum } = useScore();
  return (
    <Box>
      <Paper>
        <h1>Sum of score</h1>
        <h2>{getScoreSum()}</h2>
      </Paper>
    </Box>
  );
}

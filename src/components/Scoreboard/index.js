import React from "react";
import Paper from "@mui/material/Paper";
import { Button, Stack } from "@mui/material";

export function Scoreboard({
  score,
  handleIncreaseScore,
  handleDecreaseScore,
}) {
  return (
    <Paper>
      <h2>Score Board</h2>
      <Stack>
        <Button onClick={handleIncreaseScore}>Score +</Button>
        <Button onClick={handleDecreaseScore}>Score - </Button>
      </Stack>
      <h2>{score}</h2>
    </Paper>
  );
}

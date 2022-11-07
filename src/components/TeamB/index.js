import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Scoreboard } from "../Scoreboard";
import { useScore } from "../../hooks/useScore";

export function TeamB() {
  const { teamB, handleIncreaseTeamBScore, handleDecreaseTeamBScore } =
    useScore();

  return (
    <Paper>
      <Box>
        <h2>Team B</h2>
      </Box>
      <Scoreboard
        score={teamB}
        handleIncreaseScore={handleIncreaseTeamBScore}
        handleDecreaseScore={handleDecreaseTeamBScore}
      />
    </Paper>
  );
}

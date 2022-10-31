import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Scoreboard } from "../Scoreboard";
import { useScore } from "../../hooks/useScore";

export function TeamA(){
    const {
        teamA,
        handleIncreaseTeamAScore,
        handleDecreaseTeamAScore,
      } = useScore();

    return(
        <Paper
        elevation={2}
        sx={{ color: "#fff", padding: 1, backgroundColor: "#7f0909" }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h2>Team A</h2>
        </Box>
        <Scoreboard
          score={teamA}
          handleIncreaseScore={handleIncreaseTeamAScore}
          handleDecreaseScore={handleDecreaseTeamAScore}
        />
      </Paper>
    )
}
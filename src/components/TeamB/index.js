import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Scoreboard } from "../Scoreboard";
import { useScore } from "../../hooks/useScore";

export function TeamB(){
    const {
        teamB,
        handleIncreaseTeamBScore,
        handleDecreaseTeamBScore,
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
          <h2>Team B</h2>
        </Box>
        <Scoreboard
          score={teamB}
          handleIncreaseScore={handleIncreaseTeamBScore}
          handleDecreaseScore={handleDecreaseTeamBScore}
        />
      </Paper>
    )
}
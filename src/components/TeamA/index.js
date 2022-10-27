import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Gryffindor from "../../assets/gryffindor.png";
import { Scoreboard } from "../Scoreboard";
import { useScore } from "../../hooks/useScore";

export function TeamA(){
    const {
        gryffindorScore,
        handleIncreaseGryffindorScore,
        handleDecreaseGryffindorScore,
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
          <h2>Gryffindor</h2>
          <img className="icon-house" src={Gryffindor} alt="Gryffindor icon" />
        </Box>
        <Scoreboard
          score={gryffindorScore}
          handleIncreaseScore={handleIncreaseGryffindorScore}
          handleDecreaseScore={handleDecreaseGryffindorScore}
        />
      </Paper>
    )
}
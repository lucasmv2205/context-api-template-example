import React from "react";
import Box from "@mui/material/Box";
import { TeamA } from "../TeamA";
import { TeamB } from "../TeamB";

export function Counter() {

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        "& > :not(style)": {
          m: 1,
          width: 300,
          height: 300,
        },
      }}
    >
      <TeamA />
      <TeamB />

    </Box>
  );
}

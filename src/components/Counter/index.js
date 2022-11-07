import React from "react";
import Box from "@mui/material/Box";
import { TeamA } from "../TeamA";
import { TeamB } from "../TeamB";

export function Counter() {
  return (
    <Box>
      <TeamA />
      <TeamB />
    </Box>
  );
}

import React from "react";
import { Counter } from "../components/Counter";
import { Box, Container } from "@mui/system";
import { Result } from "../components/Result";

export default function Home() {
  return (
    <Container>
      <Box>
        <Counter />
      </Box>
      <Result />
    </Container>
  );
}

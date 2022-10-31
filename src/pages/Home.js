import React from 'react';
import { Counter } from '../components/Counter';
import { Box, Container } from '@mui/system';
import { Result } from '../components/Result';

export default function Home() {

    return (
        <Container sx={{display: 'flex', flexDirection: "column", alignItems: 'center', justifyContent: 'center'}}>
            <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <Counter />
            </Box>
            <Result />
        </Container>
    )
}
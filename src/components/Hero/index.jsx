import React from 'react'
import { Box, Flex } from '../shared/containers'
import { H1 } from '../shared/typography'
import Sun from './Sun'
import Grid from '../shared/Grid'

const Hero = () => {
    const heroText = [
        'hello, i build the internet_',
        'hello, i build model robots_',
        'hello, i write code_',
        'hello, i have an angry fish_'
    ]

    const text = heroText[Math.floor(Math.random() * heroText.length)];

    return (
        <Box height='100vh'>
            <Box position='fixed' left='0' >
                <Flex alignItems='center' width='100vw' justifyContent='center'>
                    <Sun width='25vw' />
                </Flex>
            </Box>
            <Box position='absolute' zIndex={1} bottom='0' left='0' >
                <Flex width='100vw' alignItems='flex-end' >
                    <Grid />
                </Flex>
            </Box>
            <Flex justifyContent='center' height='40%' >
                <H1 textAlign='center'>{text}</H1>
            </Flex>

        </Box >
    )
}

export default Hero
import React from 'react'
import { Link } from 'react-router-dom'
import { P, A } from './typography'
import { Flex, Box } from './containers'

const Nav = () => <Box>
    <Flex justifyContent='space-between' height='140px' alignItems='center'>
        <Box>
            <A to='/'>Jackie Robson</A>
        </Box>
        <Flex justifyContent='space-between'>
            <Box>
                <A ml={5} to='/about'>About</A>
                <A ml={5} to='/projects'>Projects</A>
                <A ml={5} to='/resume'>Resume</A>
            </Box>
        </Flex>
    </Flex>
</Box>

export default Nav
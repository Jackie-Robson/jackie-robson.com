import React from 'react'
import { H1, H2, H3 } from '../components/shared/typography'
import { Container, Flex, Box } from '../components/shared/containers'
import Hero from '../components/Hero'

const Home = () => <Container>
    <Flex flexDirection='column' gridColumn={1} >
        <Hero />
        <Box width={6 / 12} >
            <H2 margin={0} >testing this font</H2>
            <H3>and this font too</H3>
        </Box>
        <Box height='100vh'>
            box
        </Box>
    </Flex>

</Container>

export default Home
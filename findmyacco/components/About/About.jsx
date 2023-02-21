import React from 'react'
import { AboutTop } from './AboutTop'
import AboutusDetail from './AboutusDetail'
import { Box ,Text,Stack,Flex,Icon,Image} from '@chakra-ui/react';
function About() {
  return (
    <>
    <Box><AboutTop/></Box>
    <Box><AboutusDetail  />
    </Box>
    </>
  )
}

export default About
import React from 'react'
import { Box ,Text,Stack,Flex,Icon,Image} from '@chakra-ui/react';
import { Grid, GridItem } from '@chakra-ui/react';
import style from "./about.module.css"
export default function AboutusDetail() {
  return (
    <Box>
  <Grid templateColumns={{lg:'repeat(2, 1fr)',sm:"repeat(1,1fr)"}} h="95vh" >
    <GridItem w='100%'  position={"relative"}  >
   <Box w="50%" h="50%"
    position="absolute"
    top="0"
    left="0"
    opacity="0.7"
    background="gray"

    ></Box>
   <Box 
   z-index= "9"
   margin= "30px"
   bg="red"
   background= "#009938"></Box>
    </GridItem>
    <GridItem w='100%' bg='tomato' ></GridItem>
  </Grid>
  </Box>
  )
}

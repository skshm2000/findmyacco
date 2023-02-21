import React from 'react';
import { Box ,Text,Stack,Flex,Icon,Image} from '@chakra-ui/react';
import AboutFirstpic from "./Images/AboutFirstpic.jpg";

import {ImHome3} from "react-icons/im";
import { Link } from 'react-router-dom';
import {AiOutlineDoubleRight} from "react-icons/ai"

export const AboutTop = () => {
  return (
    <Box  w='100vw' h="45vh" 
    position={"relative"}
    bg="gray"
    overflow={"hidden"}
    textAlign={"center"}
    display="flex"
    justifyContent={"center"}
    alignItems="center"
    backgroundImage={AboutFirstpic} backgroundSize={"cover"} backgroundRepeat={"no-repeat"} >
    <Box  bg="rgba(0,0,0,0.5)" zIndex={"0"} position={"absolute"} w="100%" h="100%"></Box>
   
    <Box>
      <Text fontSize={"25px"}
      fontWeight="700"
      color="" 
      zIndex="0" >ABOUT US</Text>
     <Flex alignItems={"center"} gap={2} >
      <Icon as={ImHome3} h="100%" border="0px solid red"></Icon>
     <Link><Text >HOME</Text></Link></Flex>

    
    </Box>
    
    </Box>
  )
}


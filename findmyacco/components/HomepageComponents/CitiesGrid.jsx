import { Text, Box, Button, Heading, SimpleGrid,Image } from '@chakra-ui/react';
import React from 'react';
import "../../src/index.css"
import {SlEnergy} from "react-icons/sl"
const CitiesGrid = () => {
  return (
    <Box mt="50px" p="20px" px="10%" display={"flex"} flexDir="column" gap="20px">
        <Box display={"flex"} alignItems="center" flexDir={{base:"column",md:"row"}} gap={{base:"20px",md:"0px"}} fontFamily="" justifyContent="space-between"><Text fontSize={"2xl"} fontWeight="800">Find student housing in popular cities</Text>  <Button bg='rgb(20,61,89)' textColor={"white"} leftIcon={<SlEnergy/>}  my="20px" ml="20px" 
      _hover={{
        background: "rgb(244,180,26)",
        color:"black",

      }}>Get Expert Help!</Button></Box>
        <SimpleGrid columns={{base:1,md:2,lg:4}} spacing="20px">

         <Box  minH={"400px"} position="relative" backgroundImage="url(https://findmyacco.com/uploads/1664002827_city-2.jpg)" backgroundSize={"cover"} backgroundRepeat={"no-repeat"}>
          <Button position="absolute" bottom="20px" left="20px" backgroundColor="blackAlpha.600" color="white" 
              _hover={{
                background:"black",
                
              }}>Sheffield</Button>
          </Box>
          <Box  minH={"400px"} position="relative" backgroundImage="url(https://findmyacco.com/uploads/1664003220_city-4.jpg)" backgroundSize={"cover"} backgroundRepeat={"no-repeat"}>
          <Button position="absolute" bottom="20px" left="20px" backgroundColor="blackAlpha.600" color="white" 
              _hover={{
                background:"black",
                
              }}>venice</Button>
          </Box>
          <Box   minH={"400px"} position="relative" backgroundImage="url(https://findmyacco.com/uploads/1664002805_city-1.jpg)" backgroundSize={"cover"} backgroundRepeat={"no-repeat"}>
          <Button position="absolute" bottom="20px" left="20px" backgroundColor="blackAlpha.600" color="white" 
              _hover={{
                background:"black",
                
              }}>London</Button>
          </Box>

          <Box  minH={"400px"} position="relative" backgroundImage="url(https://findmyacco.com/uploads/1664003201_city-3.jpg)" _hover={{ filter: "brightness(50%)",transitionDuration:"400ms"}} backgroundSize={"cover"} backgroundRepeat={"no-repeat"} >

            <Button position="absolute" bottom="20px" left="20px" backgroundColor="blackAlpha.600" color="white" 
              _hover={{
                background:"black",
              }} filter="brightness(2)">
                Bologana
            </Button>
          
          </Box>
        </SimpleGrid>
    </Box>
  );
}

export default CitiesGrid;

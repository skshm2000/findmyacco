import { Text, Box, Button, Heading, SimpleGrid,Image } from '@chakra-ui/react';
import React from 'react';
import "../../src/index.css"
const CitiesGrid = () => {
  return (
    <Box p="20px"display={"flex"} flexDir="column" gap="20px">
        <Box display={"flex"} flexDir={{base:"column",md:"row"}} gap={{base:"20px",md:"0px"}} fontFamily="" justifyContent="space-between"><Text fontSize={"2xl"} fontWeight="800">Find student housing in popular cities</Text> <Button maxW={"150px"} color="white" bgColor="rgb(20,61,89)" _hover={{color:"black",bgColor:"rgb(244,180,26)"}} >Get Expert Help</Button></Box>
        <SimpleGrid columns={{base:1,sm:2,lg:4}} gap="20px">
          <Box  H={"400px"}>
          <Image objectFit={"cover"} src="https://findmyacco.com/uploads/1664002827_city-2.jpg"></Image>
          </Box>
          <Box  maxH={"400px"}>
          <Image objectFit={"cover"}  src="https://findmyacco.com/uploads/1664003220_city-4.jpg"></Image>
          </Box>
          <Box  maxH={"400px"}>
          <Image objectFit={"cover"}  src="https://findmyacco.com/uploads/1664003201_city-3.jpg"></Image>
          </Box>
          <Box  maxH={"400px"}>
          <Image objectFit={"cover"}  src="https://findmyacco.com/uploads/1664002805_city-1.jpg"></Image>
          </Box>
        </SimpleGrid>
    </Box>
  );
}

export default CitiesGrid;

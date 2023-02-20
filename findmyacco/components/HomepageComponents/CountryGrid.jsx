import React from 'react';
import { Grid, GridItem,Box,Flex ,Text,Button} from '@chakra-ui/react'
import {SlEnergy} from "react-icons/sl";
import unitedKingdom from "./IMAGES/unitedKingdom.jpg";
import Canada from "./IMAGES/Canada.jpg";
import France from "./IMAGES/France.jpg";
import Germany from "./IMAGES/Germany.jpg";
import Italy from "./IMAGES/Italy.jpg";
import Australia from "./IMAGES/Australia.jpg";

const CountryGrid = () => {
  return (
   <Box
   mt={"20px"}
   w='100vw'
   >
     <Grid 
     m='auto'
     w="80vw"
     h='600px'
  templateRows={{sm:"repeat(7,1fr)",md:"repeat(4,1fr)",lg:'repeat(2, 1fr)'}}
  templateColumns={{sm:"repeat(1,1fr)",md:"repeat(2,1fr)",lg:'repeat(4, 1fr)'}}
  gap={4}>
  <GridItem rowSpan={1} colSpan={{sm:1,md:2}} >
    <Text fontSize="35px"
    lineHeight={"50px"}
    fontFamily={"poppins"}
    fontWeight="800"
    w={{lg:"50%"}}
   color='rgb(33,37,41)'
    textAlign={{sm:"center",lg:"left"}}
    ml="20px"
    >Unearth unique locations in well-known areas</Text>
    <Button bg='rgb(20,61,89)' textColor={"white"} leftIcon={<SlEnergy/>}  my="20px" ml="20px" 
      _hover={{
        background: "rgb(244,180,26)",
        color:"black"
      }}>Get Expert Help!</Button>
  </GridItem>
  <GridItem 
  borderRadius="12px"
  h={"300px"}
  colSpan={1} bg='papayawhip' position="relative" backgroundImage={unitedKingdom} backgroundSize={"cover"} backgroundRepeat={"no-repeat"}
  >
  <Button position="absolute" bottom="20px" left="20px" backgroundColor="blackAlpha.600" color="white"  _hover={{
        background:"black",
        
      }}>United Kingdom</Button>
  </GridItem>
  <GridItem 
  borderRadius="12px"
  h={"300px"}
  colSpan={1} bg='papayawhip' position="relative" backgroundImage={Australia} backgroundSize={"cover"} backgroundRepeat={"no-repeat"}
  >
  <Button position="absolute" bottom="20px" left="20px" backgroundColor="blackAlpha.600" color="white"
  _hover={{
    background:"black",
    
  }} >Australia</Button>
  </GridItem>
  <GridItem 
  borderRadius="12px"
  h={"300px"}
  colSpan={1} bg='papayawhip' position="relative" backgroundImage={France} backgroundSize={"cover"} backgroundRepeat={"no-repeat"}>
  <Button position="absolute" bottom="20px" left="20px" backgroundColor="blackAlpha.600" color="white" 
  _hover={{
    background:"black",
    
  }}>France</Button>
  </GridItem>
  <GridItem 
  borderRadius="12px"
  h={"300px"}
  colSpan={1} bg='papayawhip' position="relative" backgroundImage={Canada} backgroundSize={"cover"} backgroundRepeat={"no-repeat"}>
  <Button position="absolute" bottom="20px" left="20px" backgroundColor="blackAlpha.600" color="white" 
  _hover={{
    background:"black",
    
  }}>Canada</Button>
  </GridItem>
  <GridItem 
  borderRadius="12px"
  h={"300px"}
  colSpan={1} bg='papayawhip' position="relative" backgroundImage={Germany} backgroundSize={"cover"} backgroundRepeat={"no-repeat"}>
  <Button position="absolute" bottom="20px" left="20px" backgroundColor="blackAlpha.600" color="white" 
  _hover={{
    background:"black",
    
  }}>Germany</Button>
  </GridItem>
  <GridItem 
  borderRadius="12px"
  h={"300px"}
  colSpan={1} bg='papayawhip' position="relative" backgroundImage={Italy} backgroundSize={"cover"} backgroundRepeat={"no-repeat"}>
  <Button position="absolute" bottom="20px" left="20px" backgroundColor="blackAlpha.600" color="white" _hover={{
        background:"black",
        
      }}>Italy</Button>
  </GridItem>
</Grid>
</Box>
  );
}

export default CountryGrid;

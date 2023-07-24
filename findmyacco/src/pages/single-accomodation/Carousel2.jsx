import React from 'react';
import {  Box ,Button,Icon} from "@chakra-ui/react"
import {BsArrowRightCircle,BsArrowLeftCircle} from "react-icons/bs";
import styled from"./Carousel2.module.css"
import { Card, CardBody, CardFooter,Image,Stack,Heading,Text,Divider,Tag,HStack } from '@chakra-ui/react'
import {StarIcon } from '@chakra-ui/icons'
const Carousel2 = ({data}) => {

    const btnpressprev=()=>{
      let boxel=document.querySelector(`.${styled.product_container}`);
      boxel.scrollLeft-=320
      console.log("hek")
      console.log(boxel.scrollLeft)
    }
    const btnpressnext=()=>{
      let boxel=document.querySelector(`.${styled.product_container}`);
      boxel.scrollLeft+=320
      console.log(boxel.scrollLeft)
  
    }
      return(
          <Box className={styled.carousel}>
             {/* <Text>TRENDING PAGES</Text> */}
              <Box className={styled.product_container} id="productsss" >
                  {data.map(el=><Cards  image={el.photo} key={Date.now()+el.thumb} ></Cards>)}
              </Box>
            <Box display={"flex"} justifyContent="center">
              <Button  onClick={btnpressprev} zIndex="2"><Icon as={BsArrowLeftCircle}/></Button>
              <Button onClick={btnpressnext} zIndex="2"><Icon as={BsArrowRightCircle}/></Button>   
            </Box>
          </Box>
      )
  }
  
  const Cards=({image,
    })=>{


  return <Card minWidth="300px"
  minHeight="230px">

  <Image
   m="auto"
   src={image}
   width="100%"
   height="230px"
   alt="image"
 />
 </Card>
}

export default Carousel2;

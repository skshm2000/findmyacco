import React from 'react';
import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink,Button,Grid,GridItem, Heading,Text } from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { useParams, useSearchParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState,useEffect } from 'react';
import CarouselS from '../../components/SingleAcco/CarouselS';
import Carousel2 from '../../components/SingleAcco/Carousel2';
const SignleAcco = () => {
  let [ searchParams ] = useSearchParams()
  const store=useSelector(store=>store.PropertiesReducer)
  const {allData}=store
  const [data,setData]= useState({});
  useEffect(() => {
   let prop=allData.find((el)=>el.property_id==searchParams.get("roomid"))
   setData(prop)
   console.log(allData)
  }, []);
  return (
    <Box  width={"80%"} m="auto">
        <Box>
        <Breadcrumb spacing='8px' separator={<ChevronRightIcon color='gray.500' />}>
          <BreadcrumbItem>
            <BreadcrumbLink href='/'>Home</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href='#'>{data?.address?.country}</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href='#'>{data?.address?.city}</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href='#'>{data?.address?.property_name}</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
        </Box>
        <Grid display={"grid"}>
          {/* {data?.media?<CarouselS cards={data?.media?.photos} h="250px"/>:<></>} */}
         {data?.media && <CarouselS  cards={data?.media?.photos} h="500px"/>}
         {data?.media && <Carousel2  data={data?.media?.photos} />}
        </Grid>
        <Box display={"flex"} py="50px">
            <Box flex={0.7}>
              <Box>
                <Box display={"flex"} justifyContent="space-between">
                  <Heading>{data?.address?.property_name}</Heading>
                  <Button bgColor={"#ec6449"} _hover={{color:"white"}}>Enquire</Button>
                </Box>
                <Text>{data?.address?.property_name}, {data?.address?.road_name}, {data?.address?.postcode}, {data?.address?.city}</Text>
              </Box>
            </Box>
            <Box flex={0.3}></Box>
        </Box>
    </Box>
  );
}

export default SignleAcco;

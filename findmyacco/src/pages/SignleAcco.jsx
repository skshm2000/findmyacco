import React from 'react';
import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink,Button,Grid,GridItem, Heading,Image,Link,Text,Divider, TabList, Tabs, Tab, TabPanels, TabPanel } from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { useParams, useSearchParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState,useEffect } from 'react';
import CarouselS from '../../components/SingleAcco/CarouselS';
import Carousel2 from '../../components/SingleAcco/Carousel2';
import Pound from "../assets/icons8-british-pound.svg"
import loc from "../assets/loc.png"
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
    <Box  width={"90%"} m="auto">
        <Box py="10px">
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
        <Box display={"flex"} py="50px" gap="20px"> 
            <Box flex={0.7} gap="20px" display={"flex"} flexDir="column">
              <Box>
                <Box display={"flex"} justifyContent="space-between">
                  <Heading>{data?.address?.property_name}</Heading>
                  <Button bgColor={"#ec6449"} _hover={{color:"white"}} onClick={()=>window.open(data?.contracts?.[0].book_now_url)}>Book</Button>
                </Box>
                <Box display={"flex"} justifyContent="space-between">
                <Text alignContent={"center"}><Image src={loc} display="inline"></Image>{data?.address?.property_name}, {data?.address?.road_name}, {data?.address?.postcode},  {data?.address?.city}</Text>
                <Text fontWeight={"800"} fontSize="18px">From £<Text display={"inline"} color="#f4b41a">{data?.contracts?.[0].prices[0].price_per_person_per_week}</Text> / week</Text>
                </Box>
              </Box>
              <Box>
                <Text 
                fontSize={"25px"}
                fontWeight="800"
                >Special Offers</Text>
                <Box display={"flex"} gap="10px">
                  <Box p="20px" display={"flex"} border="1px solid #D2CBCB" borderRadius={"10px"} gap="10px">
                    <Image src={Pound}></Image>
                    <Box p="10px">
                      <Text fontWeight={"600"} fontSize="18px">Cashback Offer!</Text>
                      <Text>Book now for minimum 34 weeks tenancy and avail upto £500 cashback! (Offer is valid for selected rooms only)</Text>
                    </Box>
                  </Box>
                  <Box p="20px" display={"flex"} border="1px solid #D2CBCB" borderRadius={"10px"} gap="10px">
                    <Image src={Pound}></Image>
                    <Box p="10px">
                      <Text fontWeight={"600"} fontSize="18px">Cashback Offer!</Text>
                      <Text>Book now for minimum 34 weeks tenancy and avail upto £500 cashback! (Offer is valid for selected rooms only)</Text>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box flex={0.3}>
              <Box bgColor="#f3faf6" p="20px">
                  <Box display={"flex"} gap="20px" pb="20px"fontWeight={"700"}><Image src="https://uniacco.imgix.net/site-static/v2/icons/shield_check.svg?auto=format&fit=max&w=32"></Image><Text fontSize={"23px"}>FindMyAcco Insurance</Text></Box>
                  <Box display={"flex"} gap="20px" pb="10px" fontWeight={"700"}><Image src="https://uniacco.imgix.net/site-static/v2/icons/down_arrow_circle.svg?auto=format&fit=max&w=32"></Image>Free Cancelation*</Box>
                  <Text mb="7px">If For Any Reason, Your Visa Application Has Been Denied, Or If You Fail To Get A Place At Your University, Your Booking Can Be Easily Cancelled For Free.</Text>
                  <Link textDecoration={"underline"}>Know More</Link>
                  <Divider  fontSize="xl" borderColor={'black'} mt="10px"/>
                  <Box display={"flex"} gap="20px" py="10px" mt="10px" fontWeight={"700"}><Image src="https://uniacco.imgix.net/site-static/v2/icons/down_arrow_circle.svg?auto=format&fit=max&w=32"></Image>Free Cancelation*</Box>
                  <Text mb="7px">If For Any Reason, Your Visa Application Has Been Denied, Or If You Fail To Get A Place At Your University, Your Booking Can Be Easily Cancelled For Free.</Text>
                  <Link textDecoration={"underline"}>Know More</Link>
              </Box>
            </Box>
        </Box>
        <Divider borderColor={"black"} py="10px" mt="10px" position={"relative"} width="130%" left={-100}/>
        <Box>

        </Box>
         <Box display={"flex"} py="50px" gap="20px"> 
            <Box flex={0.7} gap="20px" display={"flex"} flexDir="column">
            <Tabs size="lg" colorScheme="blackAlpha" variantColor="red">
            <TabList  >
              <Tab>About</Tab>
              <Tab>Location</Tab>
              <Tab>Room Types</Tab>
              <Tab>Facilities</Tab>  
              <Tab>Reviews</Tab>
              <Tab>Faqs</Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <p>two!</p>
              </TabPanel>
              <TabPanel>
                <p>one!</p>
              </TabPanel>
              <TabPanel>
                <p>three!</p>
              </TabPanel>
              <TabPanel>
                <p>two!</p>
              </TabPanel>
              <TabPanel>
                <p>one!</p>
              </TabPanel>
              <TabPanel>
                <p>three!</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
            </Box>
            <Box flex={0.3}>
             
            </Box>
        </Box>
    </Box>
  );
}

export default SignleAcco;

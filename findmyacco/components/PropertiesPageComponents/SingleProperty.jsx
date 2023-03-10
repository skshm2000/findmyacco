import React from 'react'
import {Carousel} from './ImageCarousel.jsx'
import { Heading, Stack, Flex, Button } from '@chakra-ui/react'
import { Address } from './Address'
import { Facilities } from './Facilities'
import PriceRange from './PriceRange'
import { useNavigate } from 'react-router-dom'
export const SingleProperty = ({ data }) => {
  const nav=useNavigate()
  return (
    <Stack
    p='4%'
    spacing={'10px'}
    boxShadow={'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;'}
    borderRadius={'20px'}
    >
        <Carousel cards={ data.media.photos } />
        <Heading fontSize={'30px'} textAlign={'left'}>{data.address.property_name}</Heading>
        <Address address={data.address} />
        <Facilities data={data.facilities} />
        <Stack
        bgColor={'grey'}
        h='2px'
        ></Stack>
        <Flex>
            <PriceRange data={data.contracts} />
            <Button onClick={()=>nav(`/properties/room?roomid=${data.property_id}`)}>Know More</Button>
        </Flex>
    </Stack>
  )
}

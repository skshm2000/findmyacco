import React from 'react'
import Carousel from './ImageCarousel'
import { Heading, Stack, Divider, Flex, Button } from '@chakra-ui/react'
import { Address } from './Address'
import { Facilities } from './Facilities'
import PriceRange from './PriceRange'

export const SingleProperty = ({ data }) => {
    console.log(data.room_type)
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
            <Button>Know More</Button>
        </Flex>
    </Stack>
  )
}

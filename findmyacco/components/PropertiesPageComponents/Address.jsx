import {} from 'react'
import { Flex, Text } from '@chakra-ui/react'
import { CiLocationOn } from 'react-icons/ci'

export const Address = ({ address }) => {
    const { road_name, property_number, city, country } = address
  return (
    <>
    <Flex
    w='80%'
    justifyContent={'space-around'}
    alignItems={'center'}
    >
        <CiLocationOn size='30px'/>
        <Text>{`${property_number}, ${road_name}, ${city}, ${country}`}</Text>
    </Flex>
    </>
  )
}

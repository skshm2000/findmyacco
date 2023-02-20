import heroBanner from './Assests/heroBanner.jpg'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  Stack, 
  Heading, 
  Text,
  Image,
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { useEffect } from 'react'

export const Hero = () => {

  useEffect(()=>{
    scrollTo(0,0)
  }, [])
  return (
    <>
    <Stack
    position={'relative'}
    w='100%'
    h='200px'
    bgImage={heroBanner}
    backgroundSize={'cover'}
    backgroundPosition='center'
    backgroundRepeat='no-repeat'
    > 
      <Stack
      position={'absolute'}
      alignItems={'center'}
      top={{
        base:'20%',
        sm:'20%',
        md:'28%',
        lg:'30%',
        xl:'40%',
        '2xl':'40%'
    }}
      left={{
        base:'20%',
        sm:'30%',
        md:'35%',
        lg:'40%',
        xl:'40%',
        '2xl':'40%'
    }}
      >
        <Heading>HOST A HOME</Heading>
        <Breadcrumb spacing='8px' separator={<ChevronRightIcon color='gray.500' />}>
          <BreadcrumbItem>
            <BreadcrumbLink><Link to='/'>Home</Link></BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink>Host a Home</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </Stack>
    </Stack>
    </>
  )
}

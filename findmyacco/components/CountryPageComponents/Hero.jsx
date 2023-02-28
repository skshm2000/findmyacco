import heroBanner from '../HostAHomeComponents/Assests/heroBanner.jpg'
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

export const Hero = ({ name }) => {

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
        xl:'30%',
        '2xl':'30%'
    }}
      left={{
        base:'2%',
        sm:'5%',
        md:'10%',
        lg:'15%',
        xl:'18%',
        '2xl':'27%'
    }}
      >
        <Heading textAlign={'center'}>STUDENT ACCOMMODATION IN UNITED KINGDOM</Heading>
        <Breadcrumb spacing='8px' separator={<ChevronRightIcon color='gray.500' />}>
          <BreadcrumbItem>
            <BreadcrumbLink><Link to='/'>Home</Link></BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink>Countries</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink>{name=='uk' ? 'United Kingdom':name}</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </Stack>
    </Stack>
    </>
  )
}

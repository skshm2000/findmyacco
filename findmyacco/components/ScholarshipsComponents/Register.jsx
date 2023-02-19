import { Image, Stack, Flex, Text, Heading, Button } from '@chakra-ui/react';
import heroBanner from './Assets/heroBanner.jpg'

export const Register = () => {
  const FontSizeHeading = {
    base: '18px',
    sm: '25px',
    md: '30px',
    lg: '32px',
    xl: '40px',
    '2xl': '40px',
  }
  const FontSizeText = {
    base: '8px',
    sm: '14px',
    md: '17px',
    lg: '17px',
    xl: '19px',
    '2xl': '19px',
  }
  return (
    <>
    <Stack
    mt='80px'
    position={'relative'}
    >
        <Image src={heroBanner} />
        <Stack
        position={'absolute'}
        borderRadius={'50%'}
        w='45%'
        bgColor={'rgb(255, 253, 175)'}
        h='80%'
        alignItems={'center'}
        justifyContent={'center'}
        right={'5'}
        top='10%'
        spacing={'10px'}
        textAlign={'center'}
        opacity={'0.7'}
        >
            <Heading fontSize={FontSizeHeading} w='95%'>Register for Findmyacco Scholarship</Heading>
            <Text m='auto' w='90%' fontSize={FontSizeText}>Seize the moment before it’s gone. Avail of our scholarship to aid your studies abroad.</Text>
            <Button
            fontSize={FontSizeText}
            bg='#143d59'
            color={'white'}
            w='35%'
            >Register Now</Button>
        </Stack>
    </Stack>
    </>
  )
}

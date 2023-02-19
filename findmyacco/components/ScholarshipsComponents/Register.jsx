import { Image, Stack, Flex, Text, Heading, Button } from '@chakra-ui/react';
import heroBanner from './Assets/heroBanner.jpg'

export const Register = () => {
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
        spacing={'10%'}
        textAlign={'center'}
        opacity={'0.7'}
        >
            <Heading fontSize={'40px'} w='95%'>Register for Findmyacco Scholarship</Heading>
            <Text m='auto' w='90%' fontSize={'25px'}>Seize the moment before it’s gone. Avail of our scholarship to aid your studies abroad.</Text>
            <Button
            bg='#143d59'
            color={'white'}
            w='35%'
            >Register Now</Button>
        </Stack>
    </Stack>
    </>
  )
}

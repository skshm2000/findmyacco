import { Image, Stack, Flex, Text, Heading } from '@chakra-ui/react';
import course from './Assets/course.png'
import nationalities from './Assets/nationalities.png'
import universities from './Assets/universities.png'

export const FutureInYourHands = () => {
  return (
    <>
    <Stack
    w='80%'
    m='auto'
    mt='80px'
    >
        <Heading>Your future is in your hands</Heading>
        <Flex
        justifyContent={'space-around'}
        >
            <Stack
            w='30%'
            backgroundImage={nationalities}
            borderRadius={'20px'}
            h='350px'
            backgroundSize={'cover'}
            backgroundPosition='center'
            backgroundRepeat='no-repeat'
            position={'relative'}
            >
                <Stack
                mb='100px'
                color={'white'}
                w='max-content'
                px='4%'
                py='2%'
                bgColor={'#143D59'}
                borderRadius={'20px'}
                textAlign={'center'}
                alignSelf={'center'}
                position={'absolute'}
                bottom={'-130px'}
                >
                    <Text>Students of varied</Text>
                    <Heading>Nationalities</Heading>
                </Stack>
            </Stack>
            <Stack w='30%'
            backgroundImage={universities}
            borderRadius={'20px'}
            h='350px'
            backgroundSize={'cover'}
            backgroundPosition='center'
            backgroundRepeat='no-repeat'
            position={'relative'}
            >
                <Stack
                mb='100px'
                color={'white'}
                w='max-content'
                px='4%'
                py='2%'
                bgColor={'#143D59'}
                borderRadius={'20px'}
                textAlign={'center'}
                bottom={'-130px'}
                alignSelf={'center'}
                position={'absolute'}
                >
                    <Text>Affiliates of any</Text>
                    <Heading>University</Heading>
                </Stack>
            </Stack>
            <Stack w='30%'
            backgroundImage={course}
            borderRadius={'20px'}
            h='350px'
            backgroundSize={'cover'}
            backgroundPosition='center'
            backgroundRepeat='no-repeat'
            position={'relative'}
            >
                <Stack
                mb='100px'
                color={'white'}
                w='max-content'
                px='4%'
                py='2%'
                bgColor={'#143D59'}
                borderRadius={'20px'}
                textAlign={'center'}
                alignSelf={'center'}
                position={'absolute'}
                bottom={'-130px'}
                
                >
                    <Text>Registering for any</Text>
                    <Heading>Course</Heading>
                </Stack>               
            </Stack>
        </Flex>
    </Stack>
    </>
  )
}

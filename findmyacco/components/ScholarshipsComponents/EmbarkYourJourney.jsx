import { Image, Stack, Flex, Text, Heading, Button, AspectRatio } from '@chakra-ui/react';
import meeting from './Assets/meeting.png'
import skyline from './Assets/skyline.mp4'

export const EmbarkYourJourney = () => {
  return (
    <>
    <Stack
    bgColor={'#f4f6f8'}
    py='8%'
    mt='100px'
    >
        <Flex
        w='80%'
        m='auto'
        justifyContent={'space-around'}
        >
            <Image 
            w='45%'
            src={meeting}></Image>
            <Stack
            w='50%'
            >
                <Heading
                color={'#143D59'}
                fontSize={'45px'}
                >Embark on your <span style={{color:'#ffc83c'}}>adventure</span></Heading>
                <Text
                fontSize={'18px'}
                >Creative minds are what we’re looking for! Findmyacco will be assisting selective students with scholarships to provide them with a platform where they can implement their creativity on a broader level. Got that creativity and determination we seek? Don’t miss out on this opportunity and apply right away.</Text>
            </Stack>
        </Flex>
    </Stack>
        <iframe 
        src={skyline}
        style={{width:'100%'}}
        />
    </>
  )
}

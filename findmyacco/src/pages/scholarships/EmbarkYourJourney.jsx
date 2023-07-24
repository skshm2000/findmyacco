import { Image, Stack, Flex, Text, Heading, Button, AspectRatio } from '@chakra-ui/react';
import meeting from './Assets/meeting.png'
import skyline from './Assets/skyline.mp4'

export const EmbarkYourJourney = () => {
  const FontSizeHeading = {
    base: '35px',
    sm: '37px',
    md: '45px',
    lg: '40px',
    xl: '45px',
    '2xl': '45px',
  }
  const FontSizeText = {
    base: '14px',
    sm: '14px',
    md: '17px',
    lg: '17px',
    xl: '19px',
    '2xl': '19px',
  }
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
        flexDirection={{
          base: 'column-reverse',
          sm: 'column-reverse',
          md: 'column-reverse',
          lg: 'row',
          xl: 'row',
          '2xl': 'row',
        }}
        gap={{
          base: '30px',
          sm: '30px',
          md: '30px',
        }}
        >
            <Image
            m='auto' 
            w={{
              base: '80%',
              sm: '80%',
              md: '80%',
              lg: '45%',
              xl: '45%',
              '2xl': '45%',
            }}
            src={meeting}></Image>
            <Stack
            w={{
              base: '80%',
              sm: '80%',
              md: '80%',
              lg: '50%',
              xl: '50%',
              '2xl': '50%',
            }}
            m='auto'
            >
                <Heading
                color={'#143D59'}
                fontSize={FontSizeHeading}
                >Embark on your <span style={{color:'#ffc83c'}}>adventure</span></Heading>
                <Text
                fontSize={FontSizeText}
                >Creative minds are what we’re looking for! Findmyacco will be assisting selective students with scholarships to provide them with a platform where they can implement their creativity on a broader level. Got that creativity and determination we seek? Don’t miss out on this opportunity and apply right away.</Text>
            </Stack>
        </Flex>
    </Stack>
    <Stack
    position={'relative'}
    pb='35.25%'
    overflow={'hidden'}
    maxW={'100%'}
    h='auto'
    >
        <iframe 
        src={skyline}
        frameborder="0"
        style={{width:'100%', position:'absolute', height:'100%', top:'0', left:'0'}}
        />
    </Stack>
    </>
  )
}

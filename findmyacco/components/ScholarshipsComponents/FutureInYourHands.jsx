import { Image, Stack, Flex, Text, Heading } from '@chakra-ui/react';
import course from './Assets/course.png'
import nationalities from './Assets/nationalities.png'
import universities from './Assets/universities.png'

export const FutureInYourHands = () => {
    const FontSizeHeading = {
        base: '35px',
        sm: '37px',
        md: '45px',
        lg: '35px',
        xl: '40px',
        '2xl': '40px',
      }
  return (
    <>
    <Stack
    w='80%'
    m='auto'
    mt='80px'
    spacing={'30px'}
    >
        <Heading color='#143d59' fontSize={FontSizeHeading}>Your future is in your hands</Heading>
        <Flex
        justifyContent={'space-around'}
        flexDirection={{
            base: 'column',
            sm: 'column',
            md: 'row',
            lg: 'row',
            xl: 'row',
            '2xl': 'row',
          }}
        gap={{
        base: '50px',
        sm: '50px'
        }}
        >
            <Stack
            m='auto'
            w={{
                base: '80%',
                sm: '80%',
                md: '80%',
                lg: '30%',
                xl: '30%',
                '2xl': '30%',
              }}
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
            <Stack 
            w={{
                base: '80%',
                sm: '80%',
                md: '80%',
                lg: '30%',
                xl: '30%',
                '2xl': '30%',
              }}
            m='auto'
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
            <Stack 
            w={{
                base: '80%',
                sm: '80%',
                md: '80%',
                lg: '30%',
                xl: '30%',
                '2xl': '30%',
              }}
            m='auto'
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

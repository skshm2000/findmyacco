import { Image, Stack, Flex, Text, Heading, Button } from '@chakra-ui/react';
import banner from './Assets/main_banner.png'

export const Hero = () => {
  return (
    <>
        <Stack
        >
            <Image
            src={banner} 
            position={'relative'}
            h='90vh'
            zIndex={'-1'}
            />
            <Stack
            position={'absolute'}
            w='40%'
            top='4%'
            left='8%'
            color={'white'}
            spacing={'20px'}
            zIndex={'100'}
            >
                <Heading fontSize={'50px'}>Providing <span className='blueText'>scholarships</span></Heading>
                <Heading fontSize={'50px'}>worth <span className='blueText'>£15,000</span></Heading>
                <Button
                w='40%'
                bg='#143d59'
                >Apply Now</Button>
            </Stack>
        </Stack>
    </>
  )
}

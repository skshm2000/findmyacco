import { BsPeopleFill } from "react-icons/bs";
import { FcProcess } from "react-icons/fc";
import { RiMessage2Fill } from "react-icons/ri";
import { Image, Stack, Flex, Text, Heading, Button } from '@chakra-ui/react';

export const HeroOnTop = () => {
  return (
    <Stack
    w='100%'
    mt='-100px'
    >
        <Flex 
        w='85%'  
        alignSelf={'center'}
        justifyContent={'space-around'}
        top={'81%'}
        >
            <Flex
            w='30%'
            position={'relative'}                    
            >
                <Image 
                position={'relative'}                    
                borderRadius={'20px'}
                src='https://img.freepik.com/free-vector/abstract-business-professional-background-banner-design-multipurpose_1340-16858.jpg' />
                <Flex
                position={'absolute'}
                justifyContent={'space-around'}
                alignItems={'center'}
                h='100%'
                >
                    <BsPeopleFill color='yellow' size={'30%'}/>
                    <Stack
                    color={'white'}
                    w='80%'
                    >
                        <Heading
                        fontSize={'30px'}
                        >Accessible to everyone</Heading>
                        <Text
                        >These scholarships are accessible to everyone seeking to acquire education</Text>
                    </Stack>
                </Flex>
            </Flex>
            <Flex
            w='30%'
            position={'relative'}                    
            >
                <Image 
                position={'relative'}                    
                borderRadius={'20px'}
                src='https://img.freepik.com/free-vector/abstract-business-professional-background-banner-design-multipurpose_1340-16858.jpg' />
                <Flex
                position={'absolute'}
                justifyContent={'space-around'}
                alignItems={'center'}
                h='100%'
                >
                    <FcProcess color='yellow' size={'30%'}/>
                    <Stack
                    color={'white'}
                    w='80%'
                    >
                        <Heading
                        fontSize={'30px'}
                        >Streamlined process</Heading>
                        <Text>The application process is quite simple and streamlined to offer enhanced student</Text>
                    </Stack>
                </Flex>
            </Flex>
            <Flex
            w='30%'
            position={'relative'}                    
            >
                <Image 
                position={'relative'}                    
                borderRadius={'20px'}
                src='https://img.freepik.com/free-vector/abstract-business-professional-background-banner-design-multipurpose_1340-16858.jpg' />
                <Flex
                position={'absolute'}
                justifyContent={'space-around'}
                alignItems={'center'}
                h='100%'
                >
                    <RiMessage2Fill color='yellow' size={'30%'}/>
                    <Stack
                    color={'white'}
                    w='80%'
                    >
                        <Heading
                        fontSize={'30px'}
                        >Instant response</Heading>
                        <Text>Have any queries? Reach out to us on email</Text>
                    </Stack>
                </Flex>
            </Flex>
        </Flex>
    </Stack>
  )
}

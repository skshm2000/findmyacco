import { Image, Stack, Flex, Text, Heading, Button, AspectRatio } from '@chakra-ui/react';

export const RRR = () => {
  return (
    <>
    <Stack
    w='80%'
    m='auto'
    >
        <Heading mt='80px' mb='50px' textAlign={'center'}>Register. Rock. Reward.</Heading>
        <Flex
        justifyContent={'space-around'}
        >
            <Stack
            w='30%'
            px='5%'
            py='4%'
            textAlign={'center'}
            boxShadow={'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;'}
            borderTopLeftRadius={'40px'}
            >
                <Heading>Register</Heading>
                <Text>Tap on 'register' now</Text>
            </Stack>
            <Stack
            w='30%'
            px='5%'
            py='4%'
            textAlign={'center'}
            boxShadow={'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;'}
            borderTopLeftRadius={'40px'}
            >
                <Heading>Rock</Heading>
                <Text>Input all rocking ideas into the application forms</Text>
            </Stack>
            <Stack
            w='30%'
            px='5%'
            py='4%'
            textAlign={'center'}
            boxShadow={'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;'}
            borderTopLeftRadius={'40px'}
            >
                <Heading>Reward</Heading>
                <Text>Submit the application form and enjoy our scholarship reward</Text>
            </Stack>
        </Flex>
    </Stack>
    </>
  )
}

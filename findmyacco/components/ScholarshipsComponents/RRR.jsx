import { Image, Stack, Flex, Text, Heading, Button, AspectRatio } from '@chakra-ui/react';
import register from './Assets/register.png'
import rock from './Assets/rock.png'
import reward from './Assets/reward.png'

export const RRR = () => {
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
    w='80%'
    m='auto'
    >
        <Heading mt='80px' mb='50px' textAlign={'center'}>Register. Rock. Reward.</Heading>
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
        base: '60px',
        sm: '60px'
        }}
        >
            <Stack
            w={{
                base: '85%',
                sm: '85%',
                md: '85%',
                lg: '30%',
                xl: '30%',
                '2xl': '30%',
              }}
            px='5%'
            py='4%'
            textAlign={'center'}
            boxShadow={'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;'}
            borderTopLeftRadius={'40px'}
            position={'relative'}
            justifyContent={'center'}
            alignItems={'center'}
            h='200px'
            m='auto'
            >
                <Stack
                w='25%'
                h='37%'
                position={'absolute'}
                top={'-45px'}
                transform={'rotate(45deg)'}
                borderRadius={'20px'}
                bgColor={'#143d59'}
                justifyContent={'center'}
                alignItems={'center'}
                >
                    <Image 
                    w='60%'
                    transform={'rotate(315deg)'}
                    src={register}/>
                </Stack>
                <Heading>Register</Heading>
                <Text>Tap on 'register' now</Text>
            </Stack>
            <Stack
            w={{
                base: '85%',
                sm: '85%',
                md: '85%',
                lg: '30%',
                xl: '30%',
                '2xl': '30%',
              }}
            px='5%'
            py='4%'
            textAlign={'center'}
            boxShadow={'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;'}
            borderTopLeftRadius={'40px'}
            position={'relative'}
            justifyContent={'center'}
            alignItems={'center'}
            h='200px'
            m='auto'
            >
                <Stack
                w='25%'
                h='37%'
                position={'absolute'}
                top={'-45px'}
                transform={'rotate(45deg)'}
                borderRadius={'20px'}
                bgColor={'#143d59'}
                justifyContent={'center'}
                alignItems={'center'}
                >
                    <Image 
                    w='60%'
                    transform={'rotate(315deg)'}
                    src={rock}/>
                </Stack>
                <Heading>Rock</Heading>
                <Text>Input all rocking ideas into the application forms</Text>
            </Stack>
            <Stack
            w={{
                base: '85%',
                sm: '85%',
                md: '85%',
                lg: '30%',
                xl: '30%',
                '2xl': '30%',
              }}
            px='5%'
            py='4%'
            textAlign={'center'}
            boxShadow={'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;'}
            borderTopLeftRadius={'40px'}
            position={'relative'}
            justifyContent={'center'}
            alignItems={'center'}
            h='200px'
            m='auto'
            >
                <Stack
                w='25%'
                h='37%'
                position={'absolute'}
                top={'-45px'}
                transform={'rotate(45deg)'}
                borderRadius={'20px'}
                bgColor={'#143d59'}
                justifyContent={'center'}
                alignItems={'center'}
                >
                    <Image 
                    w='60%'
                    transform={'rotate(315deg)'}
                    src={reward}/>
                </Stack>
                <Heading>Reward</Heading>
                <Text>Submit the application form and enjoy our scholarship reward</Text>
            </Stack>
        </Flex>
    </Stack>
    </>
  )
}

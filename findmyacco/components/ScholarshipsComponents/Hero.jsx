// import { Image, Stack, Flex, Text, Heading, Button } from '@chakra-ui/react';
import banner from './Assets/main_banner.png'
import './scholarships.css'
import { BsPeopleFill } from "react-icons/bs";
import { FcProcess } from "react-icons/fc";
import { RiMessage2Fill } from "react-icons/ri";
import { Image, Stack, Flex, Text, Heading, Button } from '@chakra-ui/react';
import { FormModal } from './FormModal'
import { useState } from 'react';

export const Hero = () => {
  const [ state, setState ] = useState(false)
  const breakpoints = {
    base: '28px',
    sm: '35px',
    md: '35px',
    lg: '38px',
    xl: '45px',
    '2xl': '45px',
  }
  const FontSizeHeading = {
    base: '17px',
    sm: '17px',
    md: '18px',
    lg: '20px',
    xl: '25px',
    '2xl': '25px',
  }
  const FontSizeText = {
    base: '14px',
    sm: '14px',
    md: '11px',
    lg: '12px',
    xl: '15px',
    '2xl': '15px',
  }
  return (
    <>
        <FormModal closeModal={()=>setState(false)} toggle={state} />
        <Stack
          position={'relative'}
        >
            <Image
            src={banner} 
            h='90vh'
            zIndex={'-1'}
            />
            <Stack
            position={'absolute'}
            w='50%'
            top='20%'
            left='8%'
            color={'white'}
            spacing={'20px'}
            zIndex={'100'}
            >
                <Heading fontSize={breakpoints}>Providing <span className='blueText'>scholarships</span>,</Heading>
                <Heading fontSize={breakpoints}>worth <span className='blueText'>£15,000</span></Heading>
                <Button
                w='40%'
                bg='#143d59'
                onClick={()=>setState(true)}
                >Apply Now</Button>
            </Stack>
            <Stack
            w='100%'
            position={'absolute'}
            bottom={{
              base: '-100%',
              sm: '-120%',
              md: '-10',
              lg: '-20',
              xl: '-20',
              '2xl': '-20',
            }}
            >
                <Flex 
                w={{
                  base: '70%',
                  sm: '70%',
                  md: '95%',
                  lg: '90%',
                  xl: '80%',
                  '2xl': '80%',
                }}  
                alignSelf={'center'}
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
                  base: '30px',
                  sm: '30px'
                }}
                >
                    <Flex
                    w={{
                      base: '100%',
                      sm: '100%',
                      md: '33%',
                      lg: '33%',
                      xl: '33%',
                      '2xl': '33%',
                    }}
                    position={'relative'}
                    >
                        <Image                  
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
                                fontSize={FontSizeHeading}
                                >Accessible to everyone</Heading>
                                <Text
                                fontSize={FontSizeText}
                                >These scholarships are accessible to everyone seeking to acquire education</Text>
                            </Stack>
                        </Flex>
                    </Flex>
                    <Flex
                    w={{
                      base: '100%',
                      sm: '100%',
                      md: '33%',
                      lg: '33%',
                      xl: '33%',
                      '2xl': '33%',
                    }}
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
                                fontSize={FontSizeHeading}
                                >Streamlined process</Heading>
                                <Text
                                fontSize={FontSizeText}
                                >The application process is quite simple and streamlined to offer enhanced student</Text>
                            </Stack>
                        </Flex>
                    </Flex>
                    <Flex
                    w={{
                      base: '100%',
                      sm: '100%',
                      md: '33%',
                      lg: '33%',
                      xl: '33%',
                      '2xl': '33%',
                    }}
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
                                fontSize={FontSizeHeading}
                                >Instant response</Heading>
                                <Text
                                fontSize={FontSizeText}
                                >Have any queries? Reach out to us on email</Text>
                            </Stack>
                        </Flex>
                    </Flex>
                </Flex>
            </Stack>
        </Stack>
    </>
  )
}

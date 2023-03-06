import { Text, Stack, Image, Heading, Flex } from '@chakra-ui/react'
import loughborough from './Assets/loughborough.jpg'
import nottingham from './Assets/nottingham.webp'
import exeter from './Assets/exeter.jpg'
import leicester from './Assets/leicester.jpg'
import './Countries.css'
import { useNavigate } from 'react-router-dom'

export const PopularCities = ({ name }) => {
    const nav = useNavigate()
  return (
    <>
    <Stack
    w='80%'
    m='auto'
    mt='8%'
    >
        <Heading>Popular Cities in { name=='uk' ? 'United Kingdom':name }</Heading>
        <Flex
        justifyContent={'space-between'}
        >
            <Stack
            w='24%'
            h='350px'
            borderRadius={'25px'}
            overflow={'hidden'}
            position={'relative'}
            alignItems={'center'}
            onClick={()=>{
                nav(`/${name}/Loughborough`)
            }}
            >
                <Image
                className='singleCityCard'
                w='100%'
                h='100%'
                src={loughborough} />
                <Text
                position={'absolute'}
                bottom={'5'}
                color={'white'}
                fontSize={'20px'}
                bgColor='black'
                px='5px'
                >Loughborough</Text>
            </Stack>
            <Stack
            w='24%'
            h='350px'
            borderRadius={'25px'}
            overflow={'hidden'}            
            position={'relative'}
            alignItems={'center'}
            onClick={()=>{
                nav(`/${name}/Nottingham`)
            }}
            >
                <Image
                className='singleCityCard'
                w='100%'
                h='100%'
                src={nottingham} />
                <Text
                position={'absolute'}
                bottom={'5'}
                color={'white'}
                fontSize={'20px'}
                bgColor='black'
                px='5px'
                >Nottingham</Text>
            </Stack>
            <Stack
            w='24%'
            h='350px'
            borderRadius={'25px'}
            overflow={'hidden'}
            position={'relative'}
            alignItems={'center'}
            onClick={()=>{
                nav(`/${name}/Exeter`)
            }}
            >
                <Image
                className='singleCityCard'
                w='100%'
                h='100%'
                src={exeter} />
                <Text
                position={'absolute'}
                bottom={'5'}
                color={'white'}
                fontSize={'20px'}
                bgColor='black'
                px='5px'
                >Exeter</Text>
            </Stack>
            <Stack
            w='24%'
            h='350px'
            borderRadius={'25px'}
            overflow={'hidden'}
            position={'relative'}
            alignItems={'center'}
            onClick={()=>{
                nav(`/${name}/Leicester`)
            }}
            >
                <Image
                className='singleCityCard'
                w='100%'
                h='100%'
                src={leicester} />
                <Text
                position={'absolute'}
                bottom={'5'}
                color={'white'}
                fontSize={'20px'}
                bgColor='black'
                px='5px'
                >Leicester</Text>
            </Stack>
            <Stack
            w='24%'
            h='350px'
            borderRadius={'25px'}
            overflow={'hidden'}
            position={'relative'}
            alignItems={'center'}
            onClick={()=>{
                nav(`/${name}/Leeds`)
            }}
            >
                <Image
                className='singleCityCard'
                w='100%'
                h='100%'
                src={leicester} />
                <Text
                position={'absolute'}
                bottom={'5'}
                color={'white'}
                fontSize={'20px'}
                bgColor='black'
                px='5px'
                >Leeds</Text>
            </Stack>
        </Flex>
    </Stack>
    </>
  )
}

import { Image, Stack, Flex, Text, Heading, Button } from '@chakra-ui/react';
import internship from './Assets/internship_programs.png'
import luggage from './Assets/luggage_services.png'
import student_loan from './Assets/Student_ed_loans.png'

export const OtherServices = () => {
  return (
    <>
    <Stack
    w='80%'
    m='auto'
    mt='80px'
    >
        <Heading color='#143D59' textAlign={'center'}>Other Services</Heading>
        <Flex
        justifyContent={'space-around'}
        >
            <Stack
            justifyContent={'center'}
            border={'1px solid black'}
            p='3%'
            w='30%'
            borderRadius='20px'
            spacing='8%'
            >
                <Image h='25%' m='auto' w='30%' src={student_loan}></Image>
                <Heading h='20%' fontSize='22px' textAlign={'center'}>Student Education Loan</Heading>
                <Text h='35%' textAlign={'center'}>Findmyacco is partnered with premium loan providers to offer students collateral-free education loans that incorporate tuition fees and other facilities as well.</Text>
                <Button
                h='20%'
                alignSelf='center'
                bgColor='#143D59'
                color='white'
                w='70%'
                >Request a Callback</Button>
            </Stack>
            <Stack
            justifyContent={'center'}
            border={'1px solid black'}
            p='3%'
            w='30%'
            borderRadius='20px'
            spacing='8%'
            >
                <Image h='25%' m='auto' w='30%' src={luggage}></Image>
                <Heading h='20%' fontSize='22px' textAlign={'center'}>Luggage Services</Heading>
                <Text h='35%' textAlign={'center'}>Avail of our fast and secure luggage transport services to move your possessions to your accommodation safely.</Text>
                <Button
                h='20%'
                alignSelf='center'
                bgColor='#143D59'
                color='white'
                w='70%'
                >Request a Callback</Button>
            </Stack>
            <Stack
            justifyContent={'center'}
            border={'1px solid black'}
            p='3%'
            w='30%'
            borderRadius='20px'
            spacing='8%'
            h='450px'
            >
                <Image h='25%' m='auto' w='30%' src={internship}></Image>
                <Heading h='20%' fontSize='22px' textAlign={'center'}>Internship Programs</Heading>
                <Text h='35%' textAlign={'center'}>Enroll in numerous internship programs to acquire first-hand experience and enhance your skillset.</Text>
                <Button
                h='20%'
                alignSelf='center'
                bgColor='#143D59'
                color='white'
                w='70%'
                >Request a Callback</Button>
            </Stack>
        </Flex>
    </Stack>
    </>
  )
}

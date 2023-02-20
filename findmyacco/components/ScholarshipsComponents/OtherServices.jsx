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
    mt={{
        base: '500px',
        sm: '620px',
        md: '120px',
        lg: '150px',
        xl: '150px',
        '2xl': '150px',
      }}
    spacing={'30px'}
    >
        <Heading color='#143D59' textAlign={'center'}>Other Services</Heading>
        <Flex
        justifyContent={'space-around'}
        flexDirection={{
            base: 'column',
            sm: 'column',
            md: 'column',
            lg: 'row',
            xl: 'row',
            '2xl': 'row',
          }}
        gap={{
        base: '30px',
        sm: '30px',
        md: '30px'
        }}
        >
            <Stack
            justifyContent={'center'}
            boxShadow = 'rgba(0, 0, 0, 0.35) 0px 5px 15px'
            p='3%'
            h='450px'
            w={{
                base: '70%',
                sm: '70%',
                md: '70%',
                lg: '33%',
                xl: '33%',
                '2xl': '33%',
              }}
            m='auto'
            borderRadius='30px'
            spacing='8%'
            >
                <Image 
                w={{
                    base: '25%',
                    sm: '20%',
                    md: '20%',
                    lg: '25%',
                    xl: '25%',
                    '2xl': '25%',
                  }}
                m='auto' src={student_loan}></Image>
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
            boxShadow = 'rgba(0, 0, 0, 0.35) 0px 5px 15px'
            p='3%'
            w={{
                base: '70%',
                sm: '70%',
                md: '70%',
                lg: '33%',
                xl: '33%',
                '2xl': '33%',
              }}
            m='auto'
            borderRadius='30px'
            spacing='8%'
            h='450px'
            >
                <Image
                w={{
                    base: '25%',
                    sm: '20%',
                    md: '20%',
                    lg: '25%',
                    xl: '25%',
                    '2xl': '25%',
                  }}
                m='auto' src={luggage}></Image>
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
            boxShadow = 'rgba(0, 0, 0, 0.35) 0px 5px 15px'
            p='3%'
            w={{
                base: '70%',
                sm: '70%',
                md: '70%',
                lg: '33%',
                xl: '33%',
                '2xl': '33%',
              }}
            m='auto'
            borderRadius='30px'
            spacing='8%'
            h='450px'
            >
                <Image 
                w={{
                    base: '25%',
                    sm: '20%',
                    md: '20%',
                    lg: '25%',
                    xl: '25%',
                    '2xl': '25%',
                  }}
                m='auto' src={internship}></Image>
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

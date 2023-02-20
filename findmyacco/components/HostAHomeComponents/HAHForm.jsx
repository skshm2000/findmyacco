import { Input, Button, Spinner, Image, Text, Flex, Heading, Stack } from '@chakra-ui/react'
import { useState } from 'react'

const initForm = {
    firstName:'',
    lastName:'',
    email:'',
    phoneNumber:'',
    university:'',
    area:'',
}

export default function HAHForm() {
    const [ query, setQuery ] = useState(initForm)
    const [ loading, setLoading ] = useState(false)
    const [ error, setError ] = useState(false)
    const [ complete, setComplete ] = useState(false)
    const breakpoints = {
        base:'90%',
        sm:'90%',
        md:'85%',
        lg:'80%',
        xl:'70%',
        '2xl':'50%'
    }


    const handleOnChange = (e) => {
        const { name, value } = e.target
    
        setQuery({
            ...query,
            [name]:value
        })
      }
    
      const handleSubmit = async () => {
        setLoading(true)
        // try {
        //     const res = await axios.post(API, query)
        //     const data = await res.data
        //     if(!data.error){
        //         setLoading(false)     
        //         setTimeout(()=>{
        //             ModalCloser()
        //         }, 5000)
        //         setComplete(true)
        //         setError(false)
        //         setQuery(initForm)
        //     } else {
        //         setError(true)
        //     }
        //     setLoading(false)     
        // } catch (error) {
        //     setLoading(false)   
        //     setError(true)
        // }
      }

    return (
        <>
        <Stack
        w={breakpoints}
        m='auto'
        px={'10%'}
        py={'5%'}
        my={'5%'}
        boxShadow={'rgba(0, 0, 0, 0.35) 0px 5px 15px;'}
        borderRadius={'40px'}
        >
        <Heading textAlign={'center'}>Fill in your Information</Heading>
        <Text textAlign={'center'} my='10px' >Get In Touch & Contact To Reach Us!</Text>
        <form action="">
            <label htmlFor="">
                First Name*
                <Input onChange={handleOnChange} name='firstName' mb='10px' required placeholder='Jane' />
            </label>
            <label htmlFor="">
                Last Name*
                <Input onChange={handleOnChange} name='lastName' mb='10px' required placeholder='Smith' />
            </label>
            <label htmlFor="">
                Phone Number
                <Input onChange={handleOnChange} name='phoneNumber' mb='10px' placeholder='Jane' />
            </label>
            <label htmlFor="">
                Email
                <Input onChange={handleOnChange} name='email' mb='10px' type='email' placeholder='name@example.com' />
            </label>
            <label htmlFor="">
                University
                <Input onChange={handleOnChange} name='university' placeholder="Christ's" mb='10px' />
            </label>
            <label htmlFor="">
                Area
                <Input onChange={handleOnChange} name='area' placeholder="London" mb='10px' />
            </label>
            <Text color='red' hidden={!error}>Something went wrong! Try Again</Text>
            { !loading && !error && !complete && <Button onClick={handleSubmit} mt='15px' mb='20px' w='100%'>Submit</Button> }
            { loading &&  <Spinner ml='7%' /> }
            { error && <Button onClick={handleSubmit} mt='15px' mb='20px' w='100%'>Submit</Button> }
            { complete && <Flex
            alignItems={'center'}
            >
                <Image w='20%' src={tick} />
                <Text>Our team will contact you soon!</Text>
                </Flex> }
        </form>
        </Stack>
        </>
    )
}
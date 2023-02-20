import {
Modal,
ModalOverlay,
ModalContent,
ModalHeader,
ModalBody,
Button,
ModalCloseButton,
useDisclosure,
Text,
Input,
Divider,
Spinner,
Image,
Flex
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import tick from './Assets/tick.gif'


const initForm = {
    firstName:'',
    lastName:'',
    email:'',
    phoneNumber:'',
    university:''
}

const API = import.meta.env.VITE_NEW_SSQUERY_API

export const FormModal = ({ closeModal, toggle }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [ query, setQuery ] = useState(initForm)
  const [ loading, setLoading ] = useState(false)
  const [ error, setError ] = useState(false)
  const [ complete, setComplete ] = useState(false)
  
  const ModalCloser = ()=>{
    onClose()
    closeModal()
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
    try {
        const res = await axios.post(API, query)
        const data = await res.data
        if(!data.error){
            setLoading(false)     
            setTimeout(()=>{
                ModalCloser()
            }, 5000)
            setComplete(true)
            setError(false)
            setQuery(initForm)
        } else {
            setError(true)
        }
        setLoading(false)     
    } catch (error) {
        setLoading(false)   
        setError(true)
    }
  }
  useEffect(()=>{
    if(!toggle){
        onClose()
    } else if(toggle){
        onOpen()
    }
  }, [toggle])

  return (
    <>
        <Modal isOpen={isOpen} onClose={ModalCloser}>
            <ModalOverlay />
            <ModalContent>
            <ModalHeader>
                Fill in your Information
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
            <Divider />
            <Text my='10px' >Get In Touch & Contact To Reach Us!</Text>
            <Divider mb='10px' />
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
            </ModalBody>
            </ModalContent>
        </Modal>
    </>
  )
}

import {
Modal,
ModalOverlay,
ModalContent,
ModalHeader,
ModalFooter,
ModalBody,
Button,
ModalCloseButton,
useDisclosure,
Text,
Input,
Divider
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'

const initForm = {
    firstName:'',
    lastName:'',
    email:'',
    phoneNumber:'',
    university:''
}

export const FormModal = ({ closeModal, toggle }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [ query, setQuery ] = useState(initForm)
  
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

  const handleSubmit = () => {
    setQuery(initForm)
    ModalCloser()
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
                    <Button onClick={handleSubmit} mt='15px' mb='20px' w='100%'>Submit</Button>
                </form>
            </ModalBody>
            </ModalContent>
        </Modal>
    </>
  )
}

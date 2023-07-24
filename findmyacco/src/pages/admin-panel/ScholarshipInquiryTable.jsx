import React, { useEffect, useState } from 'react'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Icon,
    Button,
    Flex,
    Heading,
    Input,
    InputGroup,
    InputRightElement,
    Alert,
    AlertIcon,
    useDisclosure,
    CloseButton,
    AlertTitle,
    Box
  } from '@chakra-ui/react';

//   import "./inquiry.css"

  import { deleteInquiry, getAllInquiry, searchInquiries, updateStatus } from '../../redux/SSinquiry/SSinquiry.actions';
  import { RiDeleteBinFill} from 'react-icons/ri';
  import { BiSearch} from 'react-icons/bi';
  import { BsCheckLg} from 'react-icons/bs';
  import { MdOutlinePendingActions} from 'react-icons/md';
  import {FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';

const ScholarshipInquiryTable = () => {
    const dispatch = useDispatch();
    const inquiry = useSelector(store => store.SSinquiry);
    const [page,setPage] = useState(1);
    const [text, setText]  = useState("");
    // const [statusChanged, setStatusChanged] = useState(false);
    
    console.log(inquiry);
    let totalPages = Math.ceil(inquiry.totalInquiries/15)

    // const data = [
    //     {
    //         name:"Rutvik Khatod",
    //         email:"rutvik.khatod@gmail.com",
    //         phoneNumber: "9537042701",
    //         university: "Brunel"
    //     },
    //     {
    //         name:"Rutvik Khatod",
    //         email:"rutvik.khatod@gmail.com",
    //         phoneNumber: "9537042701",
    //         university: "Brunel"
    //     },
    //     {
    //         name:"Rutvik Khatod",
    //         email:"rutvik.khatod@gmail.com",
    //         phoneNumber: "9537042701",
    //         university: "Brunel"
    //     },
    //     {
    //         name:"Rutvik Khatod",
    //         email:"rutvik.khatod@gmail.com",
    //         phoneNumber: "9537042701",
    //         university: "Brunel"
    //     },
    //     {
    //         name:"Rutvik Khatod",
    //         email:"rutvik.khatod@gmail.com",
    //         phoneNumber: "9537042701",
    //         university: "Brunel"
    //     },
    //     {
    //         name:"Rutvik Khatod",
    //         email:"rutvik.khatod@gmail.com",
    //         phoneNumber: "9537042701",
    //         university: "Brunel"
    //     }
    // ]

    // const getData = (page) => {
    //     dispatch(getAllInquiry(page));
    // }

    // console.log("Hi");

    const handleDelete = (id) => {
        dispatch(deleteInquiry(id));
        dispatch(getAllInquiry(page));
    }

    const handleChange = (ev)=>{
        setText(ev.target.value);
    }

    const handleSearch = () => {
        dispatch(searchInquiries(text));
        setText("");
    }

    const toggleStatus = (id, onOpen) => {
        dispatch(updateStatus(id));
        onOpen();
        setTimeout(() => {
           onClose(); 
        },1000)
    }

    useEffect(()=>{
        dispatch(getAllInquiry(page));
    },[page])

    const {
        isOpen: statusChanged,
        onClose,
        onOpen,
      } = useDisclosure({ defaultIsOpen: false });
  return (<>
    {statusChanged?
        <Box position="absolute" w="95vw" h="100vh" top="0px" right="0px" bg="rgba(0,0,0,0.4)" zIndex="10">
        <Alert position="relative" top="50px"  status='success' variant='subtle' w="300px" m="auto" borderRadius="10px">
            <AlertIcon />
            <AlertTitle>Status Changed !</AlertTitle>
            {/* <CloseButton alignSelf={"end"} onClick={onClose}/> */}
        </Alert></Box>:""}
    <TableContainer w="95%" m="auto">
        
        {/* <div className='XYZ'>Hello</div> */}
        <Heading mt="20px" mb="20px" size={"lg"} textAlign="center">SCHOLARSHIP INQUIRY DETAILS</Heading>
        <InputGroup w="400px" m="auto" my="20px" border={"1px solid"} borderRadius="7px" >
            <Input placeholder="Search by name or by university" border={"none"} onChange={handleChange}></Input>
            <InputRightElement>
                <Button colorScheme={"yellow"} borderLeftRadius="0px" onClick={handleSearch}><Icon as={BiSearch}/></Button>
            </InputRightElement>
        </InputGroup>
        <Table variant='simple' boxShadow={"lg"} w="90%" m="auto">
            {/* <TableCaption>© Copyright 2023 reserved by Findmyacco </TableCaption> */}
            <Thead w="80%">
            <Tr>
                <Th textAlign="center" border={"1px solid black"} fontSize="16px" bg="yellow.400" color={"black"}>Sr. No.</Th>
                <Th textAlign="center" border={"1px solid black"} fontSize="16px" bg="yellow.400" color={"black"}>Name</Th>
                <Th textAlign="center" border={"1px solid black"} fontSize="16px" bg="yellow.400" color={"black"}>Email</Th>
                <Th textAlign="center" border={"1px solid black"} fontSize="16px" bg="yellow.400" color={"black"}>Phone_no</Th>
                <Th textAlign="center" border={"1px solid black"} fontSize="16px" bg="yellow.400" color={"black"}>University</Th>
                <Th textAlign="center" border={"1px solid black"} fontSize="16px" bg="yellow.400" color={"black"}>Action</Th>
            </Tr>
            </Thead>
            <Tbody w="80%">
            {inquiry?.data?.map((row,i)=>(
            <Tr key={i} w="80%">
                <Td textAlign="center" border={"1px solid black"} >{(page-1)*15 + i+1}</Td>
                <Td textAlign="center" border={"1px solid black"} >{`${row.firstName} ${row.lastName}`}</Td>
                <Td textAlign="center" border={"1px solid black"} >{row.email}</Td>
                <Td textAlign="center" border={"1px solid black"} >{row.phoneNumber}</Td>
                <Td textAlign="center" border={"1px solid black"}  >{row.university}</Td>
                <Td textAlign="center" border={"1px solid black"} >
                    <Button variant={"ghost"} boxShadow="md" size={"md"} bg="blue.50" mr="10px" onClick={()=>toggleStatus(row._id, onOpen,onClose)} >
                    {row.completed ? <Icon as={BsCheckLg} color={"green.500"}/>:<Icon as={MdOutlinePendingActions} color={"red.500"} />}
                    </Button>
                    <Button variant={"ghost"} boxShadow="md" size={"md"} bg="red.50" onClick={()=>handleDelete(row._id)}><Icon as={RiDeleteBinFill} color={"red.500"} /></Button>
                </Td>
            </Tr>))}
            </Tbody>
        </Table>
        <Flex justifyContent={"center"} my="20px" gap="5px">
            <Button size="sm" isDisabled={page===1} onClick={()=>setPage(prev=>prev-1)} colorScheme={"yellow"} boxShadow={"lg"}><Icon as={FiChevronLeft}/></Button>
            {Array(totalPages).fill(0)?.map((item,i)=>(
                <Button variant="outline" color="black" key={i} size="sm" onClick={()=>setPage(prev => prev=item)} boxShadow={"sm"}>{i+1}</Button>
            ))}
            <Button size="sm" isDisabled={page===totalPages} colorScheme={"yellow"} onClick={()=>setPage(prev=>prev+1)} boxShadow={"lg"}><Icon as={FiChevronRight}/></Button>
        </Flex>
    </TableContainer>
    </>
  )
}

export default ScholarshipInquiryTable
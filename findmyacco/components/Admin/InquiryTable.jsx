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
    InputRightElement
  } from '@chakra-ui/react';

//   import "./inquiry.css"

  import { deleteInquiry, getAllInquiry, searchInquiries } from '../../redux/inquiry/inquiry.actions';
  import { RiDeleteBinFill} from 'react-icons/ri';
  import { BiSearch} from 'react-icons/bi';
  import {FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';

const InquiryTable = () => {
    const dispatch = useDispatch();
    const inquiry = useSelector(store => store.inquiry);
    const [page,setPage] = useState(1);
    const [text, setText]  = useState("");
    
    console.log(inquiry);
    let totalPages = Math.ceil(inquiry.totalInquiries/10)

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
    useEffect(()=>{
        dispatch(getAllInquiry(page));
    },[page])

  return (
    <TableContainer w="90%" m="auto" className='continer' >
        {/* <div className='XYZ'>Hello</div> */}
        <Heading mt="20px" mb="20px" size={"lg"} textAlign="center">INQUIRY DETAILS</Heading>
        <InputGroup w="400px" my="20px" border={"1px solid"} borderRadius="7px">
            <Input placeholder="Search by name or by university" border={"none"} onChange={handleChange}></Input>
            <InputRightElement>
                <Button colorScheme={"yellow"} borderLeftRadius="0px" onClick={handleSearch}><Icon as={BiSearch}/></Button>
            </InputRightElement>
        </InputGroup>
        <Table variant='simple' boxShadow={"lg"}>
            {/* <TableCaption>© Copyright 2023 reserved by Findmyacco </TableCaption> */}
            <Thead>
            <Tr>
                <Th textAlign="center" border={"1px solid black"} fontSize="16px" bg="yellow.400" color={"black"}>Sr. No.</Th>
                <Th textAlign="center" border={"1px solid black"} fontSize="16px" bg="yellow.400" color={"black"}>Name</Th>
                <Th textAlign="center" border={"1px solid black"} fontSize="16px" bg="yellow.400" color={"black"}>Email</Th>
                <Th textAlign="center" border={"1px solid black"} fontSize="16px" bg="yellow.400" color={"black"}>Phone_no</Th>
                <Th textAlign="center" border={"1px solid black"} fontSize="16px" bg="yellow.400" color={"black"}>University</Th>
                <Th textAlign="center" border={"1px solid black"} fontSize="16px" bg="yellow.400" color={"black"}>Action</Th>
            </Tr>
            </Thead>
            <Tbody border={"1px solid #222"}>
            {inquiry?.data?.map((row,i)=>(
            <Tr key={i}>
                <Td textAlign="center" border={"1px solid black"} w="20px">{(page-1)*10 + i+1}</Td>
                <Td textAlign="center" border={"1px solid black"} >{row.name}</Td>
                <Td textAlign="center" border={"1px solid black"} >{row.email}</Td>
                <Td textAlign="center" border={"1px solid black"} >{row.phoneNumber}</Td>
                <Td textAlign="center" border={"1px solid black"} >{row.university}</Td>
                <Td textAlign="center" border={"1px solid black"} onClick={()=>handleDelete(row._id)}>
                    <Button variant={"ghost"} boxShadow="md" size={"sm"}><Icon as={RiDeleteBinFill} color={"red.500"} /></Button>
                </Td>
            </Tr>))}
            </Tbody>
            {/* <Tfoot>
            <Tr>
                <Th textAlign="center">Total</Th>
                <Th textAlign="center">into</Th>
                <Th textAlign="center" isNumeric>multiply by</Th>
            </Tr>
            </Tfoot> */}
        </Table>
            <Flex justifyContent={"center"} my="20px" gap="5px">
                <Button size="sm" isDisabled={page===1} onClick={()=>setPage(prev=>prev-1)} colorScheme={"yellow"} boxShadow={"lg"}><Icon as={FiChevronLeft}/></Button>
                {Array(totalPages).fill(0)?.map((item,i,arr)=>(
                    <Button variant="outline" color="black" key={i} size="sm" onClick={()=>setPage(prev => prev=item)} boxShadow={"sm"}>{i+1}</Button>
                ))}
                <Button size="sm" isDisabled={page===totalPages} colorScheme={"yellow"} onClick={()=>setPage(prev=>prev+1)} boxShadow={"lg"}><Icon as={FiChevronRight}/></Button>
            </Flex>
    </TableContainer>
  )
}

export default InquiryTable
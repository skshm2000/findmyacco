import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useLocation, useNavigate, useParams, useSearchParams } from 'react-router-dom'
import { Heading, Spinner, Stack, Flex, Image, Text } from '@chakra-ui/react'

const API = import.meta.env.VITE_GETLANDLORDS_API
export const SingleCity = () => {
  const [ data, setData ] = useState([])
  let { city, country } = useParams()
  const [ searchParams ] = useSearchParams()
  const nav = useNavigate()

  async function dataGetter() {
    let res = await axios.get(`${API}?city=${city}`)
    let resData = await res.data
    setData(resData.data)
  }

  useEffect(()=>{
    dataGetter()
  }, [])

  return (
    <>
    <Heading
    textAlign={'center'}
    >Choose Accomodation by area</Heading>
    { data.length==0 && <Spinner /> }
    { data.length 
    && 
    <Flex
    justifyContent={'space-around'}
    w='80%'
    m='auto'
    >
      {data.map(ele=>
      <Stack
      position={'relative'}
      border='1px solid red'
      w='25%'
      gap={'20px'}
      h='250px'
      borderRadius={'20px'}
      p='10px'
      onClick={()=>{
        nav(`/properties?landlord=${ele.landlord}`)
      }}
      >
        <Text onClick={()=>{
          nav(`/${country}/${city}?`)
        }}>{ele.title}</Text>
      </Stack>
      )}
    </Flex> 
    }
    </>
  )
}

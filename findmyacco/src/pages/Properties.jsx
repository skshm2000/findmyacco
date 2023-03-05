import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import axios from 'axios'
import { Flex, Heading, SimpleGrid, Spinner, Stack } from '@chakra-ui/react'
import { SingleProperty } from '../../components/PropertiesPage/SingleProperty'

const API = import.meta.env.VITE_GETACCOS_API
export const Properties = () => {
  let [ searchParams ] = useSearchParams()
  let [ properties, setProperties ] = useState([])
  let [ error, setError ] = useState(false)
  let [ loading, setLoading ] = useState(false)
  async function dataGetter() {
    setLoading(true)
    try {
      let res = await axios.get(`${API}?landlord=${searchParams.get("landlord")}`)
      let data = await res.data
      setProperties(data.data.properties)
    } catch (error) {
      setError(true) 
    }
    setLoading(false)
  }

  useEffect(()=>{
    if(!properties.length){
      dataGetter()
    }
  }, [])

  return (
    <Flex>
      <Stack>

      </Stack>
      <SimpleGrid
      columns={'3'}
      w={'75%'}
      gap={'3%'}
      >
      { loading && <Spinner /> }
      { 
        properties.length && !error ? properties.map(ele=><SingleProperty data={ele} />) : <Heading color='red'>Something went wrong</Heading>
      }
      </SimpleGrid>
    </Flex>
  )
}

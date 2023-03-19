import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Flex, Heading, SimpleGrid, Spinner, Stack } from '@chakra-ui/react'
import { SingleProperty } from '../../components/PropertiesPageComponents/SingleProperty'
import { useSelector, useDispatch } from 'react-redux'
import { GetAllProperties } from '../../redux/Properties/Properties.actions'
import { Sidebar } from '../../components/PropertiesPageComponents/Sidebar'
import Navbar from '../../components/HomepageComponents/Navbar'
import Footer from '../../components/HomepageComponents/Footer'

export const Properties = () => {
  let [ searchParams ] = useSearchParams()
  let dispatch = useDispatch()
  let { isLoading, isError, dispData } = useSelector(state=>state.PropertiesReducer)

  useEffect(()=>{
    // if(!dispData.length){
      dispatch(GetAllProperties(searchParams.get("landlord")))
    // }
  }, [])

  return (
    <>
    <Navbar />
    <Flex
    justifyContent={'space-around'}
    mt='20px'
    mb='140px'
    >
      <Sidebar />
      <SimpleGrid
      columns={'3'}
      w={'72%'}
      gap={'3%'}
      >
      { isLoading ? <Spinner />:null }
      { 
        dispData?.length ? dispData.map(ele=><SingleProperty data={ele} />) : null
      }
      {
        isError ?  <Heading color='red'>Something went wrong</Heading> : null
      }
      </SimpleGrid>
    </Flex>
    <Footer/>
    </>
  )
}

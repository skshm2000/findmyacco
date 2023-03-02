import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { Heading, Spinner } from '@chakra-ui/react'

const API = import.meta.env.VITE_GETLANDLORDS_API
export const SingleCity = () => {
  const [ data, setData ] = useState([])
  let { city, country } = useParams()
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
    { data.length==0 && <Spinner /> }
    { data.length && <>
      {data.map(ele=><Heading onClick={()=>{
        nav(`/${country}/${city}?`)
      }}>{ele.title}</Heading>)}
    </> }
    </>
  )
}

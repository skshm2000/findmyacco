import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import axios from 'axios'

const API = import.meta.env.VITE_GETACCOS_API
export const Properties = () => {
  let [ searchParams ] = useSearchParams()
  let [ properties, setProperties ] = useState([])
  async function dataGetter() {
    let res = await axios.get(`${API}?landlord=${searchParams.get("landlord")}`)
    let data = await res.data
    
    setProperties(data.data.properties)
  }

  console.log(properties)

  useEffect(()=>{
    dataGetter()
  }, [])
  return (
    <>
    </>
  )
}

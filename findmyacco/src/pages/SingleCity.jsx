import React, { useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const API = import.meta.env.VITE_GETACCO_API
export const SingleCity = () => {
  let { city } = useParams()
  
  async function dataGetter() {
    let res = await axios.get(`${API}?city=${city}`)
    let data = await res.data

    console.log(data, 111)
  }

  useEffect(()=>{
    dataGetter()
  }, [])

  return (
    <>
    </>
  )
}

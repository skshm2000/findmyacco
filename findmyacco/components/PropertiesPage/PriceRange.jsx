import { Skeleton, Stack, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'

const PriceRange = ({ data }) => {
  const [ min, setMin ] = useState(0)
  const [ max, setMax ] = useState(0)
  const [ loading, setLoading ] = useState(true)
  
  useEffect(()=>{
    let MinVal = Infinity
    let MaxVal = 0

    data.forEach(ele=>{
        ele.prices.forEach(price=>{
            if(price.price_per_person_per_week<MinVal){
                MinVal = price.price_per_person_per_week
            }
            if(price.price_per_person_per_week>MaxVal){
                MaxVal = price.price_per_person_per_week
            }
        })
    })

    setMax(Number(MaxVal).toFixed(0))
    setMin(Number(MinVal).toFixed(0))
    setLoading(false)
  }, [])

  return (
    <>
        <Stack
        w='65%'
        >
            {
                loading ? <Skeleton w='100%' /> : <Text fontSize={'20px'}>{ `£ ${min} - ${max} per week` }</Text>
            }
        </Stack>
    </>
  )
}

export default PriceRange
import { Flex, Checkbox, Input, Stack, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RoomTypeFilter } from '../../../redux/Properties/Properties.actions'

export const RoomTypeFilterC = () => {
  const [ types, setTypes ] = useState([])
  const { dispData } = useSelector(state=>state.PropertiesReducer)
  const dispatch = useDispatch()

  const handleCheckbox = (e) => {
    if(e.target.checked) {
        setTypes([...types, e.target.value])
    } else {
        let arr = [...types]
        arr = arr.filter(ele=>ele!=e.target.value)
        setTypes([...arr])
    }
  }

  useEffect(()=>{
    dispatch(RoomTypeFilter(types))
  }, [types])

  return (
    <>
        <Stack
        >
            <Text fontSize={'24px'}>ROOM TYPE</Text>
            <Stack w='100%' h='2px' bgColor='grey'></Stack>
            <Stack>
                <Checkbox onChange={handleCheckbox} value={'En Suite'}>En Suite</Checkbox>
                <Checkbox onChange={handleCheckbox} value={'Studio'}>Studio</Checkbox>                    
                <Checkbox onChange={handleCheckbox} value={'Shared Serviced'}>Shared Serviced Apartments</Checkbox>                    
            </Stack>
        </Stack>
    </>
  )
}

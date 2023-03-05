import React, { useEffect, useState } from 'react'
import cctv from './Assets/Facilities/cctv.webp'
import cinema_room from './Assets/Facilities/cinema_room.webp'
import cooking from './Assets/Facilities/cooking.webp'
import gym from './Assets/Facilities/gym.png'
import laundry from './Assets/Facilities/laundry.png'
import study_room from './Assets/Facilities/study_room.webp'
import wifi from './Assets/Facilities/wifi.webp'
import washing_machine from './Assets/Facilities/washing_machine.png'
import { Flex, Image, Skeleton, SkeletonCircle, Text } from '@chakra-ui/react'

export const Facilities = ({ data }) => {
  let iconData = {
    "CCTV": cctv,
    "24h Security": cctv,
    "Cinema Room": cinema_room,
    "Gym": gym,
    "Laundry Room": laundry,
    "Study Room": study_room,
    "Study Area": study_room,
    "WiFi": wifi,
    "Cooker": cooking,
    "Washing Machine": washing_machine
  }
  let [ dispData, setDispData ] = useState([])
  let [ loading, setLoading ] = useState(true)

  useEffect(()=>{
    let keys = Object.keys(iconData)
    keys = shuffle(keys)
    let out = []
    for(let i=0; i<keys.length; i++){
        if(data.includes(keys[i])){
            out.push(<Flex w='30%' alignItems={'center'}><Image w='20%' src={iconData[keys[i]]} /><Text fontWeight={'bold'}>{keys[i]}</Text></Flex>)
        }
        if(out.length==3) break
        
    }
    setDispData(out)
    setLoading(false)
  }, [])

  return (
    <>
    {
        loading ? 
        <Flex
        justifyContent={'space-around'}
        >
            <Flex w='30%'>
                <SkeletonCircle size='20px' />
                <Skeleton w='80%' height='20px' />
            </Flex>
            <Flex w='30%'>
                <SkeletonCircle size='20px' />
                <Skeleton w='80%' height='20px' />
            </Flex>
            <Flex w='30%'>
                <SkeletonCircle size='20px' />
                <Skeleton w='80%' height='20px' />
            </Flex>
        </Flex> 
      : 
        <Flex
        m='auto'
        justifyContent={'space-around'}
        >
            { dispData }
        </Flex>
    }
    </>
  )
}

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
}
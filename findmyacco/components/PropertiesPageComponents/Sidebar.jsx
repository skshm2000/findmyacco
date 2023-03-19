import { Stack } from '@chakra-ui/react'
import React from 'react'
import { RoomTypeFilterC } from './SidebarComponents/RoomTypeFilter'

export const Sidebar = () => {
  return (
    <Stack
    w='18%'
    >
        <RoomTypeFilterC/>
    </Stack>
  )
}

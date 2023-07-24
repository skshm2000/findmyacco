import { GET_ALL_PROPS, LOADING, ERROR, ROOM_TYPE_FILTER } from './Properties.actionTypes'
import axios from 'axios'

const API = import.meta.env.VITE_GETACCOS_API

export const GetAllProperties = (landlord) => async (dispatch) => {
    dispatch({type:LOADING})
    try {
      let res = await axios.get(`${API}?landlord=${landlord}`)
      let data = await res.data
      return dispatch({
        type: GET_ALL_PROPS,
        payload: data.data.properties
      })
    } catch (error) {
        return dispatch({
          type: ERROR
        })        
    }
}

export const RoomTypeFilter = (filters) => {
  return {
    type: ROOM_TYPE_FILTER, 
    payload: filters
  }
}
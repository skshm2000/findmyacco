import { GET_ALL_PROPS, LOADING, ERROR, ROOM_TYPE_FILTER } from './Properties.actionTypes'

const initState = {
    allData:[],
    isLoading:false,
    isError:false,
    dispData:[]
}

export const PropertiesReducer = (state=initState, { type, payload }) => {
    switch(type) {
        case(GET_ALL_PROPS):{
            return {
                allData:payload,
                dispData:payload,
                isError:false,
                isLoading:false
            }
        }
        case(LOADING):{
            return {
                isLoading:true,
                isError:false
            }
        }
        case(ERROR):{
            return {
                isLoading:false,
                isError:true
            }
        }
        case(ROOM_TYPE_FILTER):{
            if(payload.length==0){
                return {
                    ...state, 
                    isLoading:false,
                    isError:false,
                    dispData:state.allData
                }
            }
            let arr = state.allData
            arr = arr.filter(ele=>{
                for(let i=0; i<payload.length; i++){
                    if(ele.room_type.includes(payload[i])){
                        return ele
                    }
                }
            })
            return {
                ...state,
                dispData:arr,
                isLoading:false,
                isError:false
            }
        }
        default: {
            return {
                ...state
            }
        }
    }
}
import { INQUIRY_FAILURE, INQUIRY_LOADING, GET_INQUIRIES, DELETE_INQUIRY } from "./inquiry.types";

const initialState = {
    loading: false,
    error: false,
    data: [],
    totalInquiries:1
}

export const inquiryReducer = (state = initialState, action) => {
    switch (action.type) {
        case INQUIRY_LOADING:{
            return{
                ...state,
                loading:true
            }
        }
        case INQUIRY_FAILURE:{
            return{
                ...state,
                loading:false,
                error:true
            }
        }
        case GET_INQUIRIES:{
            return {
                ...state,
                loading:false,
                data: action.payload.queries,
                totalInquiries: action.payload.total
            }
        }
        case DELETE_INQUIRY:{
            return {
                ...state,
                loading:false
            }
        }
        default:
            return state;
            
    }
}
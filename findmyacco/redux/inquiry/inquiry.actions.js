import { INQUIRY_FAILURE, INQUIRY_LOADING, GET_INQUIRIES, DELETE_INQUIRY } from "./inquiry.types";
import axios from "axios";
import { BACKEND_URL } from "../store";

export const getAllInquiry = (page) => async(dispatch)=>{
    try{
        dispatch({type: INQUIRY_LOADING});
        let res = await axios.get(`${BACKEND_URL}/query/admin/getQueries/${page}`);
        // console.log(res.data);
        dispatch({type: GET_INQUIRIES, payload: res.data});

    }catch(err){
        console.log(err);
        dispatch({type: INQUIRY_FAILURE});
    }
}

export const deleteInquiry = (id) => async(dispatch)=>{
    try{
        dispatch({type: INQUIRY_LOADING});
        let res = await axios.delete(`${BACKEND_URL}/query/admin/deleteQuery/${id}`);
        dispatch({type: DELETE_INQUIRY});
    }catch(err){
        console.log(err);
        dispatch({type: INQUIRY_FAILURE});
    }
}

export const searchInquiries = (text) => async(dispatch)=>{
    try{
        dispatch({type: INQUIRY_LOADING});
        let res = await axios.get(`${BACKEND_URL}/query/admin/searchQuery?query=${text}`);
        dispatch({type: GET_INQUIRIES, payload: res.data});
    }catch(err){
        console.log(err);
        dispatch({type: INQUIRY_FAILURE});
    }
}
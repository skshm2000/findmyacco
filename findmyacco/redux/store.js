import { legacy_createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { inquiryReducer } from './inquiry/inquiry.reducer';
import { SSinquiryReducer } from './SSinquiry/SSinquiry.reducer';
import { PropertiesReducer } from './Properties/Properties.reducer'
import { AuthReducer } from './user/user.reducer';

export const BACKEND_URL = "http://localhost:8080";

let rootReducer = combineReducers({
    user: AuthReducer,
    inquiry: inquiryReducer,
    SSinquiry: SSinquiryReducer,
    PropertiesReducer:  PropertiesReducer
})

let store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export default store;
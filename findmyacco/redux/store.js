import { legacy_createStore, applyMiddleware, combineReducers } from 'redux';

import thunk from 'redux-thunk';
import { inquiryReducer } from './inquiry/inquiry.reducer';
import { SSinquiryReducer } from './SSinquiry/SSinquiry.reducer';
// import { userReducer } from './user/user.reducer';

export const BACKEND_URL = "http://localhost:8080";
// export const BACKEND_URL = "";

let rootReducer = combineReducers({
    // user: userReducer,
    inquiry: inquiryReducer,
    SSinquiry: SSinquiryReducer
})

let store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export default store;
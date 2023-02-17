import React from 'react';
import {Routes,Route} from "react-router-dom"
import Dashboard from '../../components/Admin/Dashboard';
import InquiryTable from '../../components/Admin/InquiryTable';
import Admin from './Admin';
import Homepage from './Homepage';
const Allroutes = () => {
  return (
    <>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path='admin' element={<Admin/>}>
            <Route index element={<Dashboard/>}/>
            <Route path='inquiry' element={<InquiryTable/>}/>
          </Route>
        </Routes>
    </>
  );
}

export default Allroutes;

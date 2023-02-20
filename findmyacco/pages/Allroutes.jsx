import React from 'react';
import {Routes,Route} from "react-router-dom"
import Dashboard from '../components/Admin/Dashboard';
import InquiryTable from '../components/Admin/InquiryTable';
import ScholarshipInquiryTable from '../components/Admin/ScholarshipInquiryTable';
import Admin from './Admin';
import Homepage from './Homepage';
import { Scholarships } from './Scholarships';
const Allroutes = () => {
  return (
    <>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/scholarships" element={<Scholarships />} />
          <Route path='admin' element={<Admin/>}>
            <Route index element={<Dashboard/>}/>
            <Route path='inquiry' element={<InquiryTable/>}/>
            <Route path='scholarshipinquiry' element={<ScholarshipInquiryTable/>}/>
          </Route>
        </Routes>
    </>
  );
}

export default Allroutes;

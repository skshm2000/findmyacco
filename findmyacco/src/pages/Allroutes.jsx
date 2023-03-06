import React from 'react';
import {Routes,Route} from "react-router-dom"
import Dashboard from '../../components/Admin/Dashboard';
import InquiryTable from '../../components/Admin/InquiryTable';
import ScholarshipInquiryTable from '../../components/Admin/ScholarshipInquiryTable';
import Admin from './Admin';
import Homepage from './Homepage';
import { Scholarships } from './Scholarships';
import HostAHome from './HostAHome';
import { SingleCountry } from './SingleCountry';
import { SingleCity } from './SingleCity';
import { Properties } from './Properties';
import SingleAcco from "./SignleAcco"
const Allroutes = () => {
  return (
    <>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/scholarships" element={<Scholarships />} />
          <Route path="/host_a_home" element={<HostAHome />} />
          <Route path="/:country" element={<SingleCountry />} />
          <Route path="/:country/:city" element={<SingleCity />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/properties/room" element={< SingleAcco/>} />
          <Route path='admin' element={<Admin/>}>
            <Route index element={<Dashboard/>}/>
            <Route path='inquiry' element={<InquiryTable/>}/>
            <Route path='scholarship_inquiry' element={<ScholarshipInquiryTable/>}/>
          </Route>
        </Routes>
    </>
  );
}

export default Allroutes;

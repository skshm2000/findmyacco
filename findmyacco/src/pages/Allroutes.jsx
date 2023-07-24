import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./admin-panel/Dashboard";
import InquiryTable from "./admin-panel/InquiryTable";
import ScholarshipInquiryTable from "./admin-panel/ScholarshipInquiryTable";
import Admin from "./admin-panel";
import Homepage from "./homepage";
import { Scholarships } from "./scholarships";
import HostAHome from "./host-a-home";
import { SingleCountry } from "./country";
import { SingleCity } from "./city";
import { Properties } from "./properties";
import SingleAcco from "./single-accomodation";
import Login from "./Login";
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
        <Route path="/properties/room" element={<SingleAcco />} />
        <Route path="/admin/login" element={<Login />} />
        <Route path="admin" element={<Admin />}>
          <Route index element={<Dashboard />} />
          <Route path="inquiry" element={<InquiryTable />} />
          <Route
            path="scholarship_inquiry"
            element={<ScholarshipInquiryTable />}
          />
        </Route>
      </Routes>
    </>
  );
};

export default Allroutes;

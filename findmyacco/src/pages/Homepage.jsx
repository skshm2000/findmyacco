import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/HomepageComponents/Navbar';
import CitiesGrid from '../../components/HomepageComponents/CitiesGrid';
import CountryGrid from '../../components/HomepageComponents/CountryGrid';
const Homepage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <CitiesGrid></CitiesGrid>
    </div>
  );
}

export default Homepage;

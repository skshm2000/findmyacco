import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/HomepageComponents/Navbar';
import CitiesGrid from '../../components/HomepageComponents/CitiesGrid';
import CountryGrid from '../../components/HomepageComponents/CountryGrid';
import { Box } from '@chakra-ui/react';

const Homepage = () => {
  return (
    <Box>
      <CountryGrid></CountryGrid>
      <CitiesGrid></CitiesGrid>
    </Box>
  );
}

export default Homepage;

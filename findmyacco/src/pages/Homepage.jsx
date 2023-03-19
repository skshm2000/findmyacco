import React from "react";
import Navbar from "../../components/HomepageComponents/Navbar";
import CitiesGrid from "../../components/HomepageComponents/CitiesGrid";
import CountryGrid from "../../components/HomepageComponents/CountryGrid";
import { Box } from "@chakra-ui/react";
import Footer from "../../components/HomepageComponents/Footer";

const Homepage = () => {
  return (
    <>
      <Navbar />
      <Box>
        <CountryGrid></CountryGrid>
        <CitiesGrid></CitiesGrid>
      </Box>
      <Footer />
    </>
  );
};

export default Homepage;

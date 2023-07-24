import React from "react";
import CitiesGrid from "./CitiesGrid";
import CountryGrid from "./CountryGrid";
import { Box } from "@chakra-ui/react";

const Homepage = () => {
  return (
    <>
      <Box>
        <CountryGrid></CountryGrid>
        <CitiesGrid></CitiesGrid>
      </Box>
    </>
  );
};

export default Homepage;

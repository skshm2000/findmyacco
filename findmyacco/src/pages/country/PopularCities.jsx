import { Text, Stack, Image, Heading, SimpleGrid } from "@chakra-ui/react";
import loughborough from "./Assets/loughborough.jpg";
import nottingham from "./Assets/nottingham.webp";
import exeter from "./Assets/exeter.jpg";
import leicester from "./Assets/leicester.jpg";
import "./Countries.css";
import SingleCity from "./SingleCountry";

export const PopularCities = ({ name }) => {
  return (
    <>
      <Stack w="80%" m="auto" mt="6%" mb="6%">
        <Heading>
          Popular Cities in {name == "uk" ? "United Kingdom" : name}
        </Heading>
        <SimpleGrid columns={4} gap="16px" justifyContent={"space-between"}>
          <SingleCity
            imageSrc={loughborough}
            cityTitle="Loughborough"
            countryTitle={name}
          />
          <SingleCity
            imageSrc={nottingham}
            cityTitle="Nottingham"
            countryTitle={name}
          />
          <SingleCity
            imageSrc={exeter}
            cityTitle="Exeter"
            countryTitle={name}
          />
          <SingleCity
            imageSrc={leicester}
            cityTitle="Leicester"
            countryTitle={name}
          />
          <SingleCity
            imageSrc={leicester}
            cityTitle="Leeds"
            countryTitle={name}
          />
        </SimpleGrid>
      </Stack>
    </>
  );
};

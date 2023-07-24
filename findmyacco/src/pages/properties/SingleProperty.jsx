import React from "react";
import { Carousel } from "./ImageCarousel.jsx";
import { Heading, Stack, Flex, Button } from "@chakra-ui/react";
import { Address } from "./Address";
import { Facilities } from "./Facilities";
import PriceRange from "./PriceRange";
import { useNavigate } from "react-router-dom";
export const SingleProperty = ({ data }) => {
  const nav = useNavigate();
  return (
    <Stack
      p="4%"
      spacing={"16px"}
      borderRadius={"20px"}
      className="hover:scale-105 transition-all shadow-lg"
    >
      <Heading fontSize={"24px"} textAlign={"left"}>
        {data.address.property_name}
      </Heading>
      <Carousel cards={data.media.photos} />
      <Address address={data.address} />
      <Facilities data={data.facilities} />
      <Stack bgColor={"grey"} h="2px"></Stack>
      <Flex className="items-center">
        <PriceRange data={data.contracts} />
        <Button
          onClick={() => nav(`/properties/room?roomid=${data.property_id}`)}
        >
          Know More
        </Button>
      </Flex>
    </Stack>
  );
};

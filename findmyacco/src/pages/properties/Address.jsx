import {} from "react";
import { Flex, Text } from "@chakra-ui/react";
import { CiLocationOn } from "react-icons/ci";

export const Address = ({ address }) => {
  const { road_name, property_number, city, country } = address;
  return (
    <>
      <div className="flex items-center justify-start gap-2">
        <CiLocationOn size="30px" />
        <Text>{`${property_number}, ${road_name}, ${city}, ${country}`}</Text>
      </div>
    </>
  );
};

import { Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function SingleCity({ imageSrc, cityTitle, countryTitle }) {
  const nav = useNavigate();
  return (
    <Stack
      h="350px"
      borderRadius={"25px"}
      overflow={"hidden"}
      position={"relative"}
      alignItems={"center"}
      onClick={() => {
        nav(`/${countryTitle}/${cityTitle}`);
      }}
      className="hover:cursor-pointer"
    >
      <Image
        className="w-full h-full transition-all hover:scale-125"
        src={imageSrc}
      />
      <Text
        position={"absolute"}
        bottom={"5"}
        color={"white"}
        fontSize={"20px"}
        bgColor="black"
        px="5px"
      >
        {cityTitle}
      </Text>
    </Stack>
  );
}

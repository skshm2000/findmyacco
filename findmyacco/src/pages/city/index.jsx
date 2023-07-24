import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import { Heading, Spinner, Stack, Text } from "@chakra-ui/react";
import { ListItem, UnorderedList } from "@chakra-ui/react";

const API = import.meta.env.VITE_GETLANDLORDS_API;
export const SingleCity = () => {
  const [data, setData] = useState([]);
  let { city } = useParams();
  const nav = useNavigate();

  async function dataGetter() {
    let res = await axios.get(`${API}?city=${city}`);
    let resData = await res.data;

    setData(resData.data);
  }

  useEffect(() => {
    dataGetter();
  }, []);

  return (
    <div className="py-4 px-20">
      <Heading textAlign={"center"}>Choose Accomodation by area</Heading>
      {data.length == 0 && (
        <Stack className="w-full h-[47.55vh] flex items-center justify-center">
          <Spinner size="xl" />
        </Stack>
      )}
      {data.length && (
        <Stack justifyContent={"space-around"} w="30%" ml="50px" mt="30px">
          <UnorderedList>
            {data.map((ele) => (
              <ListItem
                className="hover:cursor-pointer hover:scale-110 transition-all mb-2.5"
                onClick={() => {
                  nav(`/properties?landlord=${ele.landlord}`);
                }}
              >
                <Text fontSize={"20px"}>{ele.title}</Text>
              </ListItem>
            ))}
          </UnorderedList>
        </Stack>
      )}
    </div>
  );
};

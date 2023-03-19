import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import { Heading, Spinner, Stack, Flex, Image, Text } from "@chakra-ui/react";
import Footer from "../../components/HomepageComponents/Footer";
import Navbar from "../../components/HomepageComponents/Navbar";
import { List, ListItem, ListIcon, UnorderedList } from "@chakra-ui/react";

const API = import.meta.env.VITE_GETLANDLORDS_API;
export const SingleCity = () => {
  const [data, setData] = useState([]);
  let { city, country } = useParams();
  const [searchParams] = useSearchParams();
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
    <>
      <Navbar />
      <Heading textAlign={"center"}>Choose Accomodation by area</Heading>
      {data.length == 0 && <Spinner />}
      {data.length && (
        <Stack justifyContent={"space-around"} w="30%" m="auto" mt='30px'>
          <UnorderedList>
            {data.map((ele) => (
              <ListItem
                onClick={() => {
                  nav(`/properties?landlord=${ele.landlord}`);
                }}
              >
                <Text fontSize={'20px'}>{ele.title}</Text>
              </ListItem>
            ))}
          </UnorderedList>
        </Stack>
      )}
      <Footer />
    </>
  );
};

import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Flex, Heading, SimpleGrid, Spinner, Stack } from "@chakra-ui/react";
import { SingleProperty } from "./SingleProperty";
import { useSelector, useDispatch } from "react-redux";
import { GetAllProperties } from "../../redux/Properties/Properties.actions";
import { Sidebar } from "./Sidebar";

export const Properties = () => {
  let [searchParams] = useSearchParams();
  let dispatch = useDispatch();
  let { isLoading, isError, dispData } = useSelector(
    (state) => state.PropertiesReducer,
  );

  useEffect(() => {
    // if(!dispData.length){
    dispatch(GetAllProperties(searchParams.get("landlord")));
    // }
  }, []);

  return (
    <>
      <Flex
        justifyContent={"space-around"}
        mt="20px"
        mb="140px"
        className="h-full"
      >
        <Sidebar />
        {isLoading ? (
          <div className="flex items-center justify-center h-full w-full">
            <Spinner size="xl" />
          </div>
        ) : (
          <SimpleGrid columns={"3"} w={"72%"} gap={"3%"}>
            {dispData?.length
              ? dispData.map((ele) => <SingleProperty data={ele} />)
              : null}
            {isError ? (
              <Heading color="red">Something went wrong</Heading>
            ) : null}
          </SimpleGrid>
        )}
      </Flex>
    </>
  );
};

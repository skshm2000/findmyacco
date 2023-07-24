import { useParams } from "react-router-dom";
import { Hero } from "./Hero";
import { PopularCities } from "./PopularCities";

export const SingleCountry = () => {
  let { country } = useParams();

  return (
    <>
      <Hero name={country} />
      <PopularCities name={country} />
    </>
  );
};

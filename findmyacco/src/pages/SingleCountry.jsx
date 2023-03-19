import { useLocation, useParams, useSearchParams } from "react-router-dom";
import { Hero } from "../../components/CountryPageComponents/Hero";
import { PopularCities } from "../../components/CountryPageComponents/PopularCities";
import Footer from "../../components/HomepageComponents/Footer";
import Navbar from "../../components/HomepageComponents/Navbar";

export const SingleCountry = () => {
  let { country } = useParams();

  return (
    <>
      <Navbar />
      <Hero name={country} />
      <PopularCities name={country} />
      <Footer />
    </>
  );
};

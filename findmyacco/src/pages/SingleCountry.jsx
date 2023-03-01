import { useLocation, useParams, useSearchParams } from 'react-router-dom'
import { Hero } from '../../components/CountryPageComponents/Hero'
import { PopularCities } from '../../components/CountryPageComponents/PopularCities'

export const SingleCountry = () => {
  let { country } = useParams()

  return (
    <>
        <Hero name={country} />
        <PopularCities name={country}/>
    </>
  )
}

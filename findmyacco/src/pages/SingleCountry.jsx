import { useLocation, useParams, useSearchParams } from 'react-router-dom'
import { Hero } from '../../components/CountryPageComponents/Hero'
import { PopularCities } from '../../components/CountryPageComponents/PopularCities'

export const SingleCountry = () => {
  let [ search ] = useSearchParams()
  return (
    <>
        <Hero name={search.get('name')} />
        <PopularCities name={search.get('name')}/>
    </>
  )
}

import { Hero } from '../../components/ScholarshipsComponents/Hero'
import { OtherServices } from '../../components/ScholarshipsComponents/OtherServices'
import { EmbarkYourJourney } from '../../components/ScholarshipsComponents/EmbarkYourJourney'
import { FutureInYourHands } from '../../components/ScholarshipsComponents/FutureInYourHands'
import { Register } from '../../components/ScholarshipsComponents/Register'
import { RRR } from '../../components/ScholarshipsComponents/RRR'
import { FAQs } from '../../components/ScholarshipsComponents/FAQs'
import { useEffect } from 'react'

export const Scholarships = () => {

  useEffect(()=>{
    scrollTo(0,0)
  }, [])
  return (
    <>
        <Hero />
        <OtherServices/>
        <EmbarkYourJourney/>
        <FutureInYourHands/>
        <Register/>
        <RRR/>
        <FAQs/>
    </>
  )
}

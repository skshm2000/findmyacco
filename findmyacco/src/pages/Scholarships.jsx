import { Hero } from '../../components/ScholarshipsComponents/Hero'
import { HeroOnTop } from '../../components/ScholarshipsComponents/HeroOnTop'
import { OtherServices } from '../../components/ScholarshipsComponents/OtherServices'
import { EmbarkYourJourney } from '../../components/ScholarshipsComponents/EmbarkYourJourney'
import { FutureInYourHands } from '../../components/ScholarshipsComponents/FutureInYourHands'
import { Register } from '../../components/ScholarshipsComponents/Register'
import { RRR } from '../../components/ScholarshipsComponents/RRR'
import { FAQs } from '../../components/ScholarshipsComponents/FAQs'

export const Scholarships = () => {
  return (
    <>
        <Hero />
        <HeroOnTop/>
        <OtherServices/>
        <EmbarkYourJourney/>
        <FutureInYourHands/>
        <Register/>
        <RRR/>
        <FAQs/>
    </>
  )
}

import { Hero } from "../scholarships/Hero";
import { OtherServices } from "../scholarships/OtherServices";
import { EmbarkYourJourney } from "../scholarships/EmbarkYourJourney";
import { FutureInYourHands } from "../scholarships/FutureInYourHands";
import { Register } from "../scholarships/Register";
import { RRR } from "../scholarships/RRR";
import { FAQs } from "../scholarships/FAQs";
import { useEffect } from "react";

export const Scholarships = () => {
  useEffect(() => {
    scrollTo(0, 0);
  }, []);
  return (
    <>
      <Hero />
      <OtherServices />
      <EmbarkYourJourney />
      <FutureInYourHands />
      <Register />
      <RRR />
      <FAQs />
    </>
  );
};

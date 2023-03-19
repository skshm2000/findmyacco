import Footer from "../../components/HomepageComponents/Footer";
import Navbar from "../../components/HomepageComponents/Navbar";
import HAHForm from "../../components/HostAHomeComponents/HAHForm";
import { Hero } from "../../components/HostAHomeComponents/Hero";

export default function HostAHome() {
    return (
        <>
        <Navbar />
        <Hero />
        <HAHForm />
        <Footer/>
        </>
    )
}
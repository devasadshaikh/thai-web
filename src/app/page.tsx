import Image from "next/image";
import HomePage from "./hero-section/page";
import About from "./about/page";
import ContactPage from "./contact-us/page";
import Blogs from "./blogs/page";
export default function Home() {
  return (
    <>
    <HomePage/>
    <About/>
    <ContactPage/>
    <Blogs/>
    </>
  );
}

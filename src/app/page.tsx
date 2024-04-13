import Image from "next/image";
import Hero from "./components/Hero";
import About from "./components/About";
import Classes from "./components/Classes";
import Team from "./components/Team";
import Prices from "./components/Prices";
import Testimonial from "./components/Testimonial";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Membership from "./components/Membership";
import Brands from "./components/Brands";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="">
      <Hero/>
      <About/>
      <Classes/>
      <Team/>
      <Membership/>
      {/* <Prices/> */}
      <Testimonial/>
      <Blog/>
      <Brands/>
      <Footer/>
      

      <div className="h-[2000px]"></div>
    </main>
  );
}

import Image from "next/image";
import Topsection from "@/components/landing/Topsection";
import Hero from "@/components/landing/Hero";
import OurStory from "@/components/landing/OurStory";
import Tradition from "@/components/landing/Tradition";
import Info from "@/components/landing/Info";
import Town from "@/components/landing/Town";
import Comment from "@/components/landing/Comment";
import Testimonial from "@/components/landing/TestimonialCarousel";
import Reserve from "@/components/landing/Reservation";
import Contact from "@/components/landing/Contact";
import Foot from "@/components/landing/Footer";


export default function Home() {
  return (
    <div className="">
      <Topsection></Topsection>
      <Hero></Hero>
      <OurStory></OurStory>
      <Tradition></Tradition>
      <Info></Info>
      {/* <Town></Town> */}
      {/* <Comment></Comment> */}
      <Testimonial></Testimonial>
      <Reserve></Reserve>
      <Contact></Contact>
      <Foot></Foot>
    </div>
  );
}


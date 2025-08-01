import Image from "next/image";
import Topsection from "@/components/landing/Topsection";
import Hero from "@/components/landing/Hero";
import OurStory from "@/components/landing/OurStory";
import Tradition from "@/components/landing/Tradition";
import Info from "@/components/landing/Info";

export default function Home() {
  return (
    <div className="">
      <Topsection></Topsection>
      <Hero></Hero>
      <OurStory></OurStory>
      <Tradition></Tradition>
      <Info></Info>
    </div>
  );
}


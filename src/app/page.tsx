import AlternatingText from "@/slides/alternatingText/AlternatingText";
import BigText from "@/slides/bigText/BigText";
import Carousel from "@/slides/carousel/Carousel";
import Hero from "@/slides/hero/Hero";
import SkyDive from "@/slides/skydive/SkyDive";

export default function Home() {
  return (
    <>
    <div className="px-4 md:px-6">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center">
        <Hero/>
      </div>
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center h-[300vh] overflow-hidden">
        <SkyDive/>
      </div>
    </div>
    <Carousel/>
    <AlternatingText/>
    <BigText/>
    </>
  )
}
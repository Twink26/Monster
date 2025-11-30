"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { View } from "@react-three/drei";

import { TextSplitter } from "@/components/TextSplitter";
import Scene from "./Scene";
import { Bubbles } from "./Bubbles";
import { useStore } from "@/hooks/useStore";
import { useMediaQuery } from "@/hooks/useMediaQuery";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Hero(){
  const ready = useStore((state) => state.ready);
  const isDesktop = useMediaQuery("(min-width: 768px)", true);

  useGSAP(
    () => {
      if (!ready && isDesktop) return;

      const introTl = gsap.timeline();

      introTl
        .set(".hero", { opacity: 1 })
        .from(".hero-header-word", {
          scale: 3,
          opacity: 0,
          ease: "power4.in",
          delay: 0.3,
          stagger: 1,
        })
        .from(
          ".hero-subheading",
          {
            opacity: 0,
            y: 30,
          },
          "+=.8",
        )
        .from(".hero-body", {
          opacity: 0,
          y: 10,
        })
        .from(".hero-button", {
          opacity: 0,
          y: 10,
          duration: 0.6,
        });

      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "bottom bottom",
          scrub: 1.5,
        },
      });

      scrollTl
        .from(".text-side-heading .split-char", {
          scale: 1.3,
          y: 40,
          rotate: -25,
          opacity: 0,
          stagger: 0.1,
          ease: "back.out(3)",
          duration: 0.5,
        })
        .from(".text-side-body", {
          y: 20,
          opacity: 0,
        });
    },
    { dependencies: [ready, isDesktop] },
  );

  return (
    <div
      className="hero opacity-0"
      >
      {isDesktop && (
        <View className="hero-scene pointer-events-none sticky top-0 z-50 -mt-[100vh] hidden h-screen w-screen md:block">
          <Scene />
          <Bubbles count={300} speed={2} repeat={true} />
        </View>
      )}

      <div className="grid bg-black">
        <div className="grid h-screen place-items-center">
          <div className="grid auto-rows-min place-items-center text-center">
            <h1 className="hero-header text-6xl font-extrabold uppercase leading-[.8] text-orange-500 md:text-[8rem] lg:text-[10rem] pt-24">
              <TextSplitter
                text="Unleash the"
                wordDisplayStyle="block"
                className="hero-header-word"
              />
              <TextSplitter
                text="Beast"
                wordDisplayStyle="block"
                className="hero-header-word text-[#90ED27]"
              />
            </h1>
            <h2 className="hero-subheading mt-8 text-5xl font-semibold text-white lg:text-6xl">
              Ultimate Energy
            </h2>
            <p className="hero-body text-2xl font-normal text-white">
              Full Throttle. Maximum Energy
            </p>
            <button
              className="rounded-xl px-5 py-4 text-center text-xl font-bold uppercase tracking-wide text-black transition-colors duration-150 hover:bg-orange-700 md:text-2xl hero-button mt-8 bg-[#90ED27]"
            >Fuel up</button>
          </div>
        </div>

        <div className="text-side relative z-[80] grid h-screen items-center gap-4 md:grid-cols-2 px-12">
          <img
            src="all-cans-bunched.png"
            alt="#"
            className="w-full md:hidden"
          />
          <div>
            <h2 className="text-side-heading text-balance text-6xl font-extrabold uppercase text-[#90ED27] lg:text-8xl">
              <TextSplitter text="Try all five flavours" />
            </h2>
            <p className="text-side-body mt-4 max-w-xl text-balance text-xl font-normal text-neutral-300">
              Our soda is made with real fruit juice and a touch of cane sugar. We never use artificial sweeteners or high fructose corn syrup. Try all five flavors and find your favorite!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
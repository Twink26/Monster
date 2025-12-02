"use client";
import { View } from "@react-three/drei";
import Scene from "./Scene";
import clsx from "clsx";


export default function AlternatingText(){

  const data = [
    {
      "h1":"Gut-Friendly Goodness",
      "h2":"Our soda is packed with prebiotics and 1 billion probiotics, giving your gut the love it deserves. Say goodbye to bloating and hello to a happy, healthy digestive system with every sip."
    },
    {
      "h1":"Light Calories, Big Flavor",
      "h2":"Indulge in bold, refreshing taste without the guilt. At just 20 calories per can, you can enjoy all the flavor you crave with none of the compromise."
    },
    {
      "h1":"Naturally Refreshing",
      "h2":"Made with only the best natural ingredients, our soda is free from artificial sweeteners and flavors. It's a crisp, clean taste that feels as good as it tastes, giving you a boost of real, natural refreshment."
    }
  ]
  return (
    <div
      className="alternating-text-container relative bg-black text-[#90ED27] px-12"
    >
      <div>
        <div className="relative z-10 grid">
          <View className="alternating-text-view absolute left-0 top-0 h-screen w-full">
            <Scene />
          </View>

          {data.map((item, index) => (
            <div
              key={index}
              className="alternating-section grid h-screen place-items-center gap-x-12 md:grid-cols-2"
            >
              <div
                className={clsx(
                  index % 2 === 0 ? "col-start-1" : "md:col-start-2",

                  "rounded-lg p-4 backdrop-blur-lg max-md:bg-white/30",
                )}
              >
                <h2 className="text-balance text-8xl font-bold">
                  {item.h1}
                </h2>
                <div className="mt-4 text-2xl text-gray-500">
                  {item.h2}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
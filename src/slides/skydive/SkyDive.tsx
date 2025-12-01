"use client";
import Scene from "./Scene";
import { View } from "@react-three/drei";


export default function SkyDive(){
  return (
    <div
      className="skydive h-screen"
    >
      <h2 className="sr-only">Unleash the beast</h2>
      <View className="h-screen w-screen">
        <Scene
          flavor="lemonLime"
          sentence="Dive into the Reality"
        />
      </View>
    </div>
  );
};
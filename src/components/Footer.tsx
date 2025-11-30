import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-t from-[#90ED27]/20 to-black">
      <div className="flex w-full justify-between items-center p-8 relative">
        <p className="text-2xl font-semibold text-lime-500 uppercase">Twinkle Rana</p>
        <img src="/logo.png" className="z-10 h-20 corsor-pointer" alt="" />
        <a href="" target="_blank">
          <img src="github-sign.png" className="w-12 h-12" alt="" />
        </a>
      </div>
    </footer>
  );
}
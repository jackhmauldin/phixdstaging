"use client";

import Image from "next/image";
import { Typography } from "@material-tailwind/react";
import Contact from "../components/contact";

let herotext =
  "I'm an experienced Automotive Technician with over two years at Chloe's Auto Repair, where I specialize in diagnosing and repairing a wide range of vehicle systems. I hold CTI certifications and have a deep understanding of modern automotive components, including engines, transmissions, advanced electrical systems, and diagnostics. I take pride in delivering reliable and efficient service every day. Whether it's routine maintenance or complex troubleshooting, I’m committed to keeping cars safe, efficient, and on the road.";

function Hero() {
  return (
    <header className="bg-gray-900 mb-96">
      <div className="container mx-auto px-8 h-[14rem] lg:px-48 translate-y-24">
        <div className="flex justify-between">
          <Image
            width={1700}
            height={1700}
            alt="avatar"
            src="/image/jack-headshot.jpg"
            className="w-52 rounded-xl"
          />
          <Contact />
        </div>
        <div className="flex mt-16 justify-between">
          <Typography variant="h5" className="text-3xl">
            Jack Mauldin
          </Typography>
        </div>

        <Typography variant="lead" className="!text-gray-500 mt-8">
          {herotext}
        </Typography>
      </div>
    </header>
  );
}
export default Hero;

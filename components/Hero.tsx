'use client';
import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import Image from 'next/image';

const Hero = () => {
  return (
    <div className="relative min-h-screen w-full flex flex-col justify-between mb-8">
      {/* Spotlight effects */}
      <div className="absolute inset-0 overflow-hidden">
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20"
          fill="white"
        />
        <Spotlight
          className="top-20 -right-10 md:-right-32 md:-top-20"
          fill="white"
        />
        <Spotlight className="top-28 -left-80 h-1/2 w-2/3" fill="white" />
      </div>

      {/* Background */}
      <div className="absolute inset-0 dark:bg-black-100 bg-gray-100 dark:bg-grid-white/[0.05] bg-grid-black/[0.02]">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-gray-900 bg-gray-300 dark:[mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] [mask-image:radial-gradient(ellipse_at_center,transparent_50%,white)]" />
      </div>

      {/* Content */}
      <div className="relative z-20 flex flex-col justify-start items-start px-5 lg:pt-24 lg:px-32 flex-grow">
        <h2 className="uppercase tracking-widest text-xs text-left dark:text-blue-100 text-blue-950 max-w-80">
          {/* {t("Hero.welcome")} */}
        </h2>
        <TextGenerateEffect
          className="text-left text-2xl md:text-5xl lg:text-6xl max-w-3xl mt-24"
          words="Hi, I am Marco, a Web Developer, 3D Artist and Video Producer."
        />
        <p className="text-left dark:text-white text-gray-600 md:tracking-wider mb-4 text-sm md:text-lg lg:text-lg">
          Technology enthusiast with a passion for learning and creating.
        </p>
        <a href="#about" className="relative z-10">
          <MagicButton
            title="Learn more about me"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>

      {/* Image */}
      <div className="relative w-full">
        <div className="absolute bottom-0 right-0 lg:w-96 w-64 md:w-72 z-20">
          <Image
            src="/resources/Marco_2.png"
            alt="Marco Tylus"
            width={300}
            height={300}
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
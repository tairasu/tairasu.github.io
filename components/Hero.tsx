'use client';
import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import Image from 'next/image';



const Hero = () => {


  return (
    <div className="pt-36 pb-96 lg:pb-40">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          //coming from the top right
          className="top-20 -right-10 md:-right-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight className="top-28 -left-80 h-1/2 w-2/3" fill="white" />
      </div>

      <div className="h-screen w-full dark:bg-black-100 bg-gray-100  dark:bg-grid-white/[0.05] bg-grid-black/[0.02] flex items-center justify-center absolute top-0 left-0">
        {/* Radial gradient for the container to give a faded look */}

        {/* <div className="flex border w-full lg:h-60 h-full sm:flex-col justify-center items-center"> */}

        <div className="">
          <div className="flex justify-end items-end lg:w-full h-auto w-52 mx-auto absolute right-0 bottom-0 z-10">
            <Image
              src="/resources/Marco_2.png"
              alt="Marco Tylus"
              className="lg:w-96 w-64 md:w-72 h-auto"
              width={300}
              height={300}
            />
          </div>
        </div>

        {/* </div> */}

        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-gray-900 bg-gray-300 dark:[mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] [mask-image:radial-gradient(ellipse_at_center,transparent_50%,white)]" />
      </div>

      <div className="flex justify-center lg:justify-start relative my-20 z-10">
        <div className="max-w-7xl w-full md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center lg:items-start justify-center lg:ml-32">
          <h2 className="uppercase tracking-widest text-xs text-left dark:text-blue-100 text-blue-950 max-w-80">
            Welcome
          </h2>
          <TextGenerateEffect
            className="text-left text-2xl md:text-5xl lg:text-6xl max-w-3xl"
            words="Hi, I am Marco, a Web Developer, 3D Artist and Video Producer."
          />

          <p className="text-left dark:text-white text-gray-600 md:tracking-wider mb-4 text-sm md:text-lg lg:text-lg">
            Technology enthusiast with a passion for learning and creating.
          </p>

          <a href="#about" className="relative">
            <MagicButton
              title="Learn more about me"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;

'use client';

import { cn } from "@/utils/cn";
import { BackgroundGradientAnimation } from "./GradientBg";
import { GlobeDemo } from "./GridGlobe";
import dynamic from "next/dynamic";
// import Lottie from "lottie-react";
import { useState } from "react";
import animationData from '@/data/confetti.json';
import MagicButton from "./MagicButton";
import { IoCopyOutline } from "react-icons/io5";
import Image from 'next/image';

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  list,
  img,
  imgClassName,
  titleClassName,
  spareImg,
  id
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  list?: any;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id?: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {

const [copied, setCopied] = useState(false);


const handleCopy = () => {
  navigator.clipboard.writeText('marco@tylus.dev');
  setCopied(true);
  setTimeout(() => {
    setCopied(false);
  }, 2000);
}

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none dark:border-white/[0.15] dark:bg-gray-800 bg-gray-100 border border-transparent justify-between flex flex-col space-y-4",
        className
      )}
    >
      <div className={`${id === 6 && 'flex justify-center'} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <Image
              src={img}
              alt={img}
              width={300}
              height={300}
              className={cn(imgClassName, "object-cover, object-center")}
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${
            id === 5 && "w-full opacity-80"
          }`}
        >
          {spareImg && (
            <Image
              src={spareImg}
              alt={spareImg}
              fill={true}
              className={"object-cover, object-center w-full h-full"}
            />
          )}
        </div>

        <div>
          {id === 6 && (
            <BackgroundGradientAnimation>
              <div className="absolute z-50 flex items-center justify-center dark:text-white text-gray-700 font-bold" />
            </BackgroundGradientAnimation>
          )}
          <div
            className={cn(
              titleClassName,
              "group-hover/bento:scale-[1.02] transition duration-500 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
            )}
          >
            {id !== 1 && (
              <div className="font-sans font-light text-orange-900 text-xs dark:text-indigo-100 lg:text-base z-10">
              {description}
            </div>)}
            
            <div className="font-sans dark:text-white text-gray-900 font-bold text-lg lg:text-3xl py-4 max-w-96 z-10">
              {title}
            </div>


            <div className="flex flex-col gap-2">
  {list.map((item: { id: number; title: string; description: string; year: string; link: string;}) => (
    // Move the key prop to the <a> tag, which is the direct child in the list
    <a href={item.link} target="_blank" key={item.id}>
      <div
        className={cn(
          "flex flex-col gap-2 p-2 dark:bg-[#10132E] bg-transparent dark:border-white/[0.15] border-gray-800/10 hover:dark:bg-gray-600 hover:bg-white/75 hover:scale-[1.02] duration-200 rounded-lg dark:shadow-inner hover:shadow-lg h-fit"
        )}
      >
        <div className="flex justify-between">
            <h1 className="font-bold text-md lg:text-lg dark:text-orange-50 text-orange-950">{item.title}</h1>
          <p className="font-light text-sm lg:text-md dark:text-orange-50 text-orange-900">{item.year}</p>
        </div>
        <p className="font-light text-sm lg:text-md dark:text-orange-100 text-orange-950">{item.description}</p>
        
      </div>
    </a>
  ))}
</div>



          

          {id === 2 && <GlobeDemo />}


          {id === 3 && (
            <div className="flex gap-1 lg:gap-4 w-fit absolute -right-3 lg:-right-2">
              <div className="flex flex-col gap-2 lg:gap-4">
                {[
                  "React.js",
                  "Next.js",
                  "TailwindCSS",
                  "Wordpress",
                ].map((item) => (
                  <span
                    key={item}
                    className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}
                <span className="py-4 px-3 rounded-lg text-center bg-[#10132e]"/>
              </div>
              <div className="flex flex-col gap-2 lg:gap-4">
              <span className="py-4 px-3 rounded-lg text-center bg-[#10132e]"/>
                {[
                  "PHP",
                  "Rust",
                  "Python",
                  "Javascript"
                ].map((item) => (
                  <span
                    key={item}
                    className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}
                
              </div>
              
            </div>
          )}

          {id === 6 && (
            <div className="mt-5 relative">
              <div className={`absolute -bottom-5 right-0`}>
              <Lottie
                loop={copied} 
                autoplay={copied}
                animationData={animationData} 
                />
              </div>
              <MagicButton 
              title={copied ? 'Copied!' : 'Copy my E-Mail'}
              icon={<IoCopyOutline />}
              position='left'
              otherClasses="!bg-[#161a31]"
              handleClick={handleCopy}
              />
            </div>
          )}
        </div>
      </div>

      <div className="group-hover/bento:scale-[1.02] transition duration-500"></div>
    </div>
    </div>
  );
};

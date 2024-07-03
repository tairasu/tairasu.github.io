'use client';
import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'
import { socialMedia } from '@/data'
import Image from 'next/image';



const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10 px-5" id="contact">
        <div className="w-full absolute bottom-0 left-0">
            <Image
                src="/footer-grid.svg"
                alt="grid"
                className="w-full h-full opacity-25 dark:invert-0 invert"
                width={1920}
                height={1080}
            />
        </div>

        <div className="flex flex-col items-center">
            <h1 className="heading leading-3 dark:text-white text-gray-800 lg:max-w-[45vw]">
                Contact me to get <span className="dark:text-orange-200 text-orange-400">your</span> project started
            </h1>
            <p className="py-8 dark:text-white text-gray-800 text-center">
                Need IT assistance? Set up a server? Or just need a website for your business? Let&apos;s get in touch!
            </p>
            <a href="mailto:marco@tylus.dev">
                <MagicButton title="Contact Me" icon={<FaLocationArrow />} position='right' />
            </a>

            {/* social media links from index.ts data */}
            <div className="flex gap-4 mt-10">
                {socialMedia.map((profile) => (
                    <a 
                        key={profile.link} // Added key prop here
                        href={profile.link}
                        target="_blank"
                        className="relative flex space-x-2 items-center z-10 rounded-xl bg-zinc-950 hover:scale-125 hover:shadow-lg duration-300 p-4 ring-1 ring-white/10"
                    >
                        <Image src={profile.img} alt={profile.img} className="w-6 h-6" width={60} height={60} />
                        <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] duration-500 group-hover/btn:opacity-40"></span>
                    </a>
                ))}
            </div>

            {/* copyright 2024 Marco Tylus */}
            <div className="text-xs text-gray-400 mt-10">
                &copy; 2024 Marco Tylus
            </div>
        </div>
    </footer>
  )
}

export default Footer
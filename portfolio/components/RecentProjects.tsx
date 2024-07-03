'use client';
import React from 'react'
import { projects } from '@/data'
import { PinContainer } from './ui/3d-pin'
import { FaLocationArrow } from 'react-icons/fa'
import Image from 'next/image';



export const RecentProjects = () => {
  return (
    <div id="projects" className="py-20">
        <h1 className="heading dark:text-white text-gray-800">
            A selection of my {' '}
            <span className="dark:text-orange-200 text-orange-400">recent projects</span>
            <div className="flex flex-wrap justify-center items-center p-4 gap-x-24 mt-10">
                {projects.map(({id, title, des, img, iconLists, link}
                ) => (
                    <div key={id} className="lg:min-h-[32.5rem] sm:w-[570px] sm:h-[41rem] h-[32rem] flex items-center justify-center w-[80vw]">
                        <PinContainer title={link} href={link}>
                        <div className='relative flex items-center justify-center sm:w-[570px] w-[80vw] sm:h-[40vh] overflow-hidden h-[30vh] mb-10'>
                            <div className='dark:block hidden relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]'>
                                <Image src='/bg.png' alt='bg-img' className="w-full h-full" fill={true} />
                            </div>
                            <Image src={img} alt={title} className='z-10 absolute bottom-0 rounded-md' width={1200} height={600} />
                        </div>
                        <h1 className='font-bold lg:text-2xl md:text-xl text-base line-clamp-1'>
                            {title}
                        </h1>
                        <p className='lg:text-xl lg:font-normal font-light text-sm line-clamp-2'>
                            {des}
                        </p>

                        <div className='flex items-center justify-between mt-7 mb-3'>
                            <div className='flex items-center'>
                                {iconLists.map((icon, index) => (
                                    <div key={icon} className='border border-white/20 rounded-full dark:bg-black bg-gray-700 shadow-md lg:w-10 lg:h-10 h-8 w-8 flex justify-center items-center'
                                    style={{
                                        transform: `translateX(-${5 * index * 2}px)`}}
                                    >
                                        <Image src={icon} alt={icon} className='p-2' fill={true} />
                                    </div>
                                ))}
                            </div>
                                <div className='flex justify-center items-center'>
                                    <p className='flex lg:text-lg md:text-xs text-sm dark:text-orange-200 text-orange-400'>Check Site</p>
                                    <FaLocationArrow className='ms-3 w-6 h-6' color='#fed7aa' />
                                </div>

                        </div>
                        </PinContainer>
                        
                    </div>
                ))}
            </div>
        </h1>
    </div>
  )
}

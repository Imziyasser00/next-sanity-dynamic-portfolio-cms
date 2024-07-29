import { getLogo, urlFor } from '@/libs/sanity'
import Image from 'next/image';
import React from 'react'

  

export default async function Navbar(){
    const logo = await getLogo();
  return (
    <div className='w-full hidden md:flex justify-between p-4 px-6 items-center shadow-lg z-20'>
        <Image src={urlFor(logo.logo).url()} alt={logo.logoName} width={200} height={400} className='p-2' />
        <div className='flex gap-10 text-xl'>
            <a href='#home' className='text-purple-100 font-bold'>Home</a>
            <a href='#projects'>Portfolio</a>
            <a href='#about'>About me</a>
            <a href='#testimonials'>Testimonials</a>
        </div>
        <a href="#contact" className='border px-6 mx-4 py-3 border-2 rounded-sm border-purple-100 text-purple-100 font-bold'>
            Contact Me
        </a>
    </div>
  )
}



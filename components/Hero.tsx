import React from 'react'
import Navbar from './Navbar'
import { getHero, urlFor } from '@/libs/sanity'
import Image from 'next/image';

const Hero = async () => {
  const heroData = await getHero();
  console.log(heroData.heroImage);
  return (
    <div id='home' className='w-full min-h-[100vh] flex flex-col'>
       <Navbar />
       <div className='w-full flex flex-col lg:flex-row flex-grow bg-gray-100'>
        <div className='w-full lg:w-1/2 flex flex-col h-full  mt-16 lg:mt-52'>
        <div className='w-3/4 mx-auto flex flex-col gap-8 text-heading-100'>
          <div className='font-bold'>
            {heroData.text1}
          </div>
          <div className='text-6xl font-bold'>
            {heroData.text2}
          </div>
          <div className='font-medium text-body-100'>
            {heroData.text3}
          </div>
          <div className='mt-10'>

          <a href='#contact' className='font-medium rounded-lg text-white py-4 px-6 bg-purple-100'>
            {heroData.buttonText}
          </a>
          </div>
        </div>
        </div>
        <div className='w-full lg:w-1/2 flex justify-center mt-10 md:mt-0 items-center'>
          <Image src={urlFor(heroData.heroImage).url()} alt={heroData.imageTitle} width={800} height={250} />
        </div>
       </div>
    </div>
  )
}

export default Hero

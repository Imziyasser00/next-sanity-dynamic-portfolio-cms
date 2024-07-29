import { getSkills, urlFor } from '@/libs/sanity'
import React from 'react'
import Image from 'next/image';

const Skills = async () => {
    const skills = await getSkills();
    return (
    <div className='w-full p-24'>
        <div className='text-heading-100 font-bold text-md'>
            {skills.text1}
        </div>
        <div className='text-heading-100 text-5xl font-bold pt-8'>
            {skills.text2}
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-8 md:gap-16 mt-24'>
            <div className='bg-gray-100 p-8 flex flex-col gap-4'>
                <Image src={urlFor(skills.skill1icon).url()} alt='skill1' width={100} height={300}/>
                <div className='text-2xl font-bold text-heading-100'>
                    {skills.skill1title}
                </div>
                <div className='text-body-100'>
                    {skills.skill1description}
                </div>
            </div>
            <div className='bg-gray-100 p-8 flex flex-col gap-4'>
                <Image src={urlFor(skills.skill2icon).url()} alt='skill2' width={100} height={300}/>
                <div className='text-2xl font-bold text-heading-100'>
                    {skills.skill2title}
                </div>
                <div className='text-body-100'>
                    {skills.skill2description}
                </div>
            </div>
            <div className='bg-gray-100 p-8 flex flex-col gap-4'>
                <Image src={urlFor(skills.skill3icon).url()} alt='skill3' width={100} height={300}/>
                <div className='text-2xl font-bold text-heading-100'>
                    {skills.skill3title}
                </div>
                <div className='text-body-100'>
                    {skills.skill3description}
                </div>
            </div>
             <div className='bg-gray-100 p-8 flex flex-col gap-4'>
                <Image src={urlFor(skills.skill4icon).url()} alt='skill4' width={100} height={300}/>
                <div className='text-2xl font-bold text-heading-100'>
                    {skills.skill4title}
                </div>
                <div className='text-body-100'>
                    {skills.skill4description}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills

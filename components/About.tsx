import { getAbout, urlFor } from "@/libs/sanity";
import Image from "next/image";
import React from "react";

const About = async () => {
  const about = await getAbout();
  console.log(about);
  return (
    <div id="about" className="w-full flex flex-col lg:flex-row p-24">
      <div className="w-full lg:w-1/2 flex justify-center items-center mx-auto">
        <Image
          src={urlFor(about.aboutImage).url()}
          alt={about.imageTitle}
          width={600}
          height={150}
        />
      </div>
      <div className="w-full lg:w-1/2 text-heading-100 flex flex-col justify-center">
        <div className="font-bold">{about.text1}</div>
        <div className="font-bold text-5xl mt-6">{about.text2}</div>
        <div className="mt-10 text-body-100 text-xl w-4/5">
            {about.aboutBio}
        </div>
      </div>
    </div>
  );
};

export default About;

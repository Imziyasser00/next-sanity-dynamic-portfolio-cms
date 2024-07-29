import { getFooter, getLogo, urlFor } from "@/libs/sanity";
import Image from "next/image";
import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareDribbble } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const Footer = async () => {
  const logo = await getLogo();
  const footer = await getFooter();
  console.log(footer);
  return (
    <div className="w-full flex flex-col xl:flex-row gap-10 py-10 hidden md:flex justify-between p-4 px-6 items-center shadow-lg z-20 bg-gray-100 p-4">
      <Image
        src={urlFor(logo.logo).url()}
        alt={logo.logoName}
        width={200}
        height={400}
        className="p-2"
      />
      <div className="flex gap-10 text-xl">
        <a href={footer.facebook}>
          <FaFacebookSquare className="text-purple-100 text-4xl" />{" "}
        </a>
        <a href={footer.dribbble}>
          <FaSquareDribbble className="text-purple-100 text-4xl" />{" "}
        </a>
        <a href={footer.linkedin}>
          <FaLinkedin className="text-purple-100 text-4xl" />{" "}
        </a>
        <a href={footer.instagram}>
          <RiInstagramFill className="text-purple-100 text-4xl" />{" "}
        </a>
      </div>
    </div>
  );
};

export default Footer;

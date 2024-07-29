import { getConatct, urlFor } from "@/libs/sanity";
import React from "react";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { PiDribbbleLogoFill } from "react-icons/pi";
import Image from "next/image";

const Contact = async () => {
  const contact = await getConatct();
  return (
    <div className=" mb-40 my-20 flex flex-col justify-center items-center gap-10 w-full" id="contact">
      <div className="text-6xl font-bold text-heading-100">{contact.text1}</div>
      <div className="text-xl text-heading-100 w-4/5 text-center">{contact.text2}</div>
      <div className="w-4/5 xl:w-3/5 mt-10 mx-auto flex flex-col xl:flex-row rounded-lg overflow-hidden">
        <div className="w-full xl:w-1/2">
            <Image alt="conatct image" src={urlFor(contact.contactImage).url()} width={400} height={100} className="w-full h-full" />
        </div>
      <div className="w-full xl:w-1/2 py-10 xl:py-0 bg-gray-100 shadow-lg flex justify-center xl:pl-10 flex-col gap-12">
        <div className="flex items-center gap-4  text-purple-100">
          <div className=" p-5 rounded-xl">
            <MdOutlineAlternateEmail className="text-4xl" />
          </div>
          <span className="font-bold text-lg  xl:text-xl">{contact.email}</span>
        </div>
        <div className="flex items-center gap-4  text-purple-100">
          <div className=" p-5 rounded-xl">
            <FaPhone className="text-4xl" />
          </div>
          <span className="font-bold text-lg  xl:text-xl">{contact.phone}</span>
        </div>
        <div className="flex items-center gap-4  text-purple-100">
          <div className=" p-5 rounded-xl">
            <FaLinkedin className="text-4xl" />
          </div>
          <span className="font-bold text-lg  xl:text-xl">{contact.linkedIn}</span>
        </div>
        <div className="flex items-center gap-4  text-purple-100">
          <div className=" p-5 rounded-xl">
            <PiDribbbleLogoFill className="text-4xl" />
          </div>
          <span className="font-bold text-lg  xl:text-xl">{contact.dribbble}</span>
        </div>
      </div>
      </div>

    </div>
  );
};

export default Contact;

import { getProjects, urlFor } from "@/libs/sanity";
import Image from "next/image";
import React from "react";
import { LuArrowUpRight } from "react-icons/lu";


const Projects = async () => {
  const projects = await getProjects();
  console.log(projects);
  return (
    <div className="p-24" id="projects">
      <div className="flex justify-between items-center">
        <div>
          <div className="text-heading-100 font-bold text-md">
            {projects.text1}
          </div>
          <div className="text-heading-100 text-5xl font-bold pt-8">
            {projects.text2}
          </div>
        </div>
        <div className="">
          <a
            href={projects.btnLink}
            target="_blank"
            className="bg-pink-100 p-3  gap-5 flex items-center rounded-lg text-white"
          >
            <Image
              src={urlFor(projects.btnIcon).url()}
              alt="visit my work"
              className=""
              width={30}
              height={50}
            />{" "}
            {projects.btnText}
          </a>
        </div>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-20 mt-10">
        <div className="shadow-lg flex flex-col gap-5">
          <Image
            src={urlFor(projects.project1Cover).url()}
            alt={projects.project1title}
            width={500}
            height={500}
            className="w-full"
          />
          <div className="p-3 px-4 ">
            <div className="font-bold  text-heading-100 text-xl">
              {projects.project1title}
            </div>
            <div className="w-full text-body-100 mt-4">
              {projects.project1description}
            </div>
            <div className="mt-5 font-bold my-4">
                <a href={projects.project1link} target="_blank" className="flex border items-center border-0 w-3/5 xl:w-2/5 gap-10 border-b-4 py-2 border-b-pink-100">
                <span className="text-lg">{projects.btn1Text} </span>
                <LuArrowUpRight className="text-3xl text-pink-100" />
                </a>
            </div>
          </div>
        </div>
        <div className="shadow-lg flex flex-col gap-5">
          <Image
            src={urlFor(projects.project2Cover).url()}
            alt={projects.project2title}
            width={500}
            height={500}
            className="w-full"
          />
          <div className="p-3 px-4 ">
            <div className="font-bold  text-heading-100 text-xl">
              {projects.project2title}
            </div>
            <div className="w-full text-body-100 mt-4">
              {projects.project2description}
            </div>
            <div className="mt-5 font-bold my-4">
                <a href={projects.project2link} target="_blank" className="flex border items-center border-0 w-3/5 xl:w-2/5 gap-10 border-b-4 py-2 border-b-pink-100">
                <span className="text-lg">{projects.btn2Text} </span>
                <LuArrowUpRight className="text-3xl text-pink-100" />
                </a>
            </div>
          </div>
        </div>
        <div className="shadow-lg flex flex-col gap-5">
          <Image
            src={urlFor(projects.project3Cover).url()}
            alt={projects.project3title}
            width={500}
            height={500}
            className="w-full"
          />
          <div className="p-3 px-4 ">
            <div className="font-bold  text-heading-100 text-xl">
              {projects.project3title}
            </div>
            <div className="w-full text-body-100 mt-4">
              {projects.project3description}
            </div>
            <div className="mt-5 font-bold my-4">
                <a href={projects.project3link} target="_blank" className="flex border items-center border-0 w-3/5 xl:w-2/5 gap-10 border-b-4 py-2 border-b-pink-100">
                <span className="text-lg">{projects.btn3Text} </span>
                <LuArrowUpRight className="text-3xl text-pink-100" />
                </a>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Projects;

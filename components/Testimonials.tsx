import { getRTestimonials } from "@/libs/sanity";
import React from "react";

const Testimonials = async () => {
  const testimonials = await getRTestimonials();
  console.log(testimonials);
  return (
    <div className="w-full p-24 bg-gray-100">
      <div className="text-heading-100 font-bold text-md">{testimonials.text1}</div>
      <div className="text-heading-100 text-5xl font-bold pt-8">{testimonials.text2}</div>
    </div>
  );
};

export default Testimonials;

import { getRTestimonials } from "@/libs/sanity";
import { Rating } from "@mui/material";
import React from "react";

const Testimonials = async () => {
  const testimonials = await getRTestimonials();
  console.log(testimonials);
  return (
    <div className="w-full p-24 bg-gray-100">
      <div className="text-heading-100 font-bold text-md text-heading-100">{testimonials.text1}</div>
      <div className="text-heading-100 text-5xl font-bold pt-8 text-heading-100">{testimonials.text2}</div>
      <div className="grid grid-cols-1 lg: grid-cold-3 gap-8">
        {testimonials.reviews.map((item:any,idx:number) => (
          <div key={`review-${idx}`}>
            <Rating name="half-rating" defaultValue={item.stars} precision={0.5} readOnly />

          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;

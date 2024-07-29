import { getTestimonials, urlFor } from "@/libs/sanity";
import { Rating } from "@mui/material";
import Image from "next/image";
import React from "react";

const Testimonials = async () => {
  const testimonials = await getTestimonials();
  return (
    <div className="w-full p-24 bg-gray-100" id="testimonials">
      <div className="text-heading-100 font-bold text-md text-heading-100">
        {testimonials.text1}
      </div>
      <div className="text-heading-100 text-5xl font-bold pt-8 text-heading-100">
        {testimonials.text2}
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 mt-10">
        {testimonials.reviews.map((item: any, idx: number) => (
          <div key={`review-${idx}`} className="p-8 flex flex-col gap-8  border border-4 rounded-lg border-purple-100">
            <Rating
              name="half-rating"
              defaultValue={item.stars}
              precision={0.5}
              readOnly
            />
            <div className="text-heading-100 text-xl font-semibold text-body-100">
              {item.reviewText}
            </div>
            <div className="flex items-center gap-4">
              <Image
                src={urlFor(item.clientImage).url()}
                alt={item.clientName}
                width={80}
                height={200}
                className="rounded-full"
              />
              <div>
                
              <div className="font-bold text-xl">{item.clientName}</div>
              <div className="font-medium text-lg">{item.clientCompany}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;

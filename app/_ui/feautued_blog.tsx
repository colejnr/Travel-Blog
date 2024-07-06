import React from "react";
import Image from "next/image";
import pic from "@/lib/assets/christian-bowen-JXX_GonMj5s-unsplash.jpg";
import { Calendar } from "lucide-react";
import Link from "next/link";

const FeaturedBlog = ({
  image,
  category,
  date,
  desc,
  id,
}: {
  image: string;
  category: string;
  date: string;
  desc: string;
  id: string;
}) => {
  return (
    <div className=" w-full">
      <div className=" w-full h-[320px] relative rounded-[20px] overflow-hidden">
        <Image
          src={image}
          fill
          alt=""
          className=" object-cover object-center"
        />
      </div>
      <div className=" w-full flex-col items-center flex pt-20 space-y-4">
        <h1 className=" uppercase text-lg text-secondary">{category}</h1>
        <div className=" flex items-center space-x-4 text-gray-stone">
          <Calendar />
          <p className="">{date}</p>
        </div>
        {/* <div className=" text-gray-stone flex items-center space-x-4">
          <div className=" w-10 h-10 rounded-[50%] relative overflow-hidden ">
            <Image
              src={pic}
              fill
              alt=""
              className=" object-cover object-center"
            />
          </div>
          <p>J. Anderson</p>
        </div> */}
        <p className=" text-black-zinc  text-lg leading-loose lg:w-[60%] text-pretty text-center mx-auto line-clamp-3">
          {desc}
        </p>
        <br />
        <Link
          href={`/blog/${id}`}
          className=" w-[14rem] py-3 border-black border flex items-center justify-center"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default FeaturedBlog;

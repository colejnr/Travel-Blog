import React from "react";
import Image from "next/image";
import pic from "@/lib/assets/christian-bowen-JXX_GonMj5s-unsplash.jpg";
import { Calendar } from "lucide-react";
import Link from "next/link";

const BlogPreview = ({
  image,
  category,
  date,
  desc,
  id,
  title,
}: {
  image: string;
  category: string;
  date: string;
  desc: string;
  id: string;
  title: string;
}) => {
  return (
    <div
      className=" w-full grid  lg:grid-cols-2 lg:gap-x-20 space-y-5 lg:space-y-0
     mt-10"
    >
      <div className=" h-[420px] relative">
        <Image
          src={image}
          fill
          alt=""
          className=" object-cover object-center"
        />
      </div>
      <div className=" w-full max-h-[420px] flex flex-col justify-center space-y-4 ">
        <h1 className=" capitalize font-bold text-3xl">{title}</h1>
        <p className=" capitalize text-secondary font-semibold text-xl">
          {category}
        </p>

        <div className=" flex items-center space-x-5">
          <div className=" flex items-center space-x-4 text-gray-stone">
            <Calendar />
            <p className="">{date}</p>
          </div>
          {/* <div className=" text-gray-stone flex border-l border-l-gray-stone pl-5 items-center space-x-4">
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
        </div>

        <p className=" text-black-zinc line-clamp-4 leading-loose text-base ">
          {desc}
        </p>

        <br />

        <Link href={`/blog/${id}`} className="">
          {" "}
          Read More{" "}
        </Link>
      </div>
    </div>
  );
};

export default BlogPreview;

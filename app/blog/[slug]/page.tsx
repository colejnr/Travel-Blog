import React from "react";
import Image from "next/image";
import pic from "@/lib/assets/christian-bowen-JXX_GonMj5s-unsplash.jpg";
import { Calendar } from "lucide-react";
import { formatDate } from "@/lib/utils";
import prisma from "@/lib/server/prisma";

export const dynamic = "force-dynamic";

const fetchBlog = async ({ id }: { id: string }) => {
  const data = prisma.blog.findUnique({
    where: {
      id: id,
    },
  });

  return data;
};

const Blog = async ({ params }: { params: { slug: string } }) => {
  const blogDetail = await fetchBlog({ id: params.slug });

  return (
    <div className=" w-full pb-20">
      <div className=" w-full rounded-2xl h-[640px] relative overflow-hidden">
        <Image src={pic} fill alt="" className=" object-cover object-center" />
      </div>
      <div className=" py-20 flex flex-col items-center space-y-8">
        <h1 className=" capitalize font-medium text-5xl text-black-zinc">
          {blogDetail?.title}
        </h1>
        <div className=" flex items-center space-x-5">
          <h1 className=" uppercase text-lg text-secondary">
            {blogDetail?.category}
          </h1>
          <div className=" flex items-center space-x-4 text-gray-stone border-l border-r px-5">
            <Calendar />
            <p className="">
              {formatDate(blogDetail?.created_at || new Date())}
            </p>
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
        </div>
      </div>

      <div className=" lg:w-[50%] mx-auto">
        <p className=" leading-loose">{blogDetail?.content}</p>
      </div>
    </div>
  );
};

export default Blog;

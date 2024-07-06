import {
  Calendar,
  Edit,
  LogOut,
  PlusSquareIcon,
  Trash2,
  UploadCloud,
} from "lucide-react";
import Image from "next/image";
import pic from "@/lib/assets/christian-bowen-JXX_GonMj5s-unsplash.jpg";
import { useState } from "react";
import { formatDate } from "@/lib/utils";
import prisma from "@/lib/server/prisma";
import BlogsEdit from "./_ui/blogs_edit";
import { deleteBlog } from "@/lib/actions";
import DeleteButton from "./_ui/delete_button";
import { logout } from "./action/logout";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Link from "next/link";

export const dynamic = "force-dynamic";

const fetchBlogs = async () => {
  const data = prisma.blog.findMany();
  return data;
};

const logOut = () => {
  cookies().delete("admin");
  redirect("/");
};

export default async function Page() {
  const blogData = await fetchBlogs();
  return (
    <div className=" w-full min-h-screen relative">
      <div className=" w-[80%] mx-auto rounded-xl border shadow-xl p-10">
        <div
          className="
         w-full justify-between flex items-center"
        >
          <BlogsEdit />
          <Link
            href={"/logout"}
            type="submit"
            className=" flex items-center space-x-3"
          >
            <LogOut />
            <p>Log Out</p>
          </Link>
        </div>

        <div className=" w-full grid gap-10  mt-20  lg:grid-cols-3">
          {blogData.map((item, index) => {
            return (
              <div key={index} className=" w-full border border-black">
                <div className=" w-full h-[15rem] relative ">
                  <Image
                    src={item.image}
                    fill
                    alt=""
                    className=" object-cover object-center"
                  />
                </div>
                <div className=" w-[90%] mx-auto my-6 flex items-center space-x-5">
                  <h1 className=" uppercase text-base text-secondary">
                    {item.category}
                  </h1>
                  <div className=" flex items-center space-x-4 text-gray-stone border-l border-r px-5">
                    <Calendar />
                    <p className=" text-sm">{formatDate(item.created_at)}</p>
                  </div>
                  {/* <div className=" text-gray-stone text-sm flex items-center space-x-4">
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
                <p className=" w-[90%] line-clamp-3 mx-auto leading-loose text-black-zinc">
                  {item.content}
                </p>
                <div className=" w-[90%] mx-auto flex items-center space-x-5 py-4">
                  <DeleteButton id={item.id} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

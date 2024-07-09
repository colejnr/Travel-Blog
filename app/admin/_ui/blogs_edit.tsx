"use client";

import { create } from "domain";
import { Calendar, Edit, PlusSquareIcon, Trash2, X } from "lucide-react";
import React, { useState } from "react";
import { createBlog } from "../../../lib/actions";

import SubmitButton from "./submit-button";
import { useFormState } from "react-dom";

const initialState = {
  message: "",
};

const BlogsEdit = () => {
  const [modal, setModal] = useState(false);

  const [state, formAction] = useFormState(createBlog, initialState);

  return (
    <div>
      <button
        onClick={() => setModal(true)}
        className=" w-[14rem] border py-3 border-black flex items-center space-x-4 text-black-zinc justify-center"
      >
        <PlusSquareIcon />
        <p>Create New Blog</p>
      </button>
      {modal && (
        <div className=" absolute w-[80%] lg:w-full h-full left-[10%] -top-[10%] shadow-xl z-50">
          <form
            action={formAction}
            className=" relative lg:w-[60%] bg-white
             p-20 rounded-lg mx-auto mt-20 space-y-6 border"
          >
            <button
              onClick={() => setModal(false)}
              className=" absolute top-10 right-10"
            >
              <X />
            </button>
            

            {/* <input type="text" className=" hidden" value={poster} name="post" /> */}

            <div>
              <h1>Image Url</h1>
              <input
                type="text"
                placeholder="Enter the url of the unsplash image"
                name="image"
                className=" p-4 w-full border-black border"
              />
            </div>

            <div>
              <h1>Title</h1>
              <input
                type="text"
                placeholder="Enter Title"
                name="title"
                className=" p-4 w-full border-black border"
              />
            </div>

            <div>
              <h1>Category</h1>
              <input
                type="text"
                placeholder="Enter category"
                name="category"
                className=" p-4 w-full border-black border"
              />
            </div>

            <div>
              <h1>Content</h1>
              <textarea
                placeholder=" Enter blog content"
                name="content"
                className=" border border-black h-[15rem] w-full"
              ></textarea>
            </div>

            <SubmitButton />
            {state?.message ? (
              <p
                aria-live="polite"
                className={` text-center mt-4 ${
                  state?.message.toLowerCase() == "blog added successfully"
                    ? "text-green-500"
                    : "text-red-500"
                } `}
              >
                {state?.message}
              </p>
            ) : null}
          </form>
        </div>
      )}
    </div>
  );
};

export default BlogsEdit;

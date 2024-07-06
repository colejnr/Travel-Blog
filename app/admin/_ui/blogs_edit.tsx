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
            {/*  {poster != "" ? (
              <p>Image Uploaded</p>
            ) : (
              <div className="flex items-center justify-center w-full">
                <label
                  htmlFor="dropzone-file"
                  className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                >
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg
                      className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 16"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                      />
                    </svg>
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                      <span className="font-semibold">Click to upload</span> or
                      drag and drop
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      SVG, PNG, JPG or GIF (MAX. 800x400px)
                    </p>
                  </div>
                  <input
                    id="dropzone-file"
                    name="poster"
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleFileUpload(e)}
                    className="hidden"
                  />
                </label>
              </div>
            )} */}

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

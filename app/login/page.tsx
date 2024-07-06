"use client";

import React from "react";
import SubmitButton from "./_ui/submit";
import loginAdmin from "./_action/login";
import { useFormState } from "react-dom";

const initialState = {
  message: "",
};

const Page = () => {
  const [state, formAction] = useFormState(loginAdmin, initialState);

  return (
    <div className=" w-full h-screen">
      <form
        action={formAction}
        className=" w-[80%] lg:w-[40%] mx-auto p-10 rounded-xl border shadow-xl space-y-6"
      >
        <h1 className=" font-bold text-2xl">Admin Auth</h1>
        <br />
        <div className=" ">
          <h1>Name</h1>
          <input
            type="text"
            placeholder="Enter Name"
            name="name"
            className=" p-4 w-full border-black border"
          />
        </div>

        <div>
          <h1>Password</h1>
          <input
            type="password"
            placeholder="Enter password"
            name="password"
            className=" p-4 w-full border-black border"
          />
        </div>

        <SubmitButton />
        {state?.message ? (
          <p
            aria-live="polite"
            className={` text-center mt-4 ${
              state?.message.toLowerCase() == "success"
                ? "text-green-500"
                : "text-red-500"
            } `}
          >
            {state?.message}
          </p>
        ) : null}
      </form>
    </div>
  );
};

export default Page;

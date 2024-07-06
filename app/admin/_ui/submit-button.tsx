import React from "react";
import { useFormStatus } from "react-dom";

const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className=" w-[15rem] flex items-center justify-center py-3 border-black border"
    >
      {pending ? (
        <span className="spinner-border spinner-border-sm">
          Creating new Blog....
        </span>
      ) : (
        <span>Create New Blog</span>
      )}
    </button>
  );
};

export default SubmitButton;

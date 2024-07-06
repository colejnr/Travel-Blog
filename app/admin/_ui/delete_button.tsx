"use client";

import React from "react";
import { deleteBlog } from "../../../lib/actions";
import { Trash2 } from "lucide-react";

const DeleteButton = ({ id }: { id: string }) => {
  return (
    <button onClick={() => deleteBlog(id)}>
      <Trash2 className=" text-red-600" />
    </button>
  );
};

export default DeleteButton;

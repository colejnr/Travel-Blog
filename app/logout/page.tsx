"use client";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { useEffect } from "react";

export default function Page() {
  useEffect(() => {
    redirect("/");
  }, []);

  return (
    <h1 className=" w-full h-screen flex items-center justify-center">
      Logged Out Sussessfully!
    </h1>
  );
}

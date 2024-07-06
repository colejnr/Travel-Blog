"use server";

import { z } from "zod";
import prisma from "@/lib/server/prisma";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const schema = z.object({
  name: z.string(),

  password: z.string(),
});

export default async function loginAdmin(prevState: any, formData: FormData) {
  const validatedFields = schema.safeParse({
    name: formData.get("name"),
    password: formData.get("password"),
  });

  // Return early if the form data is invalid
  if (!validatedFields.success) {
    return {
      message: "Invalid Login!!",
    };
  }

  // Mutate data

  if (
    validatedFields.data.name === "admin" &&
    validatedFields.data.password === "123"
  ) {
    cookies().set({
      name: "admin",
      value: "jskfljijsdakldmfa",
      path: "/",
      maxAge: 60 * 60 * 24 * 30, // 30 days
    });

    redirect("/admin");
  } else {
    return {
      message: "Invalid Login!!",
    };
  }
}

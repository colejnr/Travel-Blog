"use server";
import prisma from "@/lib/server/prisma";
import { revalidatePath } from "next/cache";
import { z } from "zod";

const schema = z.object({
  image: z.string(),
  title: z.string(),
  category: z.string(),
  content: z.string(),
});

export const createBlog = async (prevData: any, formData: FormData) => {
  const validatedFields = schema.safeParse({
    image: formData.get("image"),
    title: formData.get("title"),
    category: formData.get("category"),
    content: formData.get("content"),
  });

  // Return early if the form data is invalid
  if (!validatedFields.success) {
    return {
      message: "Error while adding new blog!",
    };
  }

  try {
    await prisma.blog.create({
      data: {
        title: validatedFields.data.title,
        content: validatedFields.data.content,
        image: validatedFields.data.image,
        category: validatedFields.data.category,
        created_at: new Date(),
        updated_at: new Date(),
      },
    });

    revalidatePath("/admin");

    return {
      message: "Blog Added successfully",
    };
  } catch (e) {
    if (!validatedFields.success) {
      return {
        message: "Action failed!",
      };
    }
  }
};

export const deleteBlog = async (id: string) => {
  await prisma.blog.delete({
    where: {
      id: id,
    },
  });

  revalidatePath("/admin");
};

import BlogPreview from "./_ui/blog_preview";
import FeaturedBlog from "./_ui/feautued_blog";
import prisma from "../lib/server/prisma";
import { formatDate } from "../lib/utils";

export const dynamic = "force-dynamic";

const fetchBlogs = async () => {
  const data = prisma.blog.findMany();
  return data;
};

export default async function Home() {
  const blogData = await fetchBlogs();

  return (
    <main className=" w-full pb-20  ">
      <div className=" w-[90%] lg:w-[70%] mx-auto pt-5">
        {blogData[0] != null ? (
          <FeaturedBlog
            id={blogData[0].id}
            category={blogData[0].category}
            date={formatDate(blogData[0].created_at)}
            desc={blogData[0].content}
            image={blogData[0].image}
          />
        ) : (
          <div></div>
        )}

        {blogData != null ? (
          <div className=" pt-40 space-y-10">
            {blogData.map((blog, index) => (
              <BlogPreview
                key={blog.id}
                id={blog.id}
                category={blog.category}
                date={formatDate(blog.created_at)}
                desc={blog.content}
                image={blog.image}
                title={blog.title}
              />
            ))}
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </main>
  );
}

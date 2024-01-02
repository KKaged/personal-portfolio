import React from "react";
import { BlogData } from "../data";
import AboutBlog from "../components/AboutBlog";
import BlogPost from "../components/Story";
export default function Blog() {
  return (
    <>
      <div className="flex flex-col text-start w-full py-12">
        <h1 className="text-white font-bold text-3xl">Blog</h1>
        <p className="font-light">
          {BlogData.length + ""} Post About My Current Thoughts And Activities
        </p>
        {BlogData.map((blog) => (
          <BlogPost className={""} key={blog.id} {...blog}>
            {blog.story}
          </BlogPost>
        ))}
      </div>
    </>
  );
}

import { BlogData } from "../data";
import BlogPost from "./Story";

export default function AboutBlog({ children }) {
  return (
    <div className="flex flex-col text-start py-12 gap-5">
      <h1 className="text-white font-bold text-3xl">Blog</h1>
      {BlogData.map((blog) => (
        <BlogPost key={blog.id} {...blog} />
      ))}
      {children}
    </div>
  );
}

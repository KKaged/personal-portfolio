export default function BlogPost({ blogTitle, postDate, story }) {
  return (
    <div className="group flex py-5 gap-20 rounded-lg hover:bg-zinc-900">
      <p className="font-light group-hover:bg-zinc-900">{postDate}</p>
      <h2 className="font-light text-white group-hover:bg-zinc-900">
        {blogTitle}
      </h2>
    </div>
  );
}

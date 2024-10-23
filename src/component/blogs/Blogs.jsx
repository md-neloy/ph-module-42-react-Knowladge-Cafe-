import { useEffect, useState } from "react";
import Blog from "./blog/Blog";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch(`blog.json`)
      .then((res) => res.json())
      .then((data) => setBlogs(data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <>
      <div className="md:w-2/3">
        <div>blogs: {blogs.length}</div>
        {blogs.map((blog) => {
          return <Blog blog={blog} />;
        })}
      </div>
    </>
  );
};

export default Blogs;

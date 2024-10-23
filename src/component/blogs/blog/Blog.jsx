import { CiBookmark } from "react-icons/ci";
import PropTypes from "prop-types";
export default function Blog({ blog }) {
  return (
    <>
      <div>
        <div>
          <img src={blog.cover_img} alt="" />
        </div>
        <div className="flex justify-between items-center">
          <div className="flex gap-3 justify-center items-center">
            <div>
              <img src={blog.author_img} alt={blog.author_name} />
            </div>
            <p>
              {blog.author_name}
              <br />
              <span>{blog.posted_date} </span>
            </p>
          </div>
          <div>
            <p>
              {blog.reading_time} min read <CiBookmark />
            </p>
          </div>
        </div>
        <button className="btn">mark as read</button>
      </div>
    </>
  );
}

Blog.prototype = {
  blog: PropTypes.object.isRequired,
};

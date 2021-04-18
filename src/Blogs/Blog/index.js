import React from "react";
import "./style.scss";

const Blog = (props) => {
  const { data, onClick } = props;
  const { title, body } = data;
  return (
    <div className="blog-card" onClick={onClick}>
      <div className="blog-title">{title}</div>
      <div className="blog-body">{body}</div>
    </div>
  );
};
export default Blog;

import React from "react";

const Blog = (props) => {
  const { data } = props;
  const { userId, id, title, body } = data;
  return (
    <div className="blog">
      {userId}
      {id}
      {body}
      {title}
    </div>
  );
};
export default Blog;

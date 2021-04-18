import React from "react";
import "./style.scss";

const Comment = (props) => {
  const { data } = props;
  const { name, email, body } = data;
  return (
    <div className="comment-card">
      <div className="comment-name">{name}</div>
      <div className="comment-email">{email}</div>
      <div className="comment-email">{body}</div>
    </div>
  );
};
export default Comment;

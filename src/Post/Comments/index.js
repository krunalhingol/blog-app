import { useState } from "react";
import Comment from "./Comment";

const Comments = (props) => {
  const { getList, comments = [] } = props;
  const [showComments, setShowComments] = useState(false);
  if (showComments && (!comments || comments.length === 0)) {
    return (
      <div className="comments">
        <button className="btn btn-primary" onClick={getList}>
          Show Comments
        </button>
        <div>No comments to this post.</div>
      </div>
    );
  }

  const toggleComments = () => {
    if (showComments) {
      setShowComments(false);
    } else {
      setShowComments(true);
      getList();
    }
  };

  return (
    <div className="comments">
      <button className="btn btn-primary" onClick={toggleComments}>
        {showComments ? "Hide  Comments" : "Show Comments"}
      </button>
      {showComments && (
        <div className="row">
          {comments.map((commentItem) => (
            <div className="col-xs-12">
              <Comment key={commentItem.id} data={commentItem} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Comments;

import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router";
import Comments from "./Comments";
import { getComments, getPostDetails } from "./Redux/actions";

const Post = (props) => {
  const { postId } = useParams();
  const { getPost, postDetails, getCommentList, comments = [] } = props;
  useEffect(() => {
    getPost(postId);
  }, [postId, getPost]);
  if (!postDetails) {
    return <div className="post-details">No data to show.</div>;
  }
  return (
    <div className="post-details">
      <div className="post-body">{postDetails.body}</div>
      <Comments getList={() => getCommentList(postId)} comments={comments} />
    </div>
  );
};
const mapStateToProps = (state) => ({
  postDetails: state.blogs.postDetails,
  comments: state.blogs.comments,
});
const mapDispatchToProps = (dispatch) => ({
  getPost: (postId) => dispatch(getPostDetails(postId)),
  getCommentList: (postId) => dispatch(getComments(postId)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Post);

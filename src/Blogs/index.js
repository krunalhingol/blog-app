import { useEffect } from "react";
import { connect } from "react-redux";
import Blog from "./Blog";
import { getPosts } from "./Redux/actions";

const Blogs = (props) => {
  const { getList, blogList } = props;
  useEffect(() => {
    getList();
  }, [getList]);
  return blogList.map((blogItem) => <Blog key={blogItem.id} data={blogItem} />);
};

const mapStateToProps = (state) => ({ blogList: state.blogs.blogList });
const mapDispatchToProps = (dispatch) => ({
  getList: () => dispatch(getPosts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Blogs);

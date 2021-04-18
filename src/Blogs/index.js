import { useEffect } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router";
import { blogs } from "../Routes/routingConstants";
import Blog from "./Blog";
import { getPosts } from "./Redux/actions";

const Blogs = (props) => {
  const { getList, blogList } = props;
  const history = useHistory();
  useEffect(() => {
    getList();
  }, [getList]);
  return (
    <div className="row">
      {blogList.map((blogItem) => (
        <div className="col-sm-3 col-xs-12">
          <Blog
            key={blogItem.id}
            data={blogItem}
            onClick={() => history.push(`${blogs}/${blogItem.id}`)}
          />
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({ blogList: state.blogs.blogList });
const mapDispatchToProps = (dispatch) => ({
  getList: () => dispatch(getPosts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Blogs);

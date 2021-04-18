import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router";
import Search from "../Components/Search";
import { blogs } from "../Routes/routingConstants";
import Blog from "./Blog";
import { getPosts, setPosts } from "./Redux/actions";

const Blogs = (props) => {
  const { getList, blogList } = props;
  const [searchText, setSearchText] = useState("");
  const history = useHistory();
  useEffect(() => {
    getList();
  }, [getList]);

  const onSearch = (text) => setSearchText(text);
  return (
    <div className="blogs">
      <Search onSearch={onSearch} />
      <div className="row">
        {blogList.map((blogItem) => {
          if (!blogItem.title.includes(searchText)) {
            return null;
          }
          return (
            <div className="col-sm-3 col-xs-12" key={blogItem.id}>
              <Blog
                data={blogItem}
                onClick={() => history.push(`${blogs}/${blogItem.id}`)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({ blogList: state.blogs.blogList });
const mapDispatchToProps = (dispatch) => ({
  getList: () => dispatch(getPosts()),
  setList: (list) => dispatch(setPosts(list)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Blogs);

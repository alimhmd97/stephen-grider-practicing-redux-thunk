import { useEffect } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions";
const PostsList = ({ fetchPosts, posts }) => {
  useEffect(() => {
    fetchPosts();
  }, []);
  return (
    <div>
      {posts?.map((post) => {
        return (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <div>{post.body}</div>
          </div>
        );
      })}
    </div>
  );
};
const mapStateToProp = (state) => {
  return { posts: state.posts };
};
export default connect(mapStateToProp, { fetchPosts })(PostsList);

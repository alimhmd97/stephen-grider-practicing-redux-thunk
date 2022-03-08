import jsonplaceholder from "../APIs/jsonplaceholder";
const fetchPosts = () => async (dispatch) => {
  const res = await jsonplaceholder.get("/posts");
  dispatch({ type: "FETCH_POSTS", payload: res.data });
};
export { fetchPosts };

import axios from "axios";
const fetchComment = async (postId) => {
  console.log("getting comments");
  const token = await JSON.parse(localStorage.getItem("token"));
  const response = await axios.get(
    `http://localhost:3000/feed/getcomments/${postId}`,
    {
      headers: {
        Authorization: "Baerer " + token,
      },
    }
  );
  return response.data.comments;
};
export default fetchComment;

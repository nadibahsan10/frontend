import axios from "axios";
const getPosts = async () => {
  try {
    const token = JSON.parse(localStorage.getItem("token"));
    const response = await axios.get(
      `http://localhost:3000/marketplace/getposts`,

      {
        headers: {
          Authorization: "Baerer " + token,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.log(error.response.data);
    return error.response.data;
  }
};
export default getPosts;

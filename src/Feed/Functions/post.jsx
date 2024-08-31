import axios from "axios";
const post = async (title, description, files) => {
  const form = new FormData();
  form.append("title", title);
  form.append("description", description);
  if (files !== null) {
    let imageArray = Array.from(files);
    imageArray.forEach((item) => {
      form.append("files", item);
    });
  }
  const token = JSON.parse(localStorage.getItem("token"));
  const response = await axios.post(`http://localhost:3000/feed/post`, form, {
    headers: {
      Authorization: "Baerer " + token,
    },
  });
  return response;
};
export default post;

import axios from "axios";
const AddPost = async (
  title,
  description,
  price,
  condition,
  category,
  address,
  files
) => {
  const form = new FormData();
  form.append("title", title);
  form.append("description", description);
  form.append("price", price);
  form.append("category", category);
  form.append("condition", condition);
  form.append("address", address);
  if (files !== null) {
    let imageArray = Array.from(files);
    imageArray.forEach((item) => {
      form.append("files", item);
    });
  }

  const token = JSON.parse(localStorage.getItem("token"));
  const response = await axios.post(
    `http://localhost:3000/marketplace/addpost`,
    form,
    {
      headers: {
        Authorization: "Baerer " + token,
      },
    }
  );

  return response;
};
export default AddPost;

import axios from "axios";
const deleteQuestions = async (id, pdfPath) => {
  try {
    const token = JSON.parse(localStorage.getItem("token"));
    const response = await axios.post(
      `http://localhost:3000/questions/delete`,
      {
        id,
        pdfPath,
      },

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

export default deleteQuestions;
import axios from "axios";
const getQuestions = async (search, department, year, trimester, examType) => {
  try {
    const token = JSON.parse(localStorage.getItem("token"));
    const response = await axios.post(
      `http://localhost:3000/questions/getquestion`,
      {
        search,
        department,
        year,
        trimester,
        examType,
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

export default getQuestions;

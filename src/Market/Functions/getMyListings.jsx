import axios from "axios";

const getMyListings = async () => {
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const response = await axios.get(
        `http://localhost:3000/marketplace/getmylistings`,
  
        {
          headers: {
            Authorization: "Baerer " + token,
          },
        }
      );
      console.log("reached");
      return response.data;
    } catch (error) {
      console.log(error.response.data);
      return error.response.data;
    }
  };

export default getMyListings
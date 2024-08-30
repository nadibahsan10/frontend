const fetchData = async () => {
  const token = "Baerer " + JSON.parse(localStorage.getItem("token"));
  const response = await axios.get("http://localhost:3000/feed/getposts", {
    headers: {
      Authorization: token,
    },
  });

  return response;
};

export default fetchData;

import { useQuery, useMutation } from "@tanstack/react-query";
import axios from "axios";

// Custom hook for fetching and sending data
const useFetch = ({
  url,
  queryKey,
  method = "GET",
  options = {},
  data = null,
  params = {},
}) => {
  // Fetcher function
  const fetcher = async () => {
    const token = JSON.parse(localStorage.getItem("token"));
    const response = await axios({
      method,
      url,
      data,
      params,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  };

  // Use `useQuery` for GET requests
  const query = useQuery({
    queryKey,
    queryFn: fetcher,
    ...options,
    enabled: method === "GET", // Only run for GET requests
  });

  // Use `useMutation` for non-GET requests (POST, PUT, DELETE)
  const mutation = useMutation(fetcher);

  // Return the appropriate result
  return method === "GET" ? query : mutation;
};

export default useFetch;

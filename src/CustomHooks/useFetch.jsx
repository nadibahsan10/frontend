import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
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
  const queryClient = useQueryClient(); // Access the query client instance

  // Fetcher function
  const fetcher = async () => {
    console.log("Fetcher Active");
    const token = JSON.parse(localStorage.getItem("token"));

    // Create FormData if data is provided and method is POST or PUT
    let requestData = data instanceof FormData ? data : null;

    if (!requestData) {
      requestData = new FormData();

      // Append data fields to FormData
      if (data) {
        Object.keys(data).forEach((key) => {
          requestData.append(key, data[key]);
        });
      }
    }

    const response = await axios({
      method,
      url,
      data: requestData,
      params,
      headers: {
        Authorization: `Bearer ${token}`,
        ...(requestData instanceof FormData
          ? { "Content-Type": "multipart/form-data" }
          : {}),
      },
    });

    console.log(response.data);
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
  const mutation = useMutation({ mutationFn: fetcher });

  // Return the appropriate result
  return method === "GET" ? query : mutation;
};

export default useFetch;

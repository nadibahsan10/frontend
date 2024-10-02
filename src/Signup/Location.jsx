import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { CircularProgress } from "@mui/material";

import useFetch from "../CustomHooks/useFetch";

export default function Location({ value, change }) {
  const { data, isLoading, isError, error } = useFetch({
    queryKey: ["getlocation"],
    url: "http://localhost:3000/auth/getlocation",
    method: "GET",
  });
  if (isLoading) {
    return <CircularProgress />;
  }
  return (
    <Autocomplete
      value={value}
      onChange={change}
      disablePortal
      options={data}
      renderInput={(params) => <TextField {...params} label="City" />}
    />
  );
}

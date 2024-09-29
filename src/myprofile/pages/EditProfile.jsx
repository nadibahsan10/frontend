import React from "react";
import Edit from "../components/Edit";
import { useInput } from "../../CustomHooks/useInput";

const EditProfile = () => {
  const { state, handleChange, handleImage, updateImage, reset } = useInput({});
  return <Edit />;
};

export default EditProfile;

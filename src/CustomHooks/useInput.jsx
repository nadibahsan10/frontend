import { useState, useReducer, useEffect } from "react";

const useInput = (initialState) => {
  const formReducer = (state, action) => {
    switch (action.type) {
      case "CHANGE": {
        return {
          ...state,
          [action.name]: {
            value: action.value,
            isValid: action.value === "" ? false : true,
          },
        };
      }
      case "AUTO": {
        return { ...state, city: action.value };
      }
      case "IMAGE": {
        return {
          ...state,
          image: action.value,
        };
      }
      case "CHECKBOX": {
        return {
          ...state,
          [action.category]: action.checked
            ? [...state[action.category], action.value] // Add value if checked
            : state[action.category].filter((item) => item !== action.value), // Remove value if unchecked
        };
      }
      case "RESET": {
        return {
          ...initialState,
        };
      }

      default: {
        return state;
      }
    }
  };

  const handleCityChange = (event, value) => {
    if (value) {
      dispatch({ type: "AUTO", value: value });
    } else {
      dispatch({ type: "AUTO", value: null });
    }
  };
  const updateImage = (value) => {
    const dataTransfer = new DataTransfer();
    value.forEach((file) => {
      dataTransfer.items.add(file);
    });
    dispatch({ type: "IMAGE", value: dataTransfer.files });
  };

  const [state, dispatch] = useReducer(formReducer, initialState);

  const handleChange = (event) => {
    const { name, value } = event.target;

    dispatch({
      type: "CHANGE",
      name: name,
      value: value,
    });
  };

  const reset = () => {
    dispatch({ type: "RESET" });
  };
  const handleCheckBox = (e) => {
    const { name, checked } = e.target;
    console.log(name, checked);
    const [category, value] = name.split("-");
    dispatch({ type: "CHECKBOX", checked, category, value });
  };

  const uploadImage = (event) => {
    const { files } = event.target;
    dispatch({ type: "IMAGE", value: files });
  };

  return {
    state,
    handleChange,
    uploadImage,
    updateImage,
    handleCheckBox,
    handleCityChange,
    reset,
  };
};
export { useInput };

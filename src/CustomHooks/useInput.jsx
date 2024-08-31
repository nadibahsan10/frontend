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
      case "IMAGE": {
        return {
          ...state,
          image: action.value,
        };
      }

      default: {
        return state;
      }
    }
  };

  const [Files, setFiles] = useState([]);

  const updateImage = (value) => {
    dispatch({ type: "IMAGE", value: value });
  };

  const [state, dispatch] = useReducer(formReducer, initialState);
  useEffect(() => {
    if (!state.image) {
      console.log("No image");
    } else if (state.image !== null) {
      setFiles(Array.from(state.image));
    } else {
      setFiles([]);
    }
  }, [state]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    dispatch({
      type: "CHANGE",
      name: name,
      value: value,
    });
  };

  const uploadImage = (event) => {
    const { files } = event.target;
    dispatch({ type: "IMAGE", value: files });
  };

  return { state, handleChange, uploadImage, updateImage, Files, setFiles };
};
export { useInput };

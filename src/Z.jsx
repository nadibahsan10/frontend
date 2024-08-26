import React, { useState } from "react";
import { Container, Button, Slider } from "@mui/material";

const Z = () => {
  const [value, setValue] = useState([0, 100]);

  const handleChange = (event) => {
    const value = event.target.value;
    setValue(value);
  };
  return (
    <Container>
      <Slider
        getAriaLabel={() => "Temperature range"}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
      />
    </Container>
  );
};

export default Z;

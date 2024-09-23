import React, { useState } from "react";

function Dropdown() {
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return <h1>q</h1>;
}

export default Dropdown;

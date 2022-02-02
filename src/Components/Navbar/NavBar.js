import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import React from "react";

const NavBar = () => {
  const [alignment, setAlignment] = React.useState("goal");

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  return (
    <ToggleButtonGroup
      color="success"
      style={{ padding: "2%" }}
      value={alignment}
      exclusive
      onChange={handleChange}
    >
      <ToggleButton style={{ fontSize: "15px" }} value="goal">
        Goal
      </ToggleButton>
      <ToggleButton style={{ fontSize: "15px" }} value="activity">
        Activity
      </ToggleButton>
      <ToggleButton style={{ fontSize: "15px" }} value="profile">
        Profile
      </ToggleButton>
      <ToggleButton style={{ fontSize: "15px" }} value="select-coach">
        Select Coach
      </ToggleButton>
    </ToggleButtonGroup>
  );
};

export default NavBar;

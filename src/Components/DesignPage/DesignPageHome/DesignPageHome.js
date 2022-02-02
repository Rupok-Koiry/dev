import {
  Button,
  CircularProgress,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import React, { useState } from "react";
import initializeAuthentication from "../../Firebase/firebase.initialize";
import "./DesignPageHome.css";

initializeAuthentication();
const DesignPageHome = () => {
  const [userData, setUserData] = useState({});

  const onRadioInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setUserData({ [name]: value });
  };
  const [loader, setLoader] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoader(true);
    const response = await fetch(
      "https://deevesofttask-1272c-default-rtdb.firebaseio.com/userDataRecords.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      }
    );
    if (response.ok) {
      alert("Data submitted successfully");
    } else {
      alert("Please fill the data!");
    }
    setLoader(false);
  };

  return (
    <div>
      <div className="container">
        <div className="item1">
          <h1 style={{ fontSize: "30px" }}>Goal</h1>
          <p style={{ letterSpacing: "3px", fontSize: "25px" }}>
            Select your primary goal. What do you want to <br /> accomplish in
            the next few months.
          </p>
        </div>

        <div className="item2">
          <form onSubmit={handleSubmit}>
            <RadioGroup
              className="item"
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="Get leaner"
              name="goal"
            >
              <br />
              <FormControlLabel
                value="Get leaner"
                control={<Radio />}
                label="Get leaner"
                style={{ fontSize: "30px" }}
                onChange={onRadioInputChange}
              />
              <br />
              <FormControlLabel
                value="Get active again"
                control={<Radio />}
                label="Get active again"
                onChange={onRadioInputChange}
              />
              <br />
              <FormControlLabel
                value="Reduce pain or injury"
                control={<Radio />}
                label="Reduce pain or injury"
                onChange={onRadioInputChange}
              />
              <br />
              <FormControlLabel
                value="Improve cardio or speed"
                control={<Radio />}
                label="Improve cardio or speed"
                onChange={onRadioInputChange}
              />
              <br />
            </RadioGroup>
            {loader ? (
              <CircularProgress disableShrink />
            ) : (
              <Button
                style={{ margin: "5%" }}
                variant="outlined"
                size="large"
                type="submit"
              >
                Submit
              </Button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default DesignPageHome;

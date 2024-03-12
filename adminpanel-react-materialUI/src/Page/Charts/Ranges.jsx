import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";
import MuiInput from "@mui/material/Input";

const Input = styled(MuiInput)`
  width: 42px;
`;

export default function Ranges() {
  const [value, setValue] = React.useState(75);
  const [valueOne, setValueOne] = React.useState(50);
  const [valueTwo, setValueTwo] = React.useState(60);
  const [valueThree, setValueThree] = React.useState(25);

  const handleSliderChange = (event) => {
    setValue(Number);
  };

  const handleSliderChangeOne = (event) => {
    setValueOne(Number);
  };

  const handleSliderChangeTwo = (event) => {
    setValueOne(Number);
  };

  const handleSliderChangeThree = (event) => {
    setValueOne(Number);
  };

  const handleInputChange = (event) => {
    setValue(event.target.value === "" ? 0 : Number(event.target.value));
  };

  const handleInputChangeOne = (event) => {
    setValueOne(event.target.value === "" ? 0 : Number(event.target.value));
  };

  const handleInputChangeTwo = (event) => {
    setValue(event.target.value === "" ? 0 : Number(event.target.value));
  };

  const handleInputChangeThree = (event) => {
    setValue(event.target.value === "" ? 0 : Number(event.target.value));
  };

  const handleBlur = () => {
    if (value < 0) {
      setValue(0);
    } else if (value > 100) {
      setValue(100);
    }
  };

  const handleBlurOne = () => {
    if (valueOne < 0) {
      setValueOne(0);
    } else if (valueOne > 100) {
      setValueOne(100);
    }
  };

  const handleBlurTwo = () => {
    if (valueTwo < 0) {
      setValueTwo(0);
    } else if (valueTwo > 100) {
      setValueTwo(100);
    }
  };

  const handleBlurThree = () => {
    if (valueThree < 0) {
      setValueThree(0);
    } else if (valueThree > 100) {
      setValueThree(100);
    }
  };

  return (
    <>
      <Box>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography id="input-slider" gutterBottom>
            All Customers
          </Typography>
          <Grid item>
            <Input
              value={value}
              size="small"
              onChange={handleInputChange}
              onBlur={handleBlur}
              inputProps={{
                step: 10,
                min: 0,
                max: 100,
                type: "number",
                "aria-labelledby": "input-slider",
              }}
            />
          </Grid>
        </Box>
        <Grid container spacing={2} alignItems="center">
          {/* <Grid item>
          <VolumeUp />
        </Grid> */}
          <Grid item xs>
            <Slider
              style={{ color: "orange", height: "15px" }}
              value={typeof value === "number" ? value : 0}
              onChange={handleSliderChange}
              aria-labelledby="input-slider"
            />
          </Grid>
        </Grid>
      </Box>

      <Box>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography id="input-slider" gutterBottom>
            New Customers (Signed In)
          </Typography>
          <Grid item>
            <Input
              value={valueOne}
              size="small"
              onChange={handleInputChangeOne}
              onBlur={handleBlurOne}
              inputProps={{
                step: 10,
                min: 0,
                max: 100,
                type: "number",
                "aria-labelledby": "input-slider",
              }}
            />
          </Grid>
        </Box>
        <Grid container spacing={2} alignItems="center">
          {/* <Grid item>
          <VolumeUp />
        </Grid> */}
          <Grid item xs>
            <Slider
              style={{ color: "#ff0066", height: "15px" }}
              value={typeof valueOne === "number" ? valueOne : 0}
              onChange={handleSliderChangeOne}
              aria-labelledby="input-slider"
            />
          </Grid>
        </Grid>
      </Box>

      <Box>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography id="input-slider" gutterBottom>
            All Customers
          </Typography>
          <Grid item>
            <Input
              value={valueTwo}
              size="small"
              onChange={handleInputChangeTwo}
              onBlur={handleBlurTwo}
              inputProps={{
                step: 10,
                min: 0,
                max: 100,
                type: "number",
                "aria-labelledby": "input-slider",
              }}
            />
          </Grid>
        </Box>
        <Grid container spacing={2} alignItems="center">
          {/* <Grid item>
          <VolumeUp />
        </Grid> */}
          <Grid item xs>
            <Slider
              style={{ color: "orange", height: "15px" }}
              value={typeof valueTwo === "number" ? valueTwo : 0}
              onChange={handleSliderChangeTwo}
              aria-labelledby="input-slider"
            />
          </Grid>
        </Grid>
      </Box>

      <Box>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography id="input-slider" gutterBottom>
            New Customers (Signed In)
          </Typography>
          <Grid item>
            <Input
              value={valueThree}
              size="small"
              onChange={handleInputChangeThree}
              onBlur={handleBlurThree}
              inputProps={{
                step: 10,
                min: 0,
                max: 100,
                type: "number",
                "aria-labelledby": "input-slider",
              }}
            />
          </Grid>
        </Box>
        <Grid container spacing={2} alignItems="center">
          {/* <Grid item>
          <VolumeUp />
        </Grid> */}
          <Grid item xs>
            <Slider
              style={{ color: "#ff0066", height: "15px" }}
              value={typeof valueThree === "number" ? valueThree : 0}
              onChange={handleSliderChangeThree}
              aria-labelledby="input-slider"
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";
import MuiInput from "@mui/material/Input";

import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
const Input = styled(MuiInput)`
  width: 42px;
`;

export default function Ranges() {
  const [data01, setData01] = React.useState(21799);
  const [data02, setData02] = React.useState(5799);
  const [data03, setData03] = React.useState(18799);
  const [data04, setData04] = React.useState(5799);

  const handleSliderChange = (event) => {
    // setValue(Number);
    setData01(event.target.value);
  };

  const handleSliderChangeOne = (event) => {
    // setValueOne(Number);
    setData02(event.target.value);
  };

  const handleSliderChangeTwo = (event) => {
    // setValueOne(Number);
    setData03(event.target.value);
  };

  const handleSliderChangeThree = (event) => {
    // setValueOne(Number);
    setData04(event.target.value);
  };

  const BorderLinearProgress01 = styled(LinearProgress)(({ theme }) => ({
    height: 18,
    borderRadius: 15,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor:
        theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 15,
      backgroundColor: theme.palette.mode === "light" ? "orange" : "#308fe8",
    },
  }));

  const BorderLinearProgress02 = styled(LinearProgress)(({ theme }) => ({
    height: 18,
    borderRadius: 15,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor:
        theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 15,
      backgroundColor: theme.palette.mode === "light" ? "#ff0066" : "#308fe8",
    },
  }));

  const BorderLinearProgress03 = styled(LinearProgress)(({ theme }) => ({
    height: 18,
    borderRadius: 15,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor:
        theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 15,
      backgroundColor: theme.palette.mode === "light" ? "orange" : "#308fe8",
    },
  }));

  const BorderLinearProgress04 = styled(LinearProgress)(({ theme }) => ({
    height: 18,
    borderRadius: 15,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor:
        theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 15,
      backgroundColor: theme.palette.mode === "light" ? "#ff0066" : "#308fe8",
    },
  }));

  return (
    <>
      <Box>
        <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
          <Typography id="input-slider" gutterBottom>
            All Customers
          </Typography>
          <Typography sx={{ color: "orange" }} id="input-slider" gutterBottom>
            {data01}
          </Typography>
        </Box>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs>
            <BorderLinearProgress01 variant="determinate" value={90} />
          </Grid>
        </Grid>
      </Box>

      <Box>
        <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
          <Typography id="input-slider" gutterBottom>
            New Customers (Signed In)
          </Typography>
          <Typography sx={{ color: " #ff0066" }} id="input-slider" gutterBottom>
            {data02}
          </Typography>
        </Box>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs>
            <BorderLinearProgress02 variant="determinate" value={26} />
          </Grid>
        </Grid>
      </Box>

      <Box>
        <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
          <Typography id="input-slider" gutterBottom>
            All Customers
          </Typography>
          <Typography sx={{ color: "orange" }} id="input-slider" gutterBottom>
            {data03}
          </Typography>
        </Box>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs>
            <BorderLinearProgress03 variant="determinate" value={78} />
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ mb: 1.5 }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
          <Typography id="input-slider" gutterBottom>
            New Customers (Signed In)
          </Typography>
          <Typography sx={{ color: " #ff0066" }} id="input-slider" gutterBottom>
            {data04}
          </Typography>
        </Box>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs>
            <BorderLinearProgress04 variant="determinate" value={25} />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

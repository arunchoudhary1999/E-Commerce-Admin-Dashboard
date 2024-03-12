import SquareIcon from "@mui/icons-material/Square";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const PieChartThree = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  const [time, setTime] = React.useState("");

  const handleChange = (event) => {
    setTime(event.target.value);
  };

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }
    const myChartRef = chartRef.current.getContext("2d");

    chartInstance.current = new Chart(myChartRef, {
      type: "doughnut",
      data: {
        labels: ["orange", "caribbean"],
        datasets: [
          {
            label: "Data",
            data: [25, 75],
            backgroundColor: ["orange", "#00cc99"],
          },
        ],
      },
    });
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  });

  return (
    <>
      <div className="PieChartOne01">
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="h6">
            <ShoppingCartIcon sx={{ color: "orange" }} />
            Abandoned Cart
          </Typography>

          <FormControl
            sx={{ m: 1, minWidth: 120, alignSelf: "flex-start" }}
            size="small"
          >
            <InputLabel id="demo-select-small-label">Today</InputLabel>
            <Select
              labelId="demo-select-small-label"
              id="demo-select-small"
              value={time}
              label="Time"
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={7}>Weekly</MenuItem>
              <MenuItem value={30}>Monthly</MenuItem>
              <MenuItem value={365}>Yearly</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontSize: "14px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <SquareIcon sx={{ color: "red" }} />
            <div>
              <span style={{ fontWeight: "800" }}>20</span>
              <br />
              Abandoned Cart
            </div>
          </Typography>

          <Typography
            variant="h6"
            sx={{
              fontSize: "14px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <SquareIcon sx={{ color: "#ff0066" }} />
            <div>
              <span style={{ fontWeight: "800" }}>20</span>
              <br />
              Abandoned Cart
            </div>
          </Typography>
        </Box>
        <Box
          style={{
            width: "200px",
            margin: "auto",
          }}
        >
          <canvas ref={chartRef} />
        </Box>
      </div>
    </>
  );
};

export default PieChartThree;

import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const BarChartOne = () => {
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

    const barColors = [
      "rgb(0, 101, 193)",
      "rgb(0, 101, 193)",
      "rgb(0, 101, 193)",
      "rgb(0, 101, 193)",
      "rgb(0, 101, 193)",
    ];
    chartInstance.current = new Chart(myChartRef, {
      type: "bar",
      data: {
        labels: ["label 1", "label 2", "label 3", "label 4", "label 5"],
        datasets: [
          {
            label: "Data",
            data: [12, 19, 8, 4, 8],
            backgroundColor: barColors,
            barPercentage: 0.2,
            borderRadius: 10,
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
      <div className="BarChartOne01">
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="h6">
            Total Orders
            <br />
            <Typography paragraph style={{ fontWeight: "800" }}>
              <CurrencyRupeeIcon style={{ fontSize: "15px" }} />
              400
              <span
                style={{ color: "green", fontSize: "12px", fontWeight: "200" }}
              >
                <ArrowUpwardIcon sx={{ fontSize: "12px" }} />
                11.94%
              </span>
            </Typography>
          </Typography>
          <FormControl
            sx={{
              m: 1,
              minWidth: 120,
              alignSelf: "flex-start",
            }}
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
        <canvas ref={chartRef} />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="h6" sx={{ fontSize: "15px" }}>
            Categories
            <br />
            <Typography paragraph style={{ fontWeight: "800" }}>
              12
              <span
                style={{ color: "green", fontSize: "12px", fontWeight: "200" }}
              >
                <ArrowUpwardIcon sx={{ fontSize: "12px" }} />
                11.94%
              </span>
            </Typography>
          </Typography>

          <Typography variant="h6" sx={{ fontSize: "15px" }}>
            Sub Categories
            <br />
            <Typography paragraph style={{ fontWeight: "800" }}>
              06
              <span
                style={{
                  color: "green",
                  fontSize: "12px",
                  fontWeight: "200",
                }}
              >
                <ArrowUpwardIcon sx={{ fontSize: "12px" }} />
                11.94%
              </span>
            </Typography>
          </Typography>
        </Box>
      </div>
    </>
  );
};

export default BarChartOne;

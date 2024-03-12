import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import DownloadIcon from "@mui/icons-material/Download";

import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const CustomersVsDate = () => {
  const [time, setTime] = React.useState("");

  const handleChange = (event) => {
    setTime(event.target.value);
  };

  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }
    const myChartRef = chartRef.current.getContext("2d");

    const barColors = [
      "rgba(255, 99, 132, 0.2)",
      "rgba(255, 159, 64, 0.2)",
      "rgba(255, 205, 86, 0.2)",
      "rgba(75, 192, 192, 0.2)",
      "rgba(54, 162, 235, 0.2)",
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
      <Box>
        <Box sx={{ marginTop: "3rem", width: "48%" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box>
              <Typography variant="h5">Orders Vs Date</Typography>
            </Box>
            <Button
              sx={{ mt: 1.3, mb: 1.3, minWidth: 250, background: "red" }}
              variant="contained"
            >
              <DownloadIcon />
              Download to Excel
            </Button>
          </Box>

          <div
            style={{
              boxShadow:
                "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
              }}
            >
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
            <canvas ref={chartRef} />
          </div>
        </Box>
      </Box>
    </>
  );
};

export default CustomersVsDate;

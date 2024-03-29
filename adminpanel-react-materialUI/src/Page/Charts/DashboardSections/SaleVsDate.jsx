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

const SaleVsDate = () => {
  const [time, setTime] = React.useState("");

  const handleChange = (event) => {
    setTime(event.target.value);
  };

  const chartRef = useRef(null);
  const secondChartRef = useRef(null);
  const chartInstance = useRef(null);
  const secondChartInstance = useRef(null);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }
    const myChartRef = chartRef.current.getContext("2d");

    const barColors = ["#F58634", "#F58634", "#F58634", "#F58634", "#F58634"];
    chartInstance.current = new Chart(myChartRef, {
      type: "bar",
      options: {
        scales: {
          y: {
            title: {
              display: true,
              text: "No. of Customers Regitered",
              color: "#222222",
              font: {
                size: 16,
              },
            },
          },
          x: {
            title: {
              display: true,
              text: "Date",
              color: "#222222",
              font: {
                size: 16,
              },
            },
          },
        },
      },
      data: {
        labels: [
          "10-03-2023",
          "24-03-2023",
          "17-04-2023",
          "24-04-2023",
          "29-04-2023",
        ],
        datasets: [
          {
            label: "Data",
            data: [12, 19, 8, 4, 8],
            backgroundColor: barColors,
            barPercentage: 0.1,
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

  useEffect(() => {
    if (secondChartInstance.current) {
      secondChartInstance.current.destroy();
    }
    const mySecondChartRef = secondChartRef.current.getContext("2d");

    const barColors = ["#F58634", "#F58634", "#F58634", "#F58634", "#F58634"];
    secondChartInstance.current = new Chart(mySecondChartRef, {
      type: "bar",
      options: {
        scales: {
          y: {
            title: {
              display: true,
              text: "Sale in Rupees",
              color: "#222222",
              font: {
                size: 16,
              },
            },
          },
          x: {
            title: {
              display: true,
              text: "Date",
              color: "#222222",
              font: {
                size: 16,
              },
            },
          },
        },
      },
      scales: {
        yAxes: [
          {
            scaleLabel: {
              display: true,
              labelString: "probability",
            },
          },
        ],
      },
      data: {
        labels: [
          "10-03-2023",
          "24-03-2023",
          "17-04-2023",
          "24-04-2023",
          "29-04-2023",
        ],
        datasets: [
          {
            label: "Data",
            data: [12, 19, 8, 4, 8],
            backgroundColor: barColors,
            barPercentage: 0.1,
            borderRadius: 10,
          },
        ],
      },
    });
    return () => {
      if (secondChartInstance.current) {
        secondChartInstance.current.destroy();
      }
    };
  });

  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ marginTop: "3rem", width: "48.5%" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box>
              <Typography
                sx={{
                  fontWeight: "800",
                  fontSize: "24px",
                  fontFamily: "Nunito",
                  color: "rgba(34, 34, 34, 1)",
                }}
              >
                Sales Vs Date
              </Typography>
            </Box>
            {/* <Button
              sx={{
                mt: 1.3,
                mb: 1.3,
                minWidth: 250,
                background: "#F58634",
                borderRadius: "8px",
                boxShadow: "none",
              }}
              variant="contained"
            >
              <DownloadIcon />
              Download to Excel
            </Button> */}
            <Button
              sx={{
                mt: 1.3,
                mb: 1.3,
                background: "#F58634",
                borderRadius: "8px",
                padding: "11px",
                width: "200px",
                fontSize: "14px",
                boxShadow: "none",
                textTransform: "initial",
                fontWeight: "700",
              }}
              variant="contained"
            >
              <DownloadIcon />
              Download to Excel
            </Button>
          </Box>

          <div
            style={{
              background: "white",
              padding: "15px",
            }}
            className="boxShadow"
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
              }}
            >
              <FormControl
                sx={{ m: 1, minWidth: 90, alignSelf: "flex-start" }}
                size="small"
              >
                <InputLabel id="demo-select-small-label">Today</InputLabel>
                <Select
                  labelId="demo-select-small-label"
                  id="demo-select-small"
                  value={time}
                  label="Time"
                  onChange={handleChange}
                  sx={{
                    boxShadow: "none",
                    ".MuiOutlinedInput-notchedOutline": { border: 0 },
                  }}
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
            <canvas ref={secondChartRef} />
          </div>
        </Box>

        <Box sx={{ marginTop: "3rem", width: "48.5%" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box>
              <Typography
                sx={{
                  fontWeight: "800",
                  fontSize: "24px",
                  fontFamily: "Nunito",
                  color: "rgba(34, 34, 34, 1)",
                }}
              >
                Customers Vs Date
              </Typography>
            </Box>
            {/* <Button
              sx={{
                mt: 1.3,
                mb: 1.3,
                minWidth: 250,
                background: "#F58634",
                borderRadius: "8px",
                boxShadow: "none",
              }}
              variant="contained"
            >
              <DownloadIcon />
              Download to Excel
            </Button> */}
            <Button
              sx={{
                mt: 1.3,
                mb: 1.3,
                background: "#F58634",
                borderRadius: "8px",
                padding: "11px",
                width: "200px",
                fontSize: "14px",
                boxShadow: "none",
                textTransform: "initial",
                fontWeight: "700",
              }}
              variant="contained"
            >
              <DownloadIcon />
              Download to Excel
            </Button>
          </Box>

          <div
            style={{
              background: "white",
              padding: "15px",
            }}
            className="boxShadow"
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
              }}
            >
              <FormControl
                sx={{ m: 1, minWidth: 90, alignSelf: "flex-start" }}
                size="small"
              >
                <InputLabel id="demo-select-small-label">Today</InputLabel>
                <Select
                  labelId="demo-select-small-label"
                  id="demo-select-small"
                  value={time}
                  label="Time"
                  onChange={handleChange}
                  sx={{
                    boxShadow: "none",
                    ".MuiOutlinedInput-notchedOutline": { border: 0 },
                  }}
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

export default SaleVsDate;

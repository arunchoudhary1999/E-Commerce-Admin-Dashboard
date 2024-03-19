import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import DownloadIcon from "@mui/icons-material/Download";

import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const columns = [
  { id: "name", label: "Name", minWidth: 170 },
  { id: "code", label: "ISO\u00a0Code", minWidth: 100 },
  {
    id: "density",
    label: "Density",
    minWidth: 170,
    align: "right",
    format: (value) => value.toFixed(2),
  },
];

function createData(name, code, population, size) {
  const density = population / size;
  return { name, code, population, size, density };
}

const rows = [
  createData("India", "IN", 1324171354, 3287263),
  createData("China", "CN", 1403500365, 9596961),
  createData("Italy", "IT", 60483973, 301340),
  createData("United States", "US", 327167434, 9833520),
  createData("Canada", "CA", 37602103, 9984670),
  createData("Australia", "AU", 25475400, 7692024),
  createData("Germany", "DE", 83019200, 357578),
  createData("Ireland", "IE", 4857000, 70273),
  createData("Mexico", "MX", 126577691, 1972550),
  createData("Japan", "JP", 126317000, 377973),
  createData("France", "FR", 67022000, 640679),
  createData("United Kingdom", "GB", 67545757, 242495),
  createData("Russia", "RU", 146793744, 17098246),
  createData("Nigeria", "NG", 200962417, 923768),
  createData("Brazil", "BR", 210147125, 8515767),
];

const CustomersOrders = () => {
  const [time, setTime] = React.useState("");

  const handleChange = (event) => {
    setTime(event.target.value);
  };

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const chartRef = useRef(null);
  const chartInstance = useRef(null);

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
              text: "No. of Orders",
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

  return (
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
              Top Customers by Orders
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <FormControl sx={{ m: 1, minWidth: 90 }} size="small">
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
            <DownloadIcon sx={{ color: "#F58634" }} />
          </Box>
        </Box>

        <Box
          sx={{
            width: "100%",
            overflow: "hidden",
          }}
          className="boxShadow"
        >
          <TableContainer>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{
                        minWidth: column.minWidth,
                        background: "#F58634",
                        color: "white",
                      }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={row.code}
                      >
                        {columns.map((column) => {
                          const value = row[column.id];
                          return (
                            <TableCell key={column.id} align={column.align}>
                              {column.format && typeof value === "number"
                                ? column.format(value)
                                : value}
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            style={{
              display: "flex",
              justifyContent: "center",
            }}
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Box>
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
              Orders Vs Date
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
  );
};

export default CustomersOrders;

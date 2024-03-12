import Box from "@mui/material/Box";
import StairsIcon from "@mui/icons-material/Stairs";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import React from "react";

function createTableChartData(product, orders, qty, sales) {
  return { product, orders, qty, sales };
}

const rowsTableChart = [
  createTableChartData("Mouse", 2, 50, "$200.00"),
  createTableChartData("Mobile", 2, 50, "$200.00"),
  createTableChartData("Camera", 2, 50, "$200.00"),
  createTableChartData("Joystick", 2, 50, "$200.00"),
  createTableChartData("Mouse", 2, 50, "$200.00"),
];

const TableChartFive = () => {
  const [time, setTime] = React.useState("");

  const handleChange = (event) => {
    setTime(event.target.value);
  };

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
            <StairsIcon style={{ marginBottom: "-4", color: "orange" }} />
            Top Selling
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
          style={{
            margin: "auto",
          }}
        >
          <TableContainer>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell sx={{ color: "orange" }}>Product</TableCell>
                  <TableCell sx={{ color: "orange" }} align="right">
                    Orders
                  </TableCell>
                  <TableCell sx={{ color: "orange" }} align="right">
                    Qty
                  </TableCell>
                  <TableCell sx={{ color: "orange" }} align="right">
                    Sales
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rowsTableChart.map((row) => (
                  <TableRow
                    key={row.product}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.product}
                    </TableCell>
                    <TableCell align="right">{row.orders}</TableCell>
                    <TableCell align="right">{row.qty}</TableCell>
                    <TableCell align="right">{row.sales}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </div>
    </>
  );
};

export default TableChartFive;

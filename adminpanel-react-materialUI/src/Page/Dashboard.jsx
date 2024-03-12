import React from "react";
import SideBar from "../Component/SideBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import BarChartOne from "./Charts/BarChartOne";
import BarChartTwo from "./Charts/BarChartTwo";
import PieChartThree from "./Charts/PieChartThree";
import RangeChartFour from "./Charts/RangeChartFour";
import TableChartFive from "./Charts/TableChartFive";
import CardChartSix from "./Charts/CardChartSix";
import SellingProducts from "./Charts/DashboardSections/SellingProducts";
import CustomersOrders from "./Charts/DashboardSections/CustomersOrders";
import SaleVsDate from "./Charts/DashboardSections/SaleVsDate";

export default function Dashboard() {
  const [time, setTime] = React.useState("");

  const handleChange = (event) => {
    setTime(event.target.value);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <SideBar />
      <Box component="main" sx={{ flexGrow: 1, p: 3, marginTop: "55px" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="h5">Welcome back, Admin</Typography>
          <FormControl sx={{ m: 1, minWidth: 250 }} size="small">
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
            justifyContent: "space-between",
            marginTop: "15px",
            marginBottom: "25px",
          }}
        >
          <BarChartOne />
          <BarChartTwo />
          <PieChartThree />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "15px",
            marginBottom: "15px",
          }}
        >
          <RangeChartFour />
          <TableChartFive />
          <CardChartSix />
        </Box>

        <Box>
          <SellingProducts />
          <CustomersOrders />
          <SaleVsDate />
        </Box>
      </Box>
    </Box>
  );
}

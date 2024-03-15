import PersonIcon from "@mui/icons-material/Person";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import React from "react";
import Ranges from "./Ranges";

const RangeChartFour = () => {
  const [time, setTime] = React.useState("");

  const handleChange = (event) => {
    setTime(event.target.value);
  };

  return (
    <>
      <div className="RangeChartOne01">
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              fontWeight: "700",
              fontSize: "16px",
              fontFamily: "Nunito",
              color: "rgba(34, 34, 34, 1)",
            }}
          >
            <PersonIcon sx={{ marginBottom: "-4px", color: "orange", mr: 1 }} />
            New Users
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
          <Ranges />
        </Box>
      </div>
    </>
  );
};

export default RangeChartFour;

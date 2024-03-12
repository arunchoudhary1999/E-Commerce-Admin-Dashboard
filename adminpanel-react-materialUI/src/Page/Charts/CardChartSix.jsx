import ViewInArIcon from "@mui/icons-material/ViewInAr";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import React from "react";

const CardChartSix = () => {
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
            <ViewInArIcon style={{ marginBottom: "-4", color: "orange" }} />
            Order Status
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
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            // flexDirection: "wrap",
            justifyContent: "space-between",
            margin: "10px 0",
          }}
        >
          <Box
            sx={{
              display: "flex",
              width: "45%",
              paddingTop: "10px",
              paddingBottom: "10px",
              marginTop: "10px",
              marginBottom: "10px",
              justifyContent: "space-evenly",
              boxShadow:
                "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;",
            }}
          >
            <Typography variant="h6" sx={{ color: "orange", fontSize: "15px" }}>
              160
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontSize: "15px",
              }}
            >
              All
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              width: "45%",
              marginTop: "10px",
              marginBottom: "10px",
              paddingTop: "10px",
              paddingBottom: "10px",
              justifyContent: "space-evenly",
              boxShadow:
                "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;",
            }}
          >
            <Typography variant="h6" sx={{ color: "orange", fontSize: "15px" }}>
              40
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontSize: "15px",
              }}
            >
              Pending
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              width: "45%",
              paddingTop: "10px",
              paddingBottom: "10px",
              marginTop: "10px",
              marginBottom: "10px",
              justifyContent: "space-evenly",
              boxShadow:
                "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;",
            }}
          >
            <Typography variant="h6" sx={{ color: "orange", fontSize: "15px" }}>
              120
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontSize: "15px",
              }}
            >
              Confirmed
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              width: "45%",
              paddingTop: "10px",
              paddingBottom: "10px",
              marginTop: "10px",
              marginBottom: "10px",
              justifyContent: "space-evenly",
              boxShadow:
                "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;",
            }}
          >
            <Typography variant="h6" sx={{ color: "orange", fontSize: "15px" }}>
              60
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontSize: "15px",
              }}
            >
              In packing
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              width: "45%",
              paddingTop: "10px",
              paddingBottom: "10px",
              marginTop: "10px",
              marginBottom: "10px",
              justifyContent: "space-evenly",
              boxShadow:
                "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;",
            }}
          >
            <Typography variant="h6" sx={{ color: "orange", fontSize: "15px" }}>
              140
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontSize: "15px",
              }}
            >
              Dispatched
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              width: "45%",
              marginTop: "10px",
              marginBottom: "10px",
              paddingTop: "10px",
              paddingBottom: "10px",
              justifyContent: "space-evenly",
              boxShadow:
                "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;",
            }}
          >
            <Typography variant="h6" sx={{ color: "orange", fontSize: "15px" }}>
              100
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontSize: "15px",
              }}
            >
              Delivered
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              width: "45%",
              marginTop: "10px",
              paddingTop: "10px",
              paddingBottom: "10px",
              marginBottom: "10px",
              justifyContent: "space-evenly",
              boxShadow:
                "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;",
            }}
          >
            <Typography variant="h6" sx={{ color: "orange", fontSize: "15px" }}>
              160
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontSize: "15px",
              }}
            >
              Cancelled
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              width: "45%",
              marginTop: "10px",
              paddingTop: "10px",
              paddingBottom: "10px",
              marginBottom: "10px",
              justifyContent: "space-evenly",
              boxShadow:
                "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;",
            }}
          >
            <Typography variant="h6" sx={{ color: "orange", fontSize: "15px" }}>
              160
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontSize: "15px",
              }}
            >
              Checkout
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              width: "45%",
              marginTop: "10px",
              paddingTop: "10px",
              paddingBottom: "10px",
              marginBottom: "10px",
              justifyContent: "space-evenly",
              boxShadow:
                "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;",
            }}
          >
            <Typography variant="h6" sx={{ color: "orange", fontSize: "15px" }}>
              110
            </Typography>
            <Typography variant="h6" sx={{ fontSize: "15px" }}>
              Cancel Request
            </Typography>
          </Box>
        </div>
      </div>
    </>
  );
};

export default CardChartSix;

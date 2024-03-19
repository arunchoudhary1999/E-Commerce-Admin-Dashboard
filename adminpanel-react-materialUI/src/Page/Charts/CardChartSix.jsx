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
          <Typography
            sx={{
              fontWeight: "700",
              fontSize: "16px",
              fontFamily: "Nunito",
              color: "rgba(34, 34, 34, 1)",
            }}
          >
            <ViewInArIcon
              sx={{ marginBottom: "-4px", color: "#F58634", mr: 1 }}
            />
            Order Status
          </Typography>

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
              borderRadius: "8px",
              display: "flex",
              width: "45%",
              paddingTop: "10px",
              paddingBottom: "10px",
              marginTop: "10px",
              marginBottom: "10px",
              // justifyContent: "space-evenly",
              boxShadow: "rgba(34, 34, 34, 0.1) 0px 8px 15px 0px;",
              // boxShadow:
              //   "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;",
            }}
          >
            <Box sx={{ width: "40%", textAlign: "center" }}>
              <Typography
                variant="h6"
                sx={{ color: "#F58634", fontSize: "15px" }}
              >
                160
              </Typography>
            </Box>
            <Box>
              <Typography
                variant="h6"
                sx={{
                  fontSize: "15px",
                }}
              >
                All
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              borderRadius: "8px",
              display: "flex",
              width: "45%",
              marginTop: "10px",
              marginBottom: "10px",
              paddingTop: "10px",
              paddingBottom: "10px",
              // justifyContent: "space-evenly",
              boxShadow: "rgba(34, 34, 34, 0.1) 0px 8px 15px 0px;",
            }}
          >
            <Box sx={{ width: "40%", textAlign: "center" }}>
              <Typography
                variant="h6"
                sx={{ color: "#F58634", fontSize: "15px" }}
              >
                40
              </Typography>
            </Box>
            <Box>
              <Typography
                variant="h6"
                sx={{
                  fontSize: "15px",
                }}
              >
                Pending
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              borderRadius: "8px",
              display: "flex",
              width: "45%",
              paddingTop: "10px",
              paddingBottom: "10px",
              marginTop: "10px",
              marginBottom: "10px",
              // justifyContent: "space-evenly",
              boxShadow: "rgba(34, 34, 34, 0.1) 0px 8px 15px 0px;",
            }}
          >
            <Box sx={{ width: "40%", textAlign: "center" }}>
              <Typography
                variant="h6"
                sx={{ color: "#F58634", fontSize: "15px" }}
              >
                120
              </Typography>
            </Box>
            <Box>
              <Typography
                variant="h6"
                sx={{
                  fontSize: "15px",
                }}
              >
                Confirmed
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              borderRadius: "8px",
              display: "flex",
              width: "45%",
              paddingTop: "10px",
              paddingBottom: "10px",
              marginTop: "10px",
              marginBottom: "10px",
              // justifyContent: "space-evenly",
              boxShadow: "rgba(34, 34, 34, 0.1) 0px 8px 15px 0px;",
            }}
          >
            <Box sx={{ width: "40%", textAlign: "center" }}>
              <Typography
                variant="h6"
                sx={{ color: "#F58634", fontSize: "15px" }}
              >
                60
              </Typography>
            </Box>
            <Box>
              <Typography
                variant="h6"
                sx={{
                  fontSize: "15px",
                }}
              >
                In packing
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              borderRadius: "8px",
              display: "flex",
              width: "45%",
              paddingTop: "10px",
              paddingBottom: "10px",
              marginTop: "10px",
              marginBottom: "10px",
              // justifyContent: "space-evenly",
              boxShadow: "rgba(34, 34, 34, 0.1) 0px 8px 15px 0px;",
            }}
          >
            <Box sx={{ width: "40%", textAlign: "center" }}>
              <Typography
                variant="h6"
                sx={{ color: "#F58634", fontSize: "15px" }}
              >
                140
              </Typography>
            </Box>
            <Box>
              <Typography
                variant="h6"
                sx={{
                  fontSize: "15px",
                }}
              >
                Dispatched
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              borderRadius: "8px",
              display: "flex",
              width: "45%",
              marginTop: "10px",
              marginBottom: "10px",
              paddingTop: "10px",
              paddingBottom: "10px",
              // justifyContent: "space-evenly",
              boxShadow: "rgba(34, 34, 34, 0.1) 0px 8px 15px 0px;",
            }}
          >
            <Box sx={{ width: "40%", textAlign: "center" }}>
              <Typography
                variant="h6"
                sx={{ color: "#F58634", fontSize: "15px" }}
              >
                100
              </Typography>
            </Box>
            <Box>
              <Typography
                variant="h6"
                sx={{
                  fontSize: "15px",
                }}
              >
                Delivered
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{
              borderRadius: "8px",
              display: "flex",
              width: "45%",
              marginTop: "10px",
              paddingTop: "10px",
              paddingBottom: "10px",
              marginBottom: "10px",
              // justifyContent: "space-evenly",
              boxShadow: "rgba(34, 34, 34, 0.1) 0px 8px 15px 0px;",
            }}
          >
            <Box sx={{ width: "40%", textAlign: "center" }}>
              <Typography
                variant="h6"
                sx={{ color: "#F58634", fontSize: "15px" }}
              >
                160
              </Typography>
            </Box>
            <Box>
              <Typography
                variant="h6"
                sx={{
                  fontSize: "15px",
                }}
              >
                Cancelled
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              borderRadius: "8px",
              display: "flex",
              width: "45%",
              marginTop: "10px",
              paddingTop: "10px",
              paddingBottom: "10px",
              marginBottom: "10px",
              // justifyContent: "space-evenly",
              boxShadow: "rgba(34, 34, 34, 0.1) 0px 8px 15px 0px;",
            }}
          >
            <Box sx={{ width: "40%", textAlign: "center" }}>
              <Typography
                variant="h6"
                sx={{ color: "#F58634", fontSize: "15px" }}
              >
                160
              </Typography>
            </Box>
            <Box>
              <Typography
                variant="h6"
                sx={{
                  fontSize: "15px",
                }}
              >
                Checkout
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{
              borderRadius: "8px",
              display: "flex",
              width: "45%",
              marginTop: "10px",
              paddingTop: "10px",
              paddingBottom: "10px",
              marginBottom: "10px",
              // justifyContent: "space-evenly",
              boxShadow: "rgba(34, 34, 34, 0.1) 0px 8px 15px 0px;",
            }}
          >
            <Box sx={{ width: "40%", textAlign: "center" }}>
              <Typography
                variant="h6"
                sx={{ color: "#F58634", fontSize: "15px" }}
              >
                110
              </Typography>
            </Box>
            <Box>
              <Typography
                variant="h6"
                sx={{
                  fontSize: "15px",
                }}
              >
                Cancel Req
              </Typography>
            </Box>
          </Box>
        </div>
      </div>
    </>
  );
};

export default CardChartSix;

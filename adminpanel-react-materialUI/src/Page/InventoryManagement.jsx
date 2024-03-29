import React from "react";
import SideBar from "../Component/SideBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import SourceIcon from "@mui/icons-material/Source";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import InventoryManagementTable from "../Page/InventroyManagementSection/InventoryManagementTable";
export default function InventoryManagement() {
  const navigate = useNavigate();
  const [time, setTime] = React.useState("");
  const handleChange = (event) => {
    setTime(event.target.value);
  };
  return (
    <Box sx={{ display: "flex", background: "#FAFAFB" }}>
      <SideBar />
      <Box component="main" sx={{ flexGrow: 1, p: 3, marginTop: "55px" }}>
        <Box sx={{ marginTop: "1rem" }}>
          <Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Button
                sx={{
                  background: "#F58634",
                  borderRadius: "12px",
                  height: "45px",
                  fontSize: "15.64px",
                  boxShadow: "none",
                  textTransform: "initial",
                  fontWeight: "700",
                  padding: "17px 25px 17px 25px",
                }}
                variant="contained"
              >
                Inventory Management
              </Button>

              <Button
                sx={{
                  background: "#F58634",
                  borderRadius: "12px",
                  boxShadow: "none",
                  height: "45px",
                  fontSize: "15.64px",
                  textTransform: "initial",
                  fontWeight: "700",
                  padding: "17px 25px 17px 25px",
                }}
                variant="contained"
              >
                <AddIcon sx={{ mr: 1 }} />
                Add New Product
              </Button>
            </Box>

            <Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "25px",
                  marginBottom: "20px",
                }}
              >
                <div
                  className="ProductManagementProductDetailsSecond00"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: "4rem",
                    }}
                  >
                    <SourceIcon
                      sx={{
                        color: "#F58634",
                        background: "#ffffcc",
                        p: 1,
                        fontSize: "40px",
                        borderRadius: "10px",
                      }}
                    />
                    {/* <FormControl
                      sx={{ minWidth: 100, alignSelf: "flex-start" }}
                      size="small"
                    >
                      <InputLabel id="demo-select-small-label">
                        Today
                      </InputLabel>
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
                    </FormControl> */}
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{ fontSize: "14px", color: "grey" }}
                    >
                      All Products
                      <br />
                      <Typography
                        paragraph
                        style={{ fontWeight: "500", color: "black" }}
                      >
                        350
                      </Typography>
                    </Typography>

                    <Typography
                      variant="h6"
                      sx={{ fontSize: "14px", color: "grey" }}
                    >
                      Active
                      <br />
                      <Typography
                        paragraph
                        style={{ fontWeight: "500", color: "black" }}
                      >
                        316
                        <span
                          style={{
                            fontSize: "12px",
                            color: "grey",
                            marginLeft: "4px",
                          }}
                        >
                          86%
                        </span>
                      </Typography>
                    </Typography>
                  </Box>
                </div>

                <div
                  className="ProductManagementProductDetailsSecond00"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: "4rem",
                    }}
                  >
                    <PeopleOutlineIcon
                      sx={{
                        color: "#F58634",
                        background: "#ffffcc",
                        p: 1,
                        fontSize: "40px",
                        borderRadius: "10px",
                      }}
                    />
                    <FormControl
                      sx={{ minWidth: 90, alignSelf: "flex-start" }}
                      size="small"
                    >
                      <InputLabel id="demo-select-small-label">
                        Today
                      </InputLabel>
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
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{ fontSize: "14px", color: "red" }}
                    >
                      Low Stock Alert
                      <br />
                      <Typography
                        paragraph
                        style={{ fontWeight: "500", color: "black" }}
                      >
                        23
                      </Typography>
                    </Typography>

                    <Typography
                      variant="h6"
                      sx={{ fontSize: "14px", color: "grey" }}
                    >
                      Expired
                      <br />
                      <Typography
                        paragraph
                        style={{ fontWeight: "500", color: "black" }}
                      >
                        3
                      </Typography>
                    </Typography>

                    <Typography
                      variant="h6"
                      sx={{ fontSize: "14px", color: "grey" }}
                    >
                      1 Start Rating
                      <br />
                      <Typography
                        paragraph
                        style={{ fontWeight: "500", color: "black" }}
                      >
                        2
                      </Typography>
                    </Typography>
                  </Box>
                </div>
              </Box>
              <Box>
                <InventoryManagementTable />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

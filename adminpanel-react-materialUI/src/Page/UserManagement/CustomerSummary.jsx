import React from "react";
import SideBar from "../../Component/SideBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import ScheduleIcon from "@mui/icons-material/Schedule";
import ListItem from "@mui/material/ListItem";
import Button from "@mui/material/Button";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useNavigate } from "react-router-dom";
import FormControl from "@mui/material/FormControl";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import CustomerModalTable from "../UserManagement/CustomerModalTable";
import PersonIcon from "@mui/icons-material/Person";
import PlaceIcon from "@mui/icons-material/Place";

export default function CustomerSummary() {
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
              <div>
                <Breadcrumbs aria-label="breadcrumb">
                  <Link
                    underline="hover"
                    color="inherit"
                    style={{ fontSize: "14px" }}
                  >
                    <span style={{ color: "black" }}>Customer ID</span> #CZ1235
                  </Link>
                  <Link
                    underline="hover"
                    color="inherit"
                    style={{ fontSize: "14px" }}
                  >
                    <span style={{ color: "black" }}>Customer Since</span> 12
                    Nov 2023 - 12:25 pm
                  </Link>
                </Breadcrumbs>
              </div>

              <Box>
                <Button
                  sx={{
                    color: "#b30000",
                    borderColor: "#b30000",
                    mr: 2,
                    fontSize: "13px",
                  }}
                  variant="outlined"
                >
                  Send Recovery Email
                </Button>

                <Button
                  sx={{
                    color: "#b30000",
                    borderColor: "#b30000",
                    mr: 2,
                    fontSize: "13px",
                  }}
                  variant="outlined"
                >
                  Reset Password
                </Button>

                <Button
                  sx={{ background: "orange", mr: 2, fontSize: "13px" }}
                  variant="contained"
                >
                  <ListItem disablePadding onClick={() => {}}>
                    Edit Customer &nbsp; |
                  </ListItem>
                  <KeyboardArrowDownIcon sx={{ ml: 1 }} />
                </Button>

                <Button
                  sx={{ background: "#b30000", fontSize: "13px" }}
                  variant="contained"
                >
                  Suspend Customer
                </Button>
              </Box>
            </Box>

            <Box>
              <Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: "25px",
                    marginBottom: "25px",
                  }}
                >
                  <div
                    className="CustomerSummary00"
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
                        marginBottom: "30px",
                      }}
                    >
                      <PersonIcon
                        sx={{
                          color: "orange",
                          background: "#ffeb99",
                          p: 1,
                          fontSize: "40px",
                          borderRadius: "10px",
                        }}
                      />
                      <Typography
                        variant="h6"
                        sx={{
                          fontSize: "14px",
                          fontWeight: "400",
                          mb: -2,
                        }}
                      >
                        XYZ PANDIT
                        <br />
                        <Typography paragraph style={{ fontSize: "12px" }}>
                          Partner since 12 Sept 2022
                        </Typography>
                      </Typography>
                      <Button
                        className="pendingButton"
                        variant="contained"
                        sx={{
                          color: "green",
                          background: "lightGreen",
                          padding: "0 8px",
                          textTransform: "lowercase",
                        }}
                      >
                        Active
                      </Button>
                    </Box>

                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Typography variant="h6" sx={{ fontSize: "15px" }}>
                        Phone
                        <br />
                        <Typography
                          paragraph
                          style={{ fontWeight: "600", color: "black" }}
                        >
                          +31-9874563210
                        </Typography>
                      </Typography>

                      <Typography variant="h6" sx={{ fontSize: "15px" }}>
                        Email
                        <br />
                        <Typography
                          paragraph
                          style={{ fontWeight: "600", color: "black" }}
                        >
                          ionsravan.gmail.com
                        </Typography>
                      </Typography>
                    </Box>
                  </div>

                  <div
                    className="CustomerSummary01"
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
                        marginBottom: "30px",
                      }}
                    >
                      <PlaceIcon
                        sx={{
                          color: "orange",
                          background: "#ffeb99",
                          p: 1,
                          fontSize: "40px",
                          borderRadius: "10px",
                        }}
                      />
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Typography variant="h6" sx={{ fontSize: "15px" }}>
                        Home Address
                        <br />
                        <Typography
                          paragraph
                          style={{ fontWeight: "600", color: "black" }}
                        >
                          108, Village - Potlod, Tehsil - Sanwer, Dist - Indore,
                          Madhya Pradesh
                        </Typography>
                      </Typography>
                    </Box>
                  </div>

                  <div
                    className="CustomerSummary01"
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
                        marginBottom: "30px",
                      }}
                    >
                      <ScheduleIcon
                        sx={{
                          color: "orange",
                          background: "#ffeb99",
                          p: 1,
                          fontSize: "40px",
                          borderRadius: "10px",
                        }}
                      />
                      <FormControl
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
                      </FormControl>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Typography variant="h6" sx={{ fontSize: "15px" }}>
                        Total Orders
                        <br />
                        <Typography
                          paragraph
                          style={{ fontWeight: "600", color: "black" }}
                        >
                          $3,36,499.00
                        </Typography>
                      </Typography>
                    </Box>
                  </div>

                  <div
                    className="CustomerSummary01"
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
                        marginBottom: "30px",
                      }}
                    >
                      <ShoppingCartIcon
                        sx={{
                          color: "orange",
                          background: "#ffeb99",
                          p: 1,
                          fontSize: "40px",
                          borderRadius: "10px",
                        }}
                      />
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
                        sx={{ fontSize: "15px", color: "red" }}
                      >
                        Abandoned Cart
                        <br />
                        <Typography
                          paragraph
                          style={{ fontWeight: "600", color: "black" }}
                        >
                          2
                        </Typography>
                      </Typography>
                    </Box>
                  </div>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <div
                    className="CustomerSummary02"
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
                        marginBottom: "30px",
                      }}
                    >
                      <ShoppingBagIcon
                        sx={{
                          color: "orange",
                          background: "#ffeb99",
                          p: 1,
                          fontSize: "40px",
                          borderRadius: "10px",
                        }}
                      />
                      <FormControl
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
                      </FormControl>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Typography variant="h6" sx={{ fontSize: "15px" }}>
                        All Orders
                        <br />
                        <Typography
                          paragraph
                          style={{ fontWeight: "600", color: "black" }}
                        >
                          10
                        </Typography>
                      </Typography>

                      <Typography variant="h6" sx={{ fontSize: "15px" }}>
                        Pending
                        <br />
                        <Typography
                          paragraph
                          style={{ fontWeight: "600", color: "black" }}
                        >
                          2
                        </Typography>
                      </Typography>

                      <Typography variant="h6" sx={{ fontSize: "15px" }}>
                        completed
                        <br />
                        <Typography
                          paragraph
                          style={{ fontWeight: "600", color: "black" }}
                        >
                          8
                        </Typography>
                      </Typography>
                    </Box>
                  </div>

                  <div
                    className="CustomerSummary02"
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
                        marginBottom: "30px",
                      }}
                    >
                      <ShoppingBagIcon
                        sx={{
                          color: "orange",
                          background: "#ffeb99",
                          p: 1,
                          fontSize: "40px",
                          borderRadius: "10px",
                        }}
                      />
                      <FormControl
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
                      </FormControl>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Typography variant="h6" sx={{ fontSize: "15px" }}>
                        Canceled
                        <br />
                        <Typography
                          paragraph
                          style={{ fontWeight: "600", color: "black" }}
                        >
                          0
                        </Typography>
                      </Typography>

                      <Typography variant="h6" sx={{ fontSize: "15px" }}>
                        Returned
                        <br />
                        <Typography
                          paragraph
                          style={{ fontWeight: "600", color: "black" }}
                        >
                          0
                        </Typography>
                      </Typography>

                      <Typography variant="h6" sx={{ fontSize: "15px" }}>
                        Damaged
                        <br />
                        <Typography
                          paragraph
                          style={{ fontWeight: "600", color: "black" }}
                        >
                          0
                        </Typography>
                      </Typography>
                    </Box>
                  </div>
                </Box>
                <Box>
                  <CustomerModalTable />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
  },
];

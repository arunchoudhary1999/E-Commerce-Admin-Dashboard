import React from "react";
import SideBar from "../Component/SideBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import PersonIcon from "@mui/icons-material/Person";
import PlaceIcon from "@mui/icons-material/Place";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import PaymentIcon from "@mui/icons-material/Payment";
import ClearIcon from "@mui/icons-material/Clear";
import PaymentsManagementTable from "../Page/ProductManagementSection/PaymentsManagementTable";
import PaymentModalTable from "../Page/ProductManagementSection/PaymentModalTable";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
export default function PaymentsManagement() {
  const navigate = useNavigate();
  const [time, setTime] = React.useState("");
  const [open, openchange] = React.useState(false);

  const handleChange = (event) => {
    setTime(event.target.value);
  };

  const functionopenpopup = () => {
    openchange(true);
  };

  const closepopup = () => {
    openchange(false);
  };
  return (
    <Box sx={{ display: "flex", background: "#FAFAFB" }}>
      <SideBar />
      <Box component="main" sx={{ flexGrow: 1, p: 3, marginTop: "55px" }}>
        <Box sx={{ marginTop: "1rem" }}>
          <Box>
            <Box>
              <Button
                onClick={functionopenpopup}
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
                Payment Summary
              </Button>
              <Dialog open={open} onClose={closepopup} fullWidth maxWidth="lg">
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <DialogTitle variant="h5">
                    Order & Transaction Details
                  </DialogTitle>
                  <DialogTitle>
                    <ClearIcon
                      sx={{
                        color: "black",
                        background: "#ffeb99",
                        p: 1,
                        fontSize: "40px",
                        borderRadius: "10px",
                      }}
                      onClick={closepopup}
                    />
                  </DialogTitle>
                </Box>

                <DialogContent>
                  <div>
                    <Breadcrumbs aria-label="breadcrumb">
                      <Link
                        underline="hover"
                        color="inherit"
                        style={{ fontSize: "14px" }}
                      >
                        <span style={{ color: "black" }}>Order Number</span>{" "}
                        #9348fir72
                      </Link>
                      <Link
                        underline="hover"
                        color="inherit"
                        style={{ fontSize: "14px" }}
                      >
                        <span style={{ color: "black" }}>Order Date</span> 12
                        Nov 2023 - 12:25 pm
                      </Link>

                      <Link
                        underline="hover"
                        color="inherit"
                        style={{ fontSize: "14px" }}
                      >
                        <span style={{ color: "black" }}>Tracking ID </span>
                        IN63545115055CG
                      </Link>
                      <FileCopyIcon sx={{ color: "blue" }} />
                    </Breadcrumbs>
                  </div>
                  <DialogContentText>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginTop: "15px",
                        marginBottom: "20px",
                      }}
                    >
                      <div
                        className="OrderManagementModel"
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
                              color: "black",
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
                            Swapnil Joshi
                            <br />
                            <Typography paragraph style={{ fontSize: "12px" }}>
                              Customer since 12 Sept 2022
                            </Typography>
                          </Typography>
                          <Button
                            className="pendingButton"
                            variant="contained"
                            sx={{
                              color: "grey",
                              background: "#ffeb99",
                              padding: "0 8px",
                              textTransform: "lowercase",
                              borderRadius: "8px",
                              boxShadow: "none",
                            }}
                          >
                            Pending
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
                              swapnil.joshi.gmail.com
                            </Typography>
                          </Typography>
                        </Box>
                      </div>

                      <div
                        className="OrderManagementModel"
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
                              color: "black",
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
                              108, Village - Potlod, Tehsil - Sanwer, Dist -
                              Indore, Madhya Pradesh
                            </Typography>
                          </Typography>
                        </Box>
                      </div>

                      <div
                        className="OrderManagementModel"
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
                          <PaymentIcon
                            sx={{
                              color: "black",
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
                            Payment Method
                            <br />
                            <Typography
                              paragraph
                              style={{ fontWeight: "600", color: "black" }}
                            >
                              Master Card
                            </Typography>
                          </Typography>

                          <Typography variant="h6" sx={{ fontSize: "15px" }}>
                            Order Type
                            <br />
                            <Typography
                              paragraph
                              style={{ fontWeight: "600", color: "black" }}
                            >
                              Home Delivery
                            </Typography>
                          </Typography>
                        </Box>
                      </div>
                    </Box>
                    <Box>
                      <div
                        className="PaymentManagementModelcards"
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
                          <PaymentIcon
                            sx={{
                              color: "black",
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
                            Payment Method
                            <br />
                            <Typography
                              paragraph
                              style={{ fontWeight: "600", color: "black" }}
                            >
                              Master Card
                            </Typography>
                          </Typography>

                          <Typography variant="h6" sx={{ fontSize: "15px" }}>
                            Payment Gateway
                            <br />
                            <Typography
                              paragraph
                              style={{ fontWeight: "600", color: "black" }}
                            >
                              Viz Payments
                            </Typography>
                          </Typography>

                          <Typography variant="h6" sx={{ fontSize: "15px" }}>
                            Payment Date
                            <br />
                            <Typography
                              paragraph
                              style={{ fontWeight: "600", color: "black" }}
                            >
                              12/02/2024 11:20:00 AM
                            </Typography>
                          </Typography>

                          <Typography variant="h6" sx={{ fontSize: "15px" }}>
                            Payment Amount
                            <br />
                            <Typography
                              paragraph
                              style={{ fontWeight: "600", color: "black" }}
                            >
                              $5540.00
                            </Typography>
                          </Typography>

                          <Typography variant="h6" sx={{ fontSize: "15px" }}>
                            Transaction Charges
                            <br />
                            <Typography
                              paragraph
                              style={{ fontWeight: "600", color: "black" }}
                            >
                              $48.00
                            </Typography>
                          </Typography>
                        </Box>
                      </div>
                    </Box>
                    <Box>
                      <PaymentModalTable />
                    </Box>
                    <Box>
                      <div
                        className="PaymentManagementModelcards"
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
                            marginBottom: "10px",
                          }}
                        >
                          <Typography
                            variant="h5"
                            sx={{ color: "black", fontWeight: "500" }}
                          >
                            Payment Details
                          </Typography>
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          <Typography variant="h6" sx={{ fontSize: "15px" }}>
                            Order Amount
                            <br />
                            <Typography
                              paragraph
                              style={{ fontWeight: "600", color: "black" }}
                            >
                              $588.00
                            </Typography>
                          </Typography>

                          <Typography variant="h6" sx={{ fontSize: "15px" }}>
                            Delivery Charges
                            <br />
                            <Typography
                              paragraph
                              style={{ fontWeight: "600", color: "black" }}
                            >
                              $190.00
                            </Typography>
                          </Typography>

                          <Typography variant="h6" sx={{ fontSize: "15px" }}>
                            Gst On Delivery
                            <br />
                            <Typography
                              paragraph
                              style={{ fontWeight: "600", color: "black" }}
                            >
                              $28.98
                            </Typography>
                          </Typography>

                          <Typography variant="h6" sx={{ fontSize: "15px" }}>
                            Total Amount
                            <br />
                            <Typography
                              paragraph
                              style={{ fontWeight: "600", color: "black" }}
                            >
                              $5306.00
                            </Typography>
                          </Typography>
                        </Box>
                      </div>
                    </Box>
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button
                    onClick={closepopup}
                    sx={{
                      background: "white",
                      borderColor: "red",
                      color: "red",
                      borderRadius: "12px",
                      height: "45px",
                      fontSize: "15.64px",
                      boxShadow: "none",
                      textTransform: "initial",
                      fontWeight: "700",
                      padding: "17px 16px 17px 16px",
                    }}
                    variant="outlined"
                  >
                    Intiate Partial Refund
                  </Button>
                  <Button
                    onClick={closepopup}
                    sx={{
                      background: "white",
                      borderColor: "red",
                      color: "red",
                      borderRadius: "12px",
                      height: "45px",
                      fontSize: "15.64px",
                      boxShadow: "none",
                      textTransform: "initial",
                      fontWeight: "700",
                      padding: "17px 16px 17px 16px",
                    }}
                    variant="outlined"
                  >
                    Initiate Full Refund
                  </Button>
                  <Button
                    onClick={closepopup}
                    color="error"
                    variant="contained"
                    sx={{
                      borderRadius: "12px",
                      height: "45px",
                      fontSize: "15.64px",
                      boxShadow: "none",
                      textTransform: "initial",
                      fontWeight: "700",
                      padding: "17px 25px 17px 25px",
                    }}
                  >
                    Close Order
                  </Button>
                </DialogActions>
              </Dialog>
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
                    <ShoppingBagIcon
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
                      sx={{ fontSize: "14px", color: "grey" }}
                    >
                      All Orders
                      <br />
                      <Typography
                        paragraph
                        style={{ fontWeight: "500", color: "black" }}
                      >
                        960
                      </Typography>
                    </Typography>

                    <Typography
                      variant="h6"
                      sx={{ fontSize: "14px", color: "grey" }}
                    >
                      Refund Requested
                      <br />
                      <Typography
                        paragraph
                        style={{ fontWeight: "500", color: "black" }}
                      >
                        29
                      </Typography>
                    </Typography>

                    <Typography
                      variant="h6"
                      sx={{ fontSize: "14px", color: "grey" }}
                    >
                      Completed
                      <br />
                      <Typography
                        paragraph
                        style={{ fontWeight: "500", color: "black" }}
                      >
                        437
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
                    <ShoppingBagIcon
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
                      sx={{ fontSize: "14px", color: "grey" }}
                    >
                      Cancelled
                      <br />
                      <Typography
                        paragraph
                        style={{ fontWeight: "500", color: "black" }}
                      >
                        90{" "}
                        <span style={{ color: "red", fontSize: "12px" }}>
                          -20%
                        </span>
                      </Typography>
                    </Typography>

                    <Typography
                      variant="h6"
                      sx={{ fontSize: "14px", color: "grey" }}
                    >
                      Refunded
                      <br />
                      <Typography
                        paragraph
                        style={{ fontWeight: "500", color: "black" }}
                      >
                        20
                      </Typography>
                    </Typography>

                    <Typography
                      variant="h6"
                      sx={{ fontSize: "14px", color: "grey" }}
                    >
                      In Process
                      <br />
                      <Typography
                        paragraph
                        style={{ fontWeight: "500", color: "black" }}
                      >
                        9
                      </Typography>
                    </Typography>
                  </Box>
                </div>
              </Box>

              <Box>
                <PaymentsManagementTable />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

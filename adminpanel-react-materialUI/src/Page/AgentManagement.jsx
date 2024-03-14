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
import PlaceIcon from "@mui/icons-material/Place";
import ClearIcon from "@mui/icons-material/Clear";
import AgentManagementTable from "../Page/AgentManagementSection/AgentManagementTable";
import AddIcon from "@mui/icons-material/Add";
import PersonIcon from "@mui/icons-material/Person";
import PaymentIcon from "@mui/icons-material/Payment";
import AgentModalTable from "../Page/AgentManagementSection/AgentModalTable";

import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});
export default function AgentManagement() {
  const navigate = useNavigate();
  const [time, setTime] = React.useState("");
  const [open, openchange] = React.useState(false);
  const [agentopen, agentopenchange] = React.useState(false);
  const [agent01open, agent01openchange] = React.useState(false);

  const handleChange = (event) => {
    setTime(event.target.value);
  };

  const functionopenpopup = () => {
    openchange(true);
  };

  const closepopup = () => {
    openchange(false);
  };

  const functionagentopenpopup = () => {
    agentopenchange(true);
  };

  const closeagentpopup = () => {
    agentopenchange(false);
  };

  const agent01functionopenpopup = () => {
    agent01openchange(true);
  };

  const agent01closepopup = () => {
    agent01openchange(false);
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
                sx={{ background: "orange" }}
                onClick={functionagentopenpopup}
                variant="contained"
              >
                Agent Management
              </Button>
              <Dialog
                open={agentopen}
                onClose={closeagentpopup}
                fullWidth
                maxWidth="sm"
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <DialogTitle variant="h5" sx={{ fontWeight: "700" }}>
                    Agent Details
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
                      onClick={closeagentpopup}
                    />
                  </DialogTitle>
                </Box>

                <DialogContent>
                  <DialogContentText>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginTop: "-20px",
                      }}
                    >
                      <Typography
                        variant="h5"
                        sx={{
                          fontWeight: "500",
                          color: "black",
                        }}
                      >
                        Agent Infomation
                      </Typography>
                    </Box>

                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginTop: "25px",
                        marginBottom: "15px",
                      }}
                    >
                      <div className="AgentManagementAgentDetails0102">
                        <Box>
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                              paddingLeft: "15px",
                              paddingRight: "15px",
                            }}
                          >
                            <Typography
                              variant="h5"
                              sx={{
                                fontWeight: "500",
                                color: "black",
                              }}
                            >
                              XYX Pandit
                            </Typography>
                            <Button
                              sx={{
                                background: "lightGreen",
                                color: "green",
                                padding: "0 10px",
                              }}
                              variant="contained"
                            >
                              pending
                            </Button>
                          </Box>
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "space-between",
                            }}
                          >
                            <div className="AgentManagementAgentDetails0101">
                              <Box>
                                <Box sx={{ mb: 1.5 }}>
                                  <label sx={{ mt: 1, mb: 1, width: "100%" }}>
                                    Member Since -{" "}
                                    <span
                                      style={{
                                        fontWeight: "500",
                                        color: "black",
                                      }}
                                    >
                                      28-June-2023
                                    </span>
                                  </label>
                                </Box>
                                <Box sx={{ mb: 1.5 }}>
                                  <label sx={{ mt: 1, mb: 1, width: "100%" }}>
                                    Phone <br />
                                    <span
                                      style={{
                                        fontWeight: "500",
                                        color: "black",
                                        fontSize: "20px",
                                      }}
                                    >
                                      +91-1425365214
                                    </span>
                                  </label>
                                </Box>
                                <Box>
                                  <label sx={{ mt: 1, mb: 1, width: "100%" }}>
                                    Marketing ID <br />
                                    <span
                                      style={{
                                        fontWeight: "500",
                                        color: "black",
                                        fontSize: "20px",
                                      }}
                                    >
                                      MMRFA028748TS
                                    </span>
                                  </label>
                                </Box>
                              </Box>
                            </div>

                            <div className="AgentManagement0102">
                              <Box>
                                <Box>
                                  <Box sx={{ mb: 1.5, visibility: "hidden" }}>
                                    <label sx={{ mt: 1, mb: 1, width: "100%" }}>
                                      Email
                                    </label>
                                  </Box>

                                  <Box>
                                    <label sx={{ mt: 1, mb: 1, width: "100%" }}>
                                      Email <br />
                                      <span
                                        style={{
                                          fontWeight: "500",
                                          color: "black",
                                          fontSize: "20px",
                                        }}
                                      >
                                        dspdspdsp@gmail.com
                                      </span>
                                    </label>
                                  </Box>
                                </Box>
                              </Box>
                            </div>
                          </Box>
                        </Box>
                        <Box
                          sx={{
                            paddingLeft: "15px",
                            paddingRight: "15px",
                          }}
                        >
                          <label
                            sx={{
                              mt: 1,
                              mb: 1,

                              width: "100%",
                            }}
                          >
                            Address <br />
                            <span
                              style={{
                                fontWeight: "500",
                                color: "black",
                                fontSize: "20px",
                              }}
                            >
                              1-2, 34, Ram Nager, Visakhapatnam, Andhra Pradesh
                              530016
                            </span>
                          </label>
                        </Box>
                      </div>
                    </Box>
                  </DialogContentText>
                  <DialogActions
                    sx={{ display: "flex", justifyContent: "center" }}
                  >
                    <Button
                      onClick={closepopup}
                      sx={{
                        background: "red",
                        color: "white",
                      }}
                      variant="contained"
                    >
                      Suspend Member
                    </Button>
                  </DialogActions>
                </DialogContent>
              </Dialog>

              <Box
                sx={{
                  display: "flex",
                }}
              >
                <Button
                  onClick={agent01functionopenpopup}
                  sx={{ color: "orange", borderColor: "orange", mr: 2 }}
                  variant="outlined"
                >
                  Edit Agent Details
                </Button>
                <Dialog
                  open={agent01open}
                  onClose={agent01closepopup}
                  fullWidth
                  maxWidth="lg"
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <DialogTitle variant="h5">
                      Affiliated Agent Details
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
                        onClick={agent01closepopup}
                      />
                    </DialogTitle>
                  </Box>

                  <DialogContent>
                    <DialogContentText>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
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
                              XYZ PANDIT
                              <br />
                              <Typography
                                paragraph
                                style={{ fontSize: "12px" }}
                              >
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
                          <Box>
                            <Typography variant="h6" sx={{ fontSize: "15px" }}>
                              Marketing ID
                              <br />
                              <Typography
                                paragraph
                                style={{ fontWeight: "600", color: "black" }}
                              >
                                MMRFA028748TS
                              </Typography>
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
                                sdpsdpsdp.gmail.com
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
                              Agent Type
                              <br />
                              <Typography
                                paragraph
                                style={{ fontWeight: "600", color: "black" }}
                              >
                                Lifetime
                              </Typography>
                            </Typography>

                            <Typography variant="h6" sx={{ fontSize: "15px" }}>
                              Expiry Date
                              <br />
                              <Typography
                                paragraph
                                style={{ fontWeight: "600", color: "black" }}
                              >
                                Not Available
                              </Typography>
                            </Typography>
                          </Box>
                        </div>
                      </Box>
                      <Box>
                        <div
                          className="AgentModalCard00"
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
                              Referral Limit
                              <br />
                              <Typography
                                paragraph
                                style={{ fontWeight: "600", color: "black" }}
                              >
                                No Limit
                              </Typography>
                            </Typography>

                            <Typography variant="h6" sx={{ fontSize: "15px" }}>
                              Earning Max Cap
                              <br />
                              <Typography
                                paragraph
                                style={{ fontWeight: "600", color: "black" }}
                              >
                                $6,00,000.00
                              </Typography>
                            </Typography>

                            <Typography variant="h6" sx={{ fontSize: "15px" }}>
                              Last Referral Date
                              <br />
                              <Typography
                                paragraph
                                style={{ fontWeight: "600", color: "black" }}
                              >
                                12/02/2024 11:20:00 AM
                              </Typography>
                            </Typography>

                            <Typography variant="h6" sx={{ fontSize: "15px" }}>
                              Last Recharge Amount
                              <br />
                              <Typography
                                paragraph
                                style={{ fontWeight: "600", color: "black" }}
                              >
                                $200.00
                              </Typography>
                            </Typography>

                            <Typography variant="h6" sx={{ fontSize: "15px" }}>
                              Cashback Earned (all-time)
                              <br />
                              <Typography
                                paragraph
                                style={{ fontWeight: "600", color: "black" }}
                              >
                                $96,200.00
                              </Typography>
                            </Typography>
                          </Box>
                        </div>
                      </Box>
                      <Box>
                        <AgentModalTable />
                      </Box>
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    <Button
                      onClick={closepopup}
                      sx={{
                        color: "red",
                        borderColor: "red",
                        background: "white",
                      }}
                      variant="contained"
                    >
                      Reduce Limit
                    </Button>
                    <Button
                      onClick={closepopup}
                      color="error"
                      variant="contained"
                    >
                      Suspend Member
                    </Button>
                  </DialogActions>
                </Dialog>
                <Button
                  sx={{ background: "orange" }}
                  variant="contained"
                  onClick={functionopenpopup}
                >
                  <AddIcon sx={{ mr: 1 }} />
                  Add New Agent
                </Button>
                <Dialog
                  open={open}
                  onClose={closepopup}
                  fullWidth
                  maxWidth="md"
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <DialogTitle sx={{ fontWeight: "700" }}>
                      Add a New Agent
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
                    <DialogContentText>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          marginTop: "-20px",
                        }}
                      >
                        <Typography variant="h6">Agent Infomation</Typography>
                      </Box>

                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          marginTop: "25px",
                          marginBottom: "15px",
                        }}
                      >
                        <div className="AgentManagement01">
                          <Box>
                            <Box
                              sx={{
                                display: "flex",
                                justifyContent: "space-between",
                              }}
                            >
                              <div className="AgentManagement0101">
                                <Box>
                                  <Box>
                                    <TextField
                                      id="outlined-basic"
                                      label="Name"
                                      variant="outlined"
                                      sx={{ mt: 1, mb: 1, width: "100%" }}
                                    />
                                  </Box>
                                  <Box>
                                    <TextField
                                      id="outlined-basic"
                                      label="Marketing ID"
                                      variant="outlined"
                                      sx={{ mt: 1, mb: 1, width: "100%" }}
                                    />
                                  </Box>
                                  <Box
                                    sx={{
                                      display: "flex",
                                      justifyContent: "space-between",
                                    }}
                                  >
                                    <Box sx={{ width: "49.5%" }}>
                                      <FormControl
                                        sx={{ mt: 1, mb: 1, width: "100%" }}
                                      >
                                        <InputLabel id="demo-select-small-label">
                                          <PlaceIcon />
                                          +00
                                        </InputLabel>
                                        <Select
                                          labelId="demo-select-small-label"
                                          id="demo-select-small"
                                          value={time}
                                          label="State"
                                          onChange={handleChange}
                                        >
                                          <MenuItem value="">
                                            <em>None</em>
                                          </MenuItem>
                                          <MenuItem value={91}>+91</MenuItem>
                                          <MenuItem value={92}>+92</MenuItem>
                                          <MenuItem value={93}>+93</MenuItem>
                                        </Select>
                                      </FormControl>
                                    </Box>
                                    <Box sx={{ width: "49.5%" }}>
                                      <TextField
                                        id="outlined-basic"
                                        label="Mobile Number"
                                        variant="outlined"
                                        sx={{ mt: 1, mb: 1, width: "100%" }}
                                      />
                                    </Box>
                                  </Box>

                                  <Box>
                                    <FormControl
                                      sx={{ mt: 1, mb: 1, width: "100%" }}
                                    >
                                      <InputLabel id="demo-select-small-label">
                                        State
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
                                        <MenuItem value={1}>MP</MenuItem>
                                        <MenuItem value={2}>UP</MenuItem>
                                        <MenuItem value={3}>MH</MenuItem>
                                        <MenuItem value={4}>JK</MenuItem>
                                        <MenuItem value={5}>GJ</MenuItem>
                                        <MenuItem value={6}>HA</MenuItem>
                                      </Select>
                                    </FormControl>
                                  </Box>
                                </Box>
                              </div>

                              <div className="AgentManagement0102">
                                <Box>
                                  <Box>
                                    <Box>
                                      <TextField
                                        id="outlined-basic"
                                        label="Email Address"
                                        variant="outlined"
                                        sx={{ mt: 1, mb: 1, width: "100%" }}
                                      />
                                    </Box>

                                    <Box>
                                      <TextField
                                        id="outlined-basic"
                                        label="Address"
                                        variant="outlined"
                                        sx={{ mt: 1, mb: 1, width: "100%" }}
                                      />
                                    </Box>

                                    <Box>
                                      <TextField
                                        id="outlined-basic"
                                        label="Address 2"
                                        variant="outlined"
                                        sx={{ mt: 1, mb: 1, width: "100%" }}
                                      />
                                    </Box>

                                    <FormControl
                                      sx={{ mt: 1, mb: 1, width: "100%" }}
                                    >
                                      <InputLabel id="demo-select-small-label">
                                        State
                                      </InputLabel>
                                      <Select
                                        labelId="demo-select-small-label"
                                        id="demo-select-small"
                                        value={time}
                                        label="City"
                                        onChange={handleChange}
                                      >
                                        <MenuItem value="">
                                          <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={1}>Indore</MenuItem>
                                        <MenuItem value={2}>Ujjain</MenuItem>
                                        <MenuItem value={3}>Bhopal</MenuItem>
                                        <MenuItem value={4}>Jaipur</MenuItem>
                                        <MenuItem value={5}>Punjab</MenuItem>
                                        <MenuItem value={6}>Haryana</MenuItem>
                                      </Select>
                                    </FormControl>
                                  </Box>
                                </Box>
                              </div>
                            </Box>
                          </Box>
                        </div>
                      </Box>
                    </DialogContentText>
                    <DialogActions
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        width: "100%",
                      }}
                    >
                      <Button
                        onClick={closepopup}
                        sx={{
                          color: "orange",
                          borderColor: "orange",
                          pt: 1.5,
                          pb: 1.5,
                          pl: 5,
                          pr: 5,
                        }}
                        variant="outlined"
                      >
                        Cancel
                      </Button>
                      <Button
                        onClick={closepopup}
                        sx={{
                          background: "orange",
                          color: "white",
                          pt: 1.5,
                          pb: 1.5,
                          pl: 5,
                          pr: 5,
                        }}
                        variant="contained"
                      >
                        Add
                      </Button>
                    </DialogActions>
                  </DialogContent>
                </Dialog>
              </Box>
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
                  className="AgentManagementDetailsSecond00"
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
                        color: "orange",
                        background: "#ffffcc",
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
                    <Typography
                      variant="h6"
                      sx={{ fontSize: "14px", color: "grey" }}
                    >
                      All Agents
                      <br />
                      <Typography
                        paragraph
                        style={{ fontWeight: "500", color: "black" }}
                      >
                        1,250
                        <span
                          style={{
                            color: "green",
                            fontSize: "12px",
                            marginLeft: "4px",
                          }}
                        >
                          +15.80%
                        </span>
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
                        1,180
                        <span
                          style={{
                            color: "green",
                            fontSize: "12px",
                            marginLeft: "4px",
                          }}
                        >
                          +85%
                        </span>
                      </Typography>
                    </Typography>

                    <Typography
                      variant="h6"
                      sx={{ fontSize: "14px", color: "grey" }}
                    >
                      In-Active
                      <br />
                      <Typography
                        paragraph
                        style={{ fontWeight: "500", color: "black" }}
                      >
                        70
                        <span
                          style={{
                            color: "red",
                            fontSize: "12px",
                            marginLeft: "4px",
                          }}
                        >
                          -10%
                        </span>
                      </Typography>
                    </Typography>
                  </Box>
                </div>

                <div
                  className="AgentManagementDetailsSecond00"
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
                        color: "orange",
                        background: "#ffffcc",
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
                    <Typography
                      variant="h6"
                      sx={{ fontSize: "14px", color: "grey" }}
                    >
                      Cancelled Agents
                      <br />
                      <Typography
                        paragraph
                        style={{ fontWeight: "500", color: "black" }}
                      >
                        30{" "}
                        <span
                          style={{
                            color: "red",
                            fontSize: "12px",
                            marginLeft: "4px",
                          }}
                        >
                          -10%
                        </span>
                      </Typography>
                    </Typography>

                    <Typography
                      variant="h6"
                      sx={{ fontSize: "14px", color: "grey" }}
                    >
                      Cancelled Agents
                      <br />
                      <Typography
                        paragraph
                        style={{ fontWeight: "500", color: "black" }}
                      >
                        10
                      </Typography>
                    </Typography>

                    <Typography
                      variant="h6"
                      sx={{ fontSize: "14px", color: "grey" }}
                    >
                      Suspended Agents
                      <br />
                      <Typography
                        paragraph
                        style={{ fontWeight: "500", color: "black" }}
                      >
                        5
                      </Typography>
                    </Typography>
                  </Box>
                </div>
              </Box>
              <Box>
                <AgentManagementTable />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

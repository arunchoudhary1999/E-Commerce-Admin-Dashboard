import React from "react";
import SideBar from "../../Component/SideBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import ListItem from "@mui/material/ListItem";
import Button from "@mui/material/Button";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useNavigate } from "react-router-dom";
import ImageListItem from "@mui/material/ImageListItem";
import ImageList from "@mui/material/ImageList";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import EditProductDetailsTable from "./EditProductDetailsTable";
export default function EditProductDetails01() {
  const navigate = useNavigate();
  const [time, setTime] = React.useState("");
  const handleChange = (event) => {
    setTime(event.target.value);
  };
  return (
    <Box sx={{ display: "flex" }}>
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
                    <span style={{ color: "black" }}>
                      SAMSUNG 8 kg Star Inverter Fully...
                    </span>{" "}
                  </Link>
                  <Link
                    underline="hover"
                    color="inherit"
                    style={{ fontSize: "14px" }}
                  >
                    <span style={{ color: "black" }}>Date Added</span> 12 Nov
                    2023 - 12:25 pm
                  </Link>

                  <Link
                    underline="hover"
                    color="inherit"
                    style={{ fontSize: "14px" }}
                  >
                    <span style={{ color: "black" }}> Product URL </span>
                    IN63545115055CG
                  </Link>
                  <FileCopyIcon sx={{ color: "red" }} />
                </Breadcrumbs>
              </div>

              <Box>
                <Button sx={{ background: "black", mr: 2 }} variant="contained">
                  <ListItem
                    disablePadding
                    onClick={() => {
                      navigate("/editproductdetails02");
                    }}
                  >
                    Edit Product
                  </ListItem>
                  <KeyboardArrowDownIcon sx={{ ml: 1 }} />
                </Button>

                <Button sx={{ background: "#b30000" }} variant="contained">
                  Delete Product
                </Button>
              </Box>
            </Box>

            <Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "20px",
                  marginBottom: "15px",
                }}
              >
                <div className="ProductManagementProductDetails00">
                  <ImageList
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {itemData.map((item) => (
                      <ImageListItem sx={{ width: "100%" }} key={item.img}>
                        <img
                          srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                          src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                          alt={item.title}
                          loading="lazy"
                        />
                      </ImageListItem>
                    ))}
                  </ImageList>
                </div>
                <div
                  className="ProductManagementProductDetails01"
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
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        fontSize: "14px",
                        color: "grey",
                      }}
                    >
                      Last Order{" "}
                      <span style={{ color: "black", fontWeight: "500" }}>
                        12 Sep 2023
                      </span>
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
                    <Typography
                      variant="h6"
                      sx={{ fontSize: "14px", color: "grey" }}
                    >
                      Price
                      <br />
                      <Typography
                        paragraph
                        style={{ fontWeight: "500", color: "black" }}
                      >
                        $22.00
                      </Typography>
                    </Typography>

                    <Typography
                      variant="h6"
                      sx={{ fontSize: "14px", color: "grey" }}
                    >
                      In-Stock
                      <br />
                      <Typography
                        paragraph
                        style={{ fontWeight: "500", color: "black" }}
                      >
                        20
                      </Typography>
                    </Typography>
                  </Box>
                </div>

                <div
                  className="ProductManagementProductDetails01"
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
                    }}
                  >
                    <AccessTimeIcon
                      sx={{
                        color: "orange",
                        background: "#f5f5f0",
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
                      Total Orders
                      <br />
                      <Typography
                        paragraph
                        style={{ fontWeight: "500", color: "black" }}
                      >
                        $2265.00
                      </Typography>
                    </Typography>
                  </Box>
                </div>

                <div
                  className="ProductManagementProductDetails01"
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
                    }}
                  >
                    <RemoveRedEyeIcon
                      sx={{
                        color: "black",
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
                      Views
                      <br />
                      <Typography
                        paragraph
                        style={{ fontWeight: "500", color: "black" }}
                      >
                        22,000
                      </Typography>
                    </Typography>

                    <Typography
                      variant="h6"
                      sx={{ fontSize: "14px", color: "grey" }}
                    >
                      Favourite
                      <br />
                      <Typography
                        paragraph
                        style={{ fontWeight: "500", color: "black" }}
                      >
                        23
                      </Typography>
                    </Typography>
                  </Box>
                </div>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "20px",
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
                        color: "black",
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
                      All Orders
                      <br />
                      <Typography
                        paragraph
                        style={{ fontWeight: "500", color: "black" }}
                      >
                        1,100
                      </Typography>
                    </Typography>

                    <Typography
                      variant="h6"
                      sx={{ fontSize: "14px", color: "grey" }}
                    >
                      Pending
                      <br />
                      <Typography
                        paragraph
                        style={{ fontWeight: "500", color: "black" }}
                      >
                        0
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
                        1,100
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
                        color: "black",
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
                      Cancelled
                      <br />
                      <Typography
                        paragraph
                        style={{ fontWeight: "500", color: "black" }}
                      >
                        0
                      </Typography>
                    </Typography>

                    <Typography
                      variant="h6"
                      sx={{ fontSize: "14px", color: "grey" }}
                    >
                      Returned
                      <br />
                      <Typography
                        paragraph
                        style={{ fontWeight: "500", color: "black" }}
                      >
                        0
                      </Typography>
                    </Typography>

                    <Typography
                      variant="h6"
                      sx={{ fontSize: "14px", color: "grey" }}
                    >
                      Damaged
                      <br />
                      <Typography
                        paragraph
                        style={{ fontWeight: "500", color: "black" }}
                      >
                        0
                      </Typography>
                    </Typography>
                  </Box>
                </div>
              </Box>
              <Box>
                <EditProductDetailsTable />
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

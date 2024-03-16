import React from "react";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatAlignJustifyIcon from "@mui/icons-material/FormatAlignJustify";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import SideBar from "../../Component/SideBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import FormLabel from "@mui/material/FormLabel";
import Switch from "@mui/base/Switch";
import { styled } from "@mui/material/styles";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import ImageIcon from "@mui/icons-material/Image";

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

export default function AddProduct() {
  const navigate = useNavigate();
  const label = { slotProps: { input: { "aria-label": "Demo switch" } } };

  const [time, setTime] = React.useState("");

  const handleChange = (event) => {
    setTime(event.target.value);
  };

  return (
    <Box sx={{ display: "flex", background: "#FAFAFB" }}>
      <SideBar />
      <Box component="main" sx={{ flexGrow: 1, p: 3, marginTop: "55px" }}>
        <Box sx={{ marginTop: "1rem" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography variant="h5">Add Product Details</Typography>

            <Box>
              <Button
                sx={{ background: "black", mr: 2, borderRadius: "8px" }}
                variant="contained"
              >
                Save as Draft
                <KeyboardArrowDownIcon sx={{ ml: 1 }} />
              </Button>

              <Button
                sx={{ background: "#F58634", borderRadius: "8px" }}
                variant="contained"
              >
                Save & Publish
              </Button>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "25px",
            marginBottom: "15px",
          }}
        >
          <div className="AddProduct01">
            <Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "15px",
                }}
              >
                <div className="AddProduct0101">
                  <Box>
                    <Box>
                      <FormLabel id="demo-radio-buttons-group-label">
                        Product Name
                      </FormLabel>
                      <TextField
                        id="outlined-basic"
                        label="Product Name"
                        variant="outlined"
                        sx={{ mt: 1, mb: 1, width: "100%" }}
                      />
                    </Box>
                    <Box>
                      <FormControl sx={{ mt: 1, mb: 1, width: "100%" }}>
                        <InputLabel id="demo-select-small-label">
                          Select Product Category
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
                      sx={{ display: "flex", justifyContent: "space-between" }}
                    >
                      <TextField
                        id="outlined-basic"
                        label="Selling Price"
                        variant="outlined"
                        sx={{ mt: 1, mb: 1, width: "48%" }}
                      />
                      <TextField
                        id="outlined-basic"
                        label="Cost Price"
                        variant="outlined"
                        sx={{ mt: 1, mb: 1, width: "48%" }}
                      />
                    </Box>
                    <Box>
                      <FormControl sx={{ mt: 1, mb: 1, width: "100%" }}>
                        <InputLabel id="demo-select-small-label">
                          Quantity in Stock
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
                          <MenuItem value={1}>1</MenuItem>
                          <MenuItem value={2}>2</MenuItem>
                          <MenuItem value={3}>3</MenuItem>
                          <MenuItem value={4}>4</MenuItem>
                          <MenuItem value={5}>5</MenuItem>
                          <MenuItem value={6}>6</MenuItem>
                        </Select>
                      </FormControl>
                    </Box>

                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        mt: 1,
                        mb: 1,
                      }}
                    >
                      <FormLabel id="demo-radio-buttons-group-label">
                        Discount
                      </FormLabel>

                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <FormLabel
                          id="demo-radio-buttons-group-label"
                          sx={{ color: "black" }}
                        >
                          <span style={{ marginRight: "1rem" }}>
                            Add Discount
                          </span>
                        </FormLabel>
                        <div>
                          <Switch defaultChecked />
                        </div>
                      </Box>
                    </Box>

                    <Box
                      sx={{ display: "flex", justifyContent: "space-between" }}
                    >
                      <FormControl sx={{ mt: 1, mb: 1, width: "48%" }}>
                        <InputLabel id="demo-select-small-label">
                          Types
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
                          <MenuItem value={1}>1</MenuItem>
                          <MenuItem value={2}>2</MenuItem>
                          <MenuItem value={3}>3</MenuItem>
                          <MenuItem value={4}>4</MenuItem>
                          <MenuItem value={5}>5</MenuItem>
                          <MenuItem value={6}>6</MenuItem>
                        </Select>
                      </FormControl>
                      <TextField
                        id="outlined-basic"
                        label="Cost Price"
                        variant="outlined"
                        sx={{ mt: 1, mb: 1, width: "48%" }}
                      />
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        mt: 1,
                        mb: 1,
                      }}
                    >
                      <FormLabel id="demo-radio-buttons-group-label">
                        Expiry Date
                      </FormLabel>

                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <FormLabel
                          id="demo-radio-buttons-group-label"
                          sx={{ color: "black" }}
                        >
                          <span style={{ marginRight: "1rem" }}>
                            Add Expiry Date
                          </span>
                        </FormLabel>
                        <div>
                          <Switch defaultChecked />
                        </div>
                      </Box>
                    </Box>

                    <Box
                      sx={{ display: "flex", justifyContent: "space-between" }}
                    >
                      <TextField
                        type="date"
                        id="outlined-basic"
                        variant="outlined"
                        sx={{ mt: 1, mb: 1, width: "100%" }}
                      />
                    </Box>
                  </Box>
                </div>

                <div className="AddProduct0102">
                  <Box>
                    <Box
                      component="form"
                      sx={{
                        "& .MuiTextField-root": { mt: 1, mb: 1, width: "100%" },
                      }}
                      noValidate
                      autoComplete="off"
                    >
                      <div>
                        <TextField
                          id="outlined-multiline-static"
                          label="Short Description"
                          multiline
                          rows={4}
                        />
                      </div>
                    </Box>

                    <Box
                      component="form"
                      sx={{
                        "& .MuiTextField-root": { mt: 1, mb: 1, width: "100%" },
                      }}
                      noValidate
                      autoComplete="off"
                    >
                      <div>
                        <InputLabel id="demo-select-small-label">
                          Product Long Description
                        </InputLabel>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          <Box>
                            <FormControl
                              sx={{
                                minWidth: 90,
                                alignSelf: "flex-start",
                              }}
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
                            <FormControl
                              sx={{
                                minWidth: 90,
                                alignSelf: "flex-start",
                                ml: 1,
                              }}
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
                          <Box>
                            <FormatBoldIcon
                              sx={{
                                fontSize: "25px",
                                borderRadius: "10px",
                              }}
                            />
                            <FormatUnderlinedIcon
                              sx={{
                                fontSize: "25px",
                                borderRadius: "10px",
                              }}
                            />
                            <FormatItalicIcon
                              sx={{
                                fontSize: "25px",
                                borderRadius: "10px",
                              }}
                            />
                            <FormatAlignJustifyIcon
                              sx={{
                                fontSize: "25px",
                                borderRadius: "10px",
                              }}
                            />
                            <FormatAlignLeftIcon
                              sx={{
                                fontSize: "25px",
                                borderRadius: "10px",
                              }}
                            />
                            <FormatAlignRightIcon
                              sx={{
                                fontSize: "25px",
                                borderRadius: "10px",
                              }}
                            />
                            <InsertLinkIcon
                              sx={{
                                fontSize: "25px",
                                borderRadius: "10px",
                              }}
                            />
                          </Box>
                        </Box>
                        <TextField
                          id="outlined-multiline-static"
                          label="Your text goes here"
                          multiline
                          rows={4}
                        />
                        <InputLabel
                          id="demo-select-small-label"
                          sx={{ fontSize: "13px" }}
                        >
                          Add a Long Description for your Product
                        </InputLabel>
                      </div>
                    </Box>

                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        mt: 1,
                        mb: 1,
                      }}
                    >
                      <FormLabel id="demo-radio-buttons-group-label">
                        Return Policy
                      </FormLabel>

                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <FormLabel
                          id="demo-radio-buttons-group-label"
                          sx={{ color: "black" }}
                        >
                          <span style={{ marginRight: "1rem" }}>
                            Add Deduction
                          </span>
                        </FormLabel>
                        <div>
                          <Switch defaultChecked />
                        </div>
                      </Box>
                    </Box>

                    {/* Start Box */}
                    <Box
                      sx={{ display: "flex", justifyContent: "space-between" }}
                    >
                      <TextField
                        type="date"
                        id="outlined-basic"
                        variant="outlined"
                        sx={{ mt: 1, mb: 1, width: "48%" }}
                      />
                      <TextField
                        type="time"
                        id="outlined-basic"
                        variant="outlined"
                        sx={{ mt: 1, mb: 1, width: "48%" }}
                      />
                    </Box>
                    {/* End Box */}
                  </Box>
                </div>
              </Box>
            </Box>
          </div>

          {/* Start Upload Image Div */}
          <div className="AddProduct02">
            <div className="AddProductImageUploadCard">
              <Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                    height: "12rem",
                    marginTop: "25px",
                    marginBottom: "25px",
                  }}
                >
                  <ImageIcon
                    sx={{
                      color: "blue",
                      fontSize: "45px",
                      borderRadius: "15px",
                    }}
                  />
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      flexFlow: "wrap",
                    }}
                  >
                    <Button
                      className="addproductUploadImageHover"
                      component="label"
                      role={undefined}
                      variant="contained"
                      tabIndex={-1}
                      startIcon={<CloudUploadIcon />}
                      sx={{
                        background: "none",
                        border: "none",
                        boxShadow: "none",
                        color: "blue",
                        textTransform: "lowercase",
                        mb: 1,
                        borderRadius: "8px",
                      }}
                    >
                      Upload Image
                      <VisuallyHiddenInput type="file" />
                    </Button>
                    <FormLabel
                      id="demo-radio-buttons-group-label"
                      sx={{ fontSize: "11px", textAlign: "center" }}
                    >
                      Upload a cover image for your product.
                      <br />
                      File Format{" "}
                      <span style={{ color: "black" }}>jpeg, png</span>{" "}
                      Recommened Size{" "}
                      <span style={{ color: "black" }}>600x600 (1:1)</span>
                    </FormLabel>
                  </Box>
                </Box>
              </Box>
            </div>

            {/* Start Small Upload Image Div */}
            <Box>
              <Box
                style={{
                  marginTop: "15px",
                  marginBottom: "15px",
                }}
              >
                <FormLabel
                  id="demo-radio-buttons-group-label"
                  sx={{ fontWeight: "600" }}
                >
                  Additional Images
                </FormLabel>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <div className="AddProductSmallImageUploadCard">
                  <Box>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-evenly",
                        alignItems: "center",
                        height: "6rem",
                        marginTop: "15px",
                        marginBottom: "15px",
                      }}
                    >
                      <ImageIcon
                        sx={{
                          color: "blue",
                          fontSize: "35px",
                        }}
                      />
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          flexFlow: "wrap",
                        }}
                      >
                        <Button
                          className="addproductUploadImageHover"
                          component="label"
                          role={undefined}
                          variant="contained"
                          tabIndex={-1}
                          startIcon={<CloudUploadIcon />}
                          sx={{
                            background: "none",
                            border: "none",
                            boxShadow: "none",
                            color: "blue",
                            textTransform: "lowercase",
                            mb: 1,
                            fontSize: "9px",
                            borderRadius: "8px",
                          }}
                        >
                          Upload Image
                          <VisuallyHiddenInput type="file" />
                        </Button>
                      </Box>
                    </Box>
                  </Box>
                </div>

                <div className="AddProductBlankSmallImageUploadCard">
                  <Box>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-evenly",
                        alignItems: "center",
                        height: "6rem",
                        marginTop: "15px",
                        marginBottom: "15px",
                      }}
                    ></Box>
                  </Box>
                </div>
              </Box>
            </Box>
            {/* End Small Upload Image Div */}
          </div>
          {/* End Upload Image Div */}
        </Box>
      </Box>
    </Box>
  );
}

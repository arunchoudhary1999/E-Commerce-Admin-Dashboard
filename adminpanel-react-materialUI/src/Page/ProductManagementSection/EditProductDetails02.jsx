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
import ListItem from "@mui/material/ListItem";
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
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import DeleteIcon from "@mui/icons-material/Delete";

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

export default function EditProductDetails() {
  const navigate = useNavigate();
  const label = { slotProps: { input: { "aria-label": "Demo switch" } } };

  const [time, setTime] = React.useState("1");
  const [stockTime, setStockTime] = React.useState("265");
  const [typeTime, setTypeTime] = React.useState("1");
  const [product01Time, setProduct01Time] = React.useState("1");
  const [product02Time, setProduct02Time] = React.useState("1");

  const handleChange = (event) => {
    setTime(event.target.value);
  };

  const stockhHandleChange = (event) => {
    setStockTime(event.target.value);
  };

  const typeHandleChange = (event) => {
    setTypeTime(event.target.value);
  };

  const product01handleChange = (event) => {
    setProduct01Time(event.target.value);
  };

  const product02handleChange = (event) => {
    setProduct02Time(event.target.value);
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
            <Typography variant="h5">Edit Product Details</Typography>

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
                <ListItem disablePadding>Save & Publish</ListItem>
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
                        value="SAMSUNG 8 kg 5 Star Inverter Fully Auto..."
                        variant="outlined"
                        sx={{ mt: 1, mb: 1, width: "100%" }}
                      />
                    </Box>
                    <Box>
                      <FormControl sx={{ mt: 1, mb: 1, width: "100%" }}>
                        <Select
                          labelId="demo-select-small-label"
                          id="demo-select-small"
                          value={time}
                          onChange={handleChange}
                        >
                          <MenuItem value="">
                            <em>None</em>
                          </MenuItem>
                          <MenuItem value={1}>Washing Machine</MenuItem>
                          <MenuItem value={2}>IPhone 14</MenuItem>
                          <MenuItem value={3}>Samsung S21</MenuItem>
                        </Select>
                      </FormControl>
                    </Box>
                    <Box
                      sx={{ display: "flex", justifyContent: "space-between" }}
                    >
                      <TextField
                        id="outlined-basic"
                        value="$22.00"
                        variant="outlined"
                        sx={{ mt: 1, mb: 1, width: "48%" }}
                      />
                      <TextField
                        id="outlined-basic"
                        value="$18.00"
                        variant="outlined"
                        sx={{ mt: 1, mb: 1, width: "48%" }}
                      />
                    </Box>
                    <Box>
                      <FormControl sx={{ mt: 1, mb: 1, width: "100%" }}>
                        <Select
                          labelId="demo-select-small-label"
                          id="demo-select-small"
                          value={stockTime}
                          onChange={stockhHandleChange}
                        >
                          <MenuItem value="">
                            <em>None</em>
                          </MenuItem>
                          <MenuItem value={1}>1</MenuItem>
                          <MenuItem value={265}>265</MenuItem>
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
                        <Select
                          labelId="demo-select-small-label"
                          id="demo-select-small"
                          value={typeTime}
                          onChange={typeHandleChange}
                        >
                          <MenuItem value="">
                            <em>None</em>
                          </MenuItem>
                          <MenuItem value={1}>Fixed</MenuItem>
                          <MenuItem value={2}>2</MenuItem>
                          <MenuItem value={3}>3</MenuItem>
                          <MenuItem value={4}>4</MenuItem>
                          <MenuItem value={5}>5</MenuItem>
                          <MenuItem value={6}>6</MenuItem>
                        </Select>
                      </FormControl>
                      <TextField
                        id="outlined-basic"
                        value="4,599.00"
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
                        value="03/01/2024"
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
                          //   label="Short Description"
                          value="Short Description Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
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
                              <Select
                                labelId="demo-select-small-label"
                                id="demo-select-small"
                                value={product01Time}
                                onChange={product01handleChange}
                              >
                                <MenuItem value="">
                                  <em>None</em>
                                </MenuItem>
                                <MenuItem value={1}>Week</MenuItem>
                                <MenuItem value={2}>Month</MenuItem>
                                <MenuItem value={3}>Year</MenuItem>
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
                              <Select
                                labelId="demo-select-small-label"
                                id="demo-select-small"
                                value={product02Time}
                                onChange={product02handleChange}
                              >
                                <MenuItem value="">
                                  <em>None</em>
                                </MenuItem>
                                <MenuItem value={1}>Week</MenuItem>
                                <MenuItem value={2}>Month</MenuItem>
                                <MenuItem value={3}>Year</MenuItem>
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
                          value="Short Description Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
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
                <Box>
                  <Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "flex-end",
                        position: "absolute",
                        zIndex: "1",
                        mt: 1,
                        ml: 1,
                      }}
                    >
                      <CloudUploadIcon
                        sx={{
                          background: "#ffeb99",
                          p: 0.5,
                          mr: 1,
                          fontSize: "35px",
                          borderRadius: "5px",
                        }}
                      />

                      <DeleteIcon
                        sx={{
                          background: "#ffeb99",
                          p: 0.5,
                          fontSize: "35px",
                          borderRadius: "5px",
                        }}
                      />
                    </Box>
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
                  flexWrap: "wrap",
                }}
              >
                <div className="AddProductSmallImageUploadCard">
                  <Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "flex-end",
                        position: "absolute",
                        zIndex: "1",
                        mt: 1,
                        ml: 1,
                      }}
                    >
                      <CloudUploadIcon
                        sx={{
                          background: "#ffeb99",
                          p: 0.5,
                          mr: 1,
                          fontSize: "35px",
                          borderRadius: "5px",
                        }}
                      />

                      <DeleteIcon
                        sx={{
                          background: "#ffeb99",
                          p: 0.5,
                          fontSize: "35px",
                          borderRadius: "5px",
                        }}
                      />
                    </Box>
                    <ImageList
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      {itemData01.map((item) => (
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
                  </Box>
                </div>
                <div className="AddProductSmallImageUploadCard">
                  <Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "flex-end",
                        position: "absolute",
                        zIndex: "1",
                        mt: 1,
                        ml: 1,
                      }}
                    >
                      <CloudUploadIcon
                        sx={{
                          background: "#ffeb99",
                          p: 0.5,
                          mr: 1,
                          fontSize: "35px",
                          borderRadius: "5px",
                        }}
                      />

                      <DeleteIcon
                        sx={{
                          background: "#ffeb99",
                          p: 0.5,
                          fontSize: "35px",
                          borderRadius: "5px",
                        }}
                      />
                    </Box>
                    <ImageList
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      {itemData01.map((item) => (
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
                  </Box>
                </div>

                <div className="AddProductSmallImageUploadCard">
                  <Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "flex-end",
                        position: "absolute",
                        zIndex: "1",
                        mt: 1,
                        ml: 1,
                      }}
                    >
                      <CloudUploadIcon
                        sx={{
                          background: "#ffeb99",
                          p: 0.5,
                          mr: 1,
                          fontSize: "35px",
                          borderRadius: "5px",
                        }}
                      />

                      <DeleteIcon
                        sx={{
                          background: "#ffeb99",
                          p: 0.5,
                          fontSize: "35px",
                          borderRadius: "5px",
                        }}
                      />
                    </Box>
                    <ImageList
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      {itemData01.map((item) => (
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
                  </Box>
                </div>

                <div className="AddProductSmallImageUploadCard">
                  <Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "flex-end",
                        position: "absolute",
                        zIndex: "1",
                        mt: 1,
                        ml: 1,
                      }}
                    >
                      <CloudUploadIcon
                        sx={{
                          background: "#ffeb99",
                          p: 0.5,
                          mr: 1,
                          fontSize: "35px",
                          borderRadius: "5px",
                        }}
                      />

                      <DeleteIcon
                        sx={{
                          background: "#ffeb99",
                          p: 0.5,
                          fontSize: "35px",
                          borderRadius: "5px",
                        }}
                      />
                    </Box>
                    <ImageList
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      {itemData01.map((item) => (
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
                  </Box>
                </div>

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

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
  },
];

const itemData01 = [
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
  },
];

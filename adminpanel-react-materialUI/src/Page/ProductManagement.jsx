import React from "react";
import SideBar from "../Component/SideBar";
import ProductManagementTable from "../Page/ProductManagementSection/ProductManagementTable";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import ListItem from "@mui/material/ListItem";
import { useNavigate } from "react-router-dom";

export default function ProductManagement() {
  const navigate = useNavigate();

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
            <Button
              sx={{
                background: "#F58634",
                borderRadius: "11.17px",
                height: "45px",
                width: "114px",
                fontSize: "15.64px",
                boxShadow: "none",
                textTransform: "initial",
                fontWeight: "700",
                padding: 0,
              }}
              variant="contained"
            >
              <ListItem
                // disablePadding
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
                onClick={() => {
                  navigate("/editproductdetails01");
                }}
              >
                Product
              </ListItem>
            </Button>

            <Button
              sx={{
                background: "#F58634",
                borderRadius: "11.17px",
                height: "45px",
                fontSize: "15.64px",
                boxShadow: "none",
                textTransform: "initial",
                fontWeight: "700",
              }}
              variant="contained"
            >
              <AddIcon />
              <ListItem
                onClick={() => {
                  navigate("/addproduct");
                }}
              >
                Add Product
              </ListItem>
            </Button>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "20px",
            marginBottom: "15px",
          }}
        >
          <ProductManagementTable />
        </Box>
      </Box>
    </Box>
  );
}

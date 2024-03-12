// import React from "react";
// import Box from "@mui/material/Box";
// import Typography from "@mui/material/Typography";
// import InputLabel from "@mui/material/InputLabel";
// import MenuItem from "@mui/material/MenuItem";
// import FormControl from "@mui/material/FormControl";
// import Select from "@mui/material/Select";
// import Button from "@mui/material/Button";
// import DownloadIcon from "@mui/icons-material/Download";
// import Paper from "@mui/material/Paper";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TablePagination from "@mui/material/TablePagination";
// import TableRow from "@mui/material/TableRow";

// const columns = [
//   { id: "name", label: "Name", minWidth: 170 },
//   { id: "code", label: "ISO\u00a0Code", minWidth: 100 },
//   {
//     id: "population",
//     label: "Population",
//     minWidth: 170,
//     align: "right",
//     format: (value) => value.toLocaleString("en-US"),
//   },
//   {
//     id: "size",
//     label: "Size\u00a0(km\u00b2)",
//     minWidth: 170,
//     align: "right",
//     format: (value) => value.toLocaleString("en-US"),
//   },
//   {
//     id: "density",
//     label: "Density",
//     minWidth: 170,
//     align: "right",
//     format: (value) => value.toFixed(2),
//   },
// ];

// function createData(name, code, population, size) {
//   const density = population / size;
//   return { name, code, population, size, density };
// }

// const rows = [
//   createData("India", "IN", 1324171354, 3287263),
//   createData("China", "CN", 1403500365, 9596961),
//   createData("Italy", "IT", 60483973, 301340),
//   createData("United States", "US", 327167434, 9833520),
//   createData("Canada", "CA", 37602103, 9984670),
//   createData("Australia", "AU", 25475400, 7692024),
//   createData("Germany", "DE", 83019200, 357578),
//   createData("Ireland", "IE", 4857000, 70273),
//   createData("Mexico", "MX", 126577691, 1972550),
//   createData("Japan", "JP", 126317000, 377973),
//   createData("France", "FR", 67022000, 640679),
//   createData("United Kingdom", "GB", 67545757, 242495),
//   createData("Russia", "RU", 146793744, 17098246),
//   createData("Nigeria", "NG", 200962417, 923768),
//   createData("Brazil", "BR", 210147125, 8515767),
// ];

// const SellingProducts = () => {
// const [time, setTime] = React.useState("");

// const handleChange = (event) => {
//   setTime(event.target.value);
// };

//   const [page, setPage] = React.useState(0);
//   const [rowsPerPage, setRowsPerPage] = React.useState(10);

//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(+event.target.value);
//     setPage(0);
//   };

//   return (
//     <Box sx={{ marginTop: "3rem" }}>
//       <Box>
//         <Typography variant="h5">Top Selling Products</Typography>
//       </Box>

//       <Box
//         sx={{
//           display: "flex",
//           justifyContent: "space-between",
//           alignItems: "center",
//         }}
//       >
//         <FormControl sx={{ m: 1, minWidth: 250 }} size="small">
//           <InputLabel id="demo-select-small-label">Today</InputLabel>
//           <Select
//             labelId="demo-select-small-label"
//             id="demo-select-small"
//             value={time}
//             label="Time"
//             onChange={handleChange}
//           >
//             <MenuItem value="">
//               <em>None</em>
//             </MenuItem>
//             <MenuItem value={7}>Weekly</MenuItem>
//             <MenuItem value={30}>Monthly</MenuItem>
//             <MenuItem value={365}>Yearly</MenuItem>
//           </Select>
//         </FormControl>
//         <Button sx={{ background: "orange" }} variant="contained">
//           <DownloadIcon />
//           Download to Excel
//         </Button>
//       </Box>

//       <Paper
//         sx={{
//           width: "100%",
//           overflow: "hidden",
//           boxShadow:
//             "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;",
//         }}
//       >
//         <TableContainer>
//           <Table stickyHeader aria-label="sticky table">
//             <TableHead>
//               <TableRow>
//                 {columns.map((column) => (
//                   <TableCell
//                     key={column.id}
//                     align={column.align}
//                     style={{
//                       minWidth: column.minWidth,
//                       background: "orange",
//                       color: "white",
//                     }}
//                   >
//                     {column.label}
//                   </TableCell>
//                 ))}
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {rows
//                 .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//                 .map((row) => {
//                   return (
//                     <TableRow
//                       hover
//                       role="checkbox"
//                       tabIndex={-1}
//                       key={row.code}
//                     >
//                       {columns.map((column) => {
//                         const value = row[column.id];
//                         return (
//                           <TableCell key={column.id} align={column.align}>
//                             {column.format && typeof value === "number"
//                               ? column.format(value)
//                               : value}
//                           </TableCell>
//                         );
//                       })}
//                     </TableRow>
//                   );
//                 })}
//             </TableBody>
//           </Table>
//         </TableContainer>
//         <TablePagination
//           style={{
//             display: "flex",
//             justifyContent: "center",
//           }}
//           rowsPerPageOptions={[10, 25, 100]}
//           component="div"
//           count={rows.length}
//           rowsPerPage={rowsPerPage}
//           page={page}
//           onPageChange={handleChangePage}
//           onRowsPerPageChange={handleChangeRowsPerPage}
//         />
//       </Paper>
//     </Box>
//   );
// };

// export default SellingProducts;

import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { visuallyHidden } from "@mui/utils";

import Button from "@mui/material/Button";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import DownloadIcon from "@mui/icons-material/Download";

function createData(id, img, name, calories, fat, carbs, protein) {
  return {
    id,
    img,
    name,
    calories,
    fat,
    carbs,
    protein,
  };
}

const rows = [
  createData(
    1,
    "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    "Example",
    305,
    3.7,
    67,
    4.3
  ),
  createData(
    2,
    "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    "Example",
    452,
    25.0,
    51,
    4.9
  ),
  createData(
    3,
    "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    "Example",
    262,
    16.0,
    24,
    6.0
  ),
  createData(
    4,
    "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    "Example",
    159,
    6.0,
    24,
    4.0
  ),
  createData(
    5,
    "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    "Example",
    356,
    16.0,
    49,
    3.9
  ),
  createData(
    6,
    "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    "Example",
    408,
    3.2,
    87,
    6.5
  ),
  createData(
    7,
    "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    "Example",
    237,
    9.0,
    37,
    4.3
  ),
  createData(
    8,
    "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    "Example",
    375,
    0.0,
    94,
    0.0
  ),
  createData(
    9,
    "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    "Example",
    518,
    26.0,
    65,
    7.0
  ),
  createData(
    10,
    "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    "Example",
    392,
    0.2,
    98,
    0.0
  ),
  createData(
    11,
    "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
    "Example",
    318,
    0,
    81,
    2.0
  ),
  createData(
    12,
    "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    "Example",
    360,
    19.0,
    9,
    37.0
  ),
  createData(
    13,
    "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    "Example",
    437,
    18.0,
    63,
    4.0
  ),
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: "name",
    numeric: false,
    disablePadding: true,
    label: "Dessert (100g serving)",
  },

  {
    id: "calories",
    numeric: true,
    disablePadding: false,
    label: "Calories",
  },
  {
    id: "fat",
    numeric: true,
    disablePadding: false,
    label: "Fat (g)",
  },
  {
    id: "carbs",
    numeric: true,
    disablePadding: false,
    label: "Carbs (g)",
  },
  {
    id: "protein",
    numeric: true,
    disablePadding: false,
    label: "Protein (g)",
  },
];

function EnhancedTableHead(props) {
  const { order, orderBy, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow sx={{ background: "orange" }}>
        <TableCell padding="checkbox"></TableCell>
        {headCells.map((headCell) => (
          <TableCell
            sx={{
              color: "white",
            }}
            key={headCell.id}
            align={headCell.numeric ? "right" : "left"}
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
        <TableCell padding="checkbox"></TableCell>
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

export default function EnhancedTable() {
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("calories");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = (id) => selected.indexOf(id) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const visibleRows = React.useMemo(
    () =>
      stableSort(rows, getComparator(order, orderBy)).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage
      ),
    [order, orderBy, page, rowsPerPage]
  );

  return (
    <Box sx={{ width: "100%", mt: 6 }}>
      <Box>
        <Box sx={{ width: "100%" }}>
          <Box>
            <Box>
              <Typography variant="h5">Top Selling Products</Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mt: 1.5,
                mb: 1.5,
              }}
            >
              <FormControl sx={{ minWidth: 250 }} size="small">
                <InputLabel id="demo-select-small-label">Today</InputLabel>
                <Select
                  labelId="demo-select-small-label"
                  id="demo-select-small"
                  // value={time}
                  label="Time"
                  // onChange={handleChange}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={7}>Weekly</MenuItem>
                  <MenuItem value={30}>Monthly</MenuItem>
                  <MenuItem value={365}>Yearly</MenuItem>
                </Select>
              </FormControl>
              <Button sx={{ background: "orange" }} variant="contained">
                <DownloadIcon />
                Download to Excel
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
      <Paper sx={{ width: "100%", mb: 2 }}>
        {/* <ProductManagementTable numSelected={selected.length} /> */}
        <TableContainer>
          <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle">
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {visibleRows.map((row, index) => {
                const isItemSelected = isSelected(row.id);
                const labelId = `enhanced-table-checkbox-${index}`;

                return (
                  <TableRow
                    hover
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={row.id}
                    selected={isItemSelected}
                    sx={{ cursor: "pointer" }}
                  >
                    <TableCell padding="checkbox"></TableCell>
                    <TableCell
                      component="th"
                      id={labelId}
                      scope="row"
                      padding="none"
                      sx={{ display: "flex", alignItems: "center" }}
                    >
                      <ImageList>
                        <ImageListItem>
                          <img
                            src={`${row.img}?w=164&h=164&fit=crop&auto=format`}
                            alt="img"
                            loading="lazy"
                            style={{
                              width: 40,
                              height: 40,
                              background: "red",
                            }}
                          />
                        </ImageListItem>
                      </ImageList>
                      {row.name}
                    </TableCell>
                    <TableCell align="right">{row.calories}</TableCell>
                    <TableCell align="right">{row.fat}</TableCell>
                    <TableCell align="right">{row.carbs}</TableCell>
                    <TableCell align="right">{row.protein}</TableCell>
                    <TableCell padding="checkbox"></TableCell>
                  </TableRow>
                );
              })}
              {emptyRows > 0 && (
                <TableRow>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          sx={{ mr: 5 }}
        />
      </Paper>
    </Box>
  );
}

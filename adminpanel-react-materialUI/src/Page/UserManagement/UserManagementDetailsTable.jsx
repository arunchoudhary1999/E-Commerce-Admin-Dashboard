import * as React from "react";
import PropTypes from "prop-types";
import { alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import DeleteIcon from "@mui/icons-material/Delete";
import FilterListIcon from "@mui/icons-material/FilterList";
import { visuallyHidden } from "@mui/utils";

import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Divider from "@mui/material/Divider";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

function createData(
  id,
  img,
  name,
  calories,
  fat,
  carbs,
  protein,
  suger,
  vitamin
) {
  return {
    id,
    img,
    name,
    calories,
    fat,
    carbs,
    protein,
    suger,
    vitamin,
  };
}

const rows = [
  createData(
    1,
    "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    "Cupcake",
    305,
    3.7,
    67,
    4.3,
    3.7,
    "Active"
  ),
  createData(
    2,
    "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    "Donut",
    452,
    25.0,
    51,
    4.9,
    3.7,
    "Active"
  ),
  createData(
    3,
    "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    "Eclair",
    262,
    16.0,
    24,
    6.0,
    3.7,
    "Active"
  ),
  createData(
    4,
    "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    "Frozen yoghurt",
    159,
    6.0,
    24,
    4.0,
    3.7,
    "Active"
  ),
  createData(
    5,
    "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    "Gingerbread",
    356,
    16.0,
    49,
    3.9,
    3.7,
    "Active"
  ),
  createData(
    6,
    "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    "Honeycomb",
    408,
    3.2,
    87,
    6.5,
    3.7,
    "Active"
  ),
  createData(
    7,
    "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    "Ice cream sandwich",
    237,
    9.0,
    37,
    4.3,
    3.7,
    "Active"
  ),
  createData(
    8,
    "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    "Jelly Bean",
    375,
    0.0,
    94,
    0.0,
    3.7,
    "Active"
  ),
  createData(
    9,
    "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    "KitKat",
    518,
    26.0,
    65,
    7.0,
    3.7,
    "Active"
  ),
  createData(
    10,
    "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    "Lollipop",
    392,
    0.2,
    98,
    0.0,
    3.7,
    "Active"
  ),
  createData(
    11,
    "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
    "Marshmallow",
    318,
    0,
    81,
    2.0,
    3.7,
    "Active"
  ),
  createData(
    12,
    "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    "Nougat",
    360,
    19.0,
    9,
    37.0,
    3.7,
    "Active"
  ),
  createData(
    13,
    "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    "Oreo",
    437,
    18.0,
    63,
    4.0,
    3.7,
    "Active"
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

// Since 2020 all major browsers ensure sort stability with Array.prototype.sort().
// stableSort() brings sort stability to non-modern browsers (notably IE11). If you
// only support modern browsers you can replace stableSort(exampleArray, exampleComparator)
// with exampleArray.slice().sort(exampleComparator)
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
  // {
  //   id: "images",
  //   numeric: false,
  //   disablePadding: true,
  //   label: "Images",
  // },
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
  {
    id: "suger",
    numeric: true,
    disablePadding: false,
    label: "Suger (g)",
  },
  {
    id: "vitamin",
    numeric: true,
    disablePadding: false,
    label: "Vitamin (g)",
  },
];

function EnhancedTableHead(props) {
  const {
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
  } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              "aria-label": "select all desserts",
            }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
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

function UserManagementDetailsTable(props) {
  const { numSelected } = props;

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(
              theme.palette.primary.main,
              theme.palette.action.activatedOpacity
            ),
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: "1 1 100%" }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Box sx={{ width: "100%" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{ flex: "1 1 100%" }}
              variant="h6"
              id="tableTitle"
              component="div"
            >
              Customers
            </Typography>
            <Paper
              component="form"
              sx={{
                p: "0px 4px",
                mr: 1.5,
                display: "flex",
                alignItems: "center",
                width: 250,
                border: "1px solid lightgray",
                boxShadow: "none",
              }}
            >
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search"
                inputProps={{ "aria-label": "search google maps" }}
              />
              <IconButton type="button" sx={{ p: "0px 5px" }}>
                <SearchIcon sx={{ height: 35 }} />
              </IconButton>
              <Divider sx={{ height: 25, m: 0.5 }} orientation="vertical" />
            </Paper>

            <Button
              className="OrderManagementButton"
              component="label"
              role={undefined}
              variant="contained"
              tabIndex={-1}
              sx={{
                background: "white",
                color: "black",
                p: "4.8px 15px",
                mr: 1.5,
                boxShadow: "none",
              }}
              startIcon={<CalendarMonthIcon />}
            >
              Filter
            </Button>
          </Box>
        </Box>
      )}

      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <IconButton className="OrderManagementButton">
            <FilterListIcon sx={{}} />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
}

UserManagementDetailsTable.propTypes = {
  numSelected: PropTypes.number.isRequired,
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

  const handleClick = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
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
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2, borderRadius: "8px" }}>
        <UserManagementDetailsTable numSelected={selected.length} />
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
                    onClick={(event) => handleClick(event, row.id)}
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={row.id}
                    selected={isItemSelected}
                    sx={{ cursor: "pointer" }}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox
                        color="primary"
                        checked={isItemSelected}
                        inputProps={{
                          "aria-labelledby": labelId,
                        }}
                      />
                    </TableCell>

                    <TableCell
                      component="th"
                      id={labelId}
                      scope="row"
                      padding="none"
                      // sx={{ display: "flex", alignItems: "center" }}
                    >
                      {/* <ImageList>
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
                      </ImageList> */}
                      {row.name}
                    </TableCell>
                    <TableCell align="right">{row.calories}</TableCell>
                    <TableCell align="right">{row.fat}</TableCell>
                    <TableCell align="right">{row.carbs}</TableCell>
                    <TableCell align="right">{row.protein}</TableCell>
                    <TableCell align="right">{row.suger}</TableCell>
                    <TableCell align="right">
                      <span
                        style={{
                          background: "rgba(50, 147, 111, 0.16)",
                          padding: "4px 11px 4px 11px",
                          borderRadius: "8px",
                          color: "rgba(81, 156, 102, 1)",
                          fontFamily: "Inter",
                          // fontSize: "11.9px",
                        }}
                      >
                        {row.vitamin}
                      </span>
                    </TableCell>
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
        />
      </Paper>
    </Box>
  );
}

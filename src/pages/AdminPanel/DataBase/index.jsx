import React, { useEffect } from "react";
import db from "./index.module.css";
import Search from "../../../img/search.svg";
import SideBar from "./../../../components/SideBar";
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
import Paper from "@mui/material/Paper";
import { visuallyHidden } from "@mui/utils";
import { useDispatch, useSelector } from "react-redux";
import { getAdmin, getUser, getUserFromAdmin } from "../../../api/admin";

function createData(name, gmail, data) {
  return {
    name,
    gmail,
    data,
  };
}

const rows = [];

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
    id: "id",
    numeric: false,
    disablePadding: true,
    label: "id",
    className: "head",
  },
  {
    id: "first_name",
    numeric: true,
    disablePadding: false,
    label: "Имя",
    className: "head",
  },
  {
    id: "last_name",
    numeric: true,
    disablePadding: false,
    label: "Фамилия",
    className: "head",
  },
  {
    id: "email",
    numeric: true,
    disablePadding: false,
    label: "email",
    className: "head",
  },
  {
    id: "last_visit_date",
    numeric: true,
    disablePadding: false,
    label: "Последний визит",
    className: "head",
  },
  {
    id: "",
    numeric: true,
    disablePadding: false,
    label: "",
    className: "head",
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
        {headCells.map((headCell) => (
          <TableCell
            className={db.head}
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

export default function DataBase({ id }) {
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("gmail");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.data);

  useEffect(() => {
    dispatch(getUser());
  }, []);

  // const handleAdminClick = (e) => {
  //   e.preventDefault();
  //   dispatch(getAdmin(id));
  // };

  const handleRequestSort = (event, property) => {
    event.preventDefault();
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleClick = (event, name) => {
    event.preventDefault();
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
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

  const isSelected = (name) => selected.indexOf(name) !== -1;

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;
  return (
    <div className={db.main_container}>
      <SideBar />
      <div className={db.container}>
        <form className={db.form}>
          <img className={db.img} src={Search} alt="" />
          <input
            className={db.search}
            type="search"
            placeholder="Поиск по ФИО, электронной почте, дате регистрации"
          />
        </form>
        <div className={db.border}></div>
        <Box sx={{ width: "100%" }}>
          <Paper sx={{ width: "100%", mb: 2 }}>
            <TableContainer>
              <Table
                className={db.table}
                aria-labelledby="tableTitle"
                size={dense ? "small" : "medium"}
              >
                <EnhancedTableHead
                  numSelected={selected.length}
                  order={order}
                  orderBy={orderBy}
                  onRequestSort={handleRequestSort}
                  rowCount={rows.length}
                />
                <TableBody>
                  {stableSort(users, getComparator(order, orderBy))
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((user, index) => {
                      const isItemSelected = isSelected(user.first_name);
                      const labelId = `enhanced-table-checkbox-${index}`;

                      return (
                        <TableRow
                          className={db.input}
                          hover
                          aria-checked={isItemSelected}
                          tabIndex={-1}
                          key={user.id}
                          selected={isItemSelected}
                        >
                          <TableCell
                            component="th"
                            id={labelId}
                            scope="row"
                            padding="none"
                          >
                            {user.id}
                          </TableCell>
                          <TableCell align="right">{user.first_name}</TableCell>
                          <TableCell align="right">{user.last_name}</TableCell>
                          <TableCell align="right">{user.email}</TableCell>
                          <TableCell align="right">
                            {user.last_visit_date}
                          </TableCell>
                          <TableCell align="right">
                            {user.role === "ROLE_USER" ? (
                              <button
                                className={db.getAdminBtn}
                                onClick={(e) => dispatch(getAdmin(user.id))}
                              >
                                Get Admin
                              </button>
                            ) : (
                              <button
                                className={db.getAdminBtn}
                                onClick={(e) =>
                                  dispatch(getUserFromAdmin(user.id))
                                }
                              >
                                Get User
                              </button>
                            )}
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  {emptyRows > 0 && (
                    <TableRow
                      style={{
                        height: (dense ? 33 : 53) * emptyRows,
                      }}
                    >
                      <TableCell colSpan={6} />
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              component="div"
              count={users.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Paper>
        </Box>
      </div>
    </div>
  );
}

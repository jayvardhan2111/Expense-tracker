import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import dayjs from "dayjs";
import { Container, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

function formatDate(date) {
  return dayjs(date).format("DD-MMM-YYYY");
}

export default function BasicTable({
  transactions,
  fetchTransactions,
  setEditTransaction,
}) {
  async function remove(_id) {
    if (!window.confirm("Are you sure to delete ?")) return;

    console.log(_id);
    let res = await fetch(`http://localhost:4000/transaction/${_id}`, {
      method: "DELETE",
    });

    if (res.ok) {
      fetchTransactions();
      window.alert("Deleted Successfully");
    }
  }
  return (
    <Container>
      <Typography sx={{ marginTop: 10, marginBottom:1 }} align="center" variant="h6">
       <b>Transactions List</b> 
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Amount</TableCell>
              <TableCell align="center">Description</TableCell>
              <TableCell align="center">Date</TableCell>
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {transactions.map((t) => (
              <TableRow
                key={t._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {t.amount}
                </TableCell>
                <TableCell align="center">{t.description}</TableCell>
                <TableCell align="center">{formatDate(t.date)}</TableCell>
                <TableCell align="center">
                  <IconButton
                    color="primary"
                    component="label"
                    onClick={() => setEditTransaction(t)}
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    color="warning"
                    component="label"
                    onClick={() => remove(t._id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}

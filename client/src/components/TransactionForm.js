import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { LocalizationProvider, DesktopDatePicker } from "@mui/x-date-pickers/";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const Initialform = { amount: 0, description: " ", date: "" };

export default function TransactionForm() {
  const [form, setForm] = useState(Initialform);
  const [transactions, setTransactions] = useState([]);



  return (
    <Card sx={{ minWidth: 275, marginTop: 10 }}>
      <CardContent>
        <Typography variant="h6">Add New Transaction</Typography>
        <form>
          <TextField
            id="outlined-basic"
            label="Amount"
            variant="outlined"
            sx={{ marginRight: 6 }}
            size="small"
          />
          <TextField
            id="outlined-basic"
            label="Description"
            variant="outlined"
            sx={{ marginRight: 6 }}
            size="small"
          />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DesktopDatePicker
              label="Transaction Date"
              inputFormat="MM/DD/YYYY"
              //   value={value}
            //   onChange={handleChange}
              renderInput={(params) => (
                <TextField {...params} sx={{ marginRight: 6 }} size="small" />
              )}
            />
          </LocalizationProvider>
          <Button variant="contained">Submit</Button>
        </form>
      </CardContent>
    </Card>
  );
}

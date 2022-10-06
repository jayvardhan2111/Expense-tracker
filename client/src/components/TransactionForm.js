import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { LocalizationProvider, DesktopDatePicker } from "@mui/x-date-pickers/";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const Initialform = { amount: 0, description: " ", date: new Date() };

export default function TransactionForm() {
  const [form, setForm] = useState(Initialform);

  function handleChange(e) {
    // It stores input changes in form object
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault(); // It prevents default form refresh on submit.

    // It makes an API req to backend, and sends form object in body of request.
    let res = await fetch("http://localhost:4000/transaction", {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "content-type": "application/json", // by setting this, we now get req.body as json in server.js file.
      },
    });
    if (res.ok) {
      setForm(Initialform);
      //   fetchTransactions();
    }
    console.log(res);
  }

  return (
    <Card sx={{ minWidth: 275, marginTop: 10 }}>
      <CardContent>
        <Typography variant="h6">Add New Transaction</Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            id="outlined-basic"
            label="Amount"
            variant="outlined"
            sx={{ marginRight: 6 }}
            size="small"
            name="amount"
            value={form.amount}
            onChange={handleChange}
          />
          <TextField
            id="outlined-basic"
            label="Description"
            variant="outlined"
            sx={{ marginRight: 6 }}
            size="small"
            name="description"
            value={form.description}
            onChange={handleChange}
          />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DesktopDatePicker
              label="Transaction Date"
              inputFormat="MM/DD/YYYY"
              value={form.date}
              name="date"
              onChange={handleChange}
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

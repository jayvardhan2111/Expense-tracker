import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { LocalizationProvider, DesktopDatePicker } from "@mui/x-date-pickers/";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const Initialform = { amount: null, description: null, date: null };

export default function TransactionForm({
  fetchTransactions,
  editTransaction,
  setEditTransaction
}) {
  // created a form state and stored all form data in form object.
  const [form, setForm] = useState(Initialform);

  useEffect(() => {
    if (editTransaction !== {}) {
      setForm(editTransaction);
    }
  }, [editTransaction]);

  function handleChange(e) {
    // It stores input changes in form object
    setForm({ ...form, [e.target.name]: e.target.value });
    
  }

  async function create(){
     // It makes an API req to backend, and sends form object in body of request.
     let res = await fetch("http://localhost:4000/transaction", {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "content-type": "application/json", // by setting this, we now get req.body as json in server.js file.
      },
    });
    return res
  }


  async function update(){
     // It makes an API req to backend, and sends form object in body of request.
     let res = await fetch(`http://localhost:4000/transaction/${editTransaction._id}`, {
      method: "PATCH",
      body: JSON.stringify(form),
      headers: {
        "content-type": "application/json", // by setting this, we now get req.body as json in server.js file.
      },
    });
    
    return res
  }


  

  async function handleSubmit(e) {
    e.preventDefault(); // It prevents default form refresh on submit. 

    let res;

    if (Object.keys(editTransaction).length == 0){
        res = await create()
       
    }
    else{
      res = await update()
      if(res.ok){
        setEditTransaction({})

      }
    }

   
    if (res.ok) {
      setForm(Initialform);
      fetchTransactions();
    }
    console.log(res);
  }

  function handleDate(newValue) {
    setForm({ ...form, date: newValue });
  }

  return (
    <Card sx={{ minWidth: 275, marginTop: 10 }}>
      <CardContent>
        <Typography variant="h6">Add New Transaction</Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            id="outlined-basic"
            label="Amount"
            type="Number"
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
              onChange={handleDate}
              renderInput={(params) => (
                <TextField {...params} sx={{ marginRight: 6 }} size="small" />
              )}
            />
          </LocalizationProvider>
          {console.log(editTransaction)}
          {Object.keys(editTransaction).length !== 0 ? (
            <Button type="submit" variant="contained" color="info">
              Update
            </Button>
          ) : (
            <Button type="submit" variant="contained">
              Submit
            </Button>
          )}

          {/* <Button type="submit" variant="contained">Submit</Button> */}
        </form>
      </CardContent>
    </Card>
  );
}

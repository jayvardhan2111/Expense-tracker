import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import AppBar from "./components/AppBar";
import TransactionForm from "./components/TransactionForm";
const Initialform = { amount: 0, description: " ", date: "" };

function App() {
  // created a form state and stored all form data in form object.
  const [form, setForm] = useState(Initialform);

  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetchTransactions();
  }, []);

  async function fetchTransactions() {
    let res = await fetch("http://localhost:4000/transaction");
    const data = await res.json();

    setTransactions(data);
    console.log(data);
  }

  function handleInput(e) {
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
      fetchTransactions();
    }
    console.log(res);
  }

  return (
    <div>
      <AppBar />
      <TransactionForm/>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          name="amount"
          placeholder=" Enter transaction amount "
          value={form.amount}
          onChange={handleInput}
        />
        <input
          type="text"
          name="description"
          placeholder=" Enter transaction details "
          onChange={handleInput}
        />
        <input type="date" name="date" onChange={handleInput} />
        <button>Submit</button>
      </form>
      
      <br></br>
      <br></br>

      <section>
        <table>
          <thead>
            <th>Amount</th>
            <th>Description</th>
            <th>Date</th>
          </thead>

          <tbody>
            {transactions?.map((trx) => (
              <tr key={trx._id}>
                <td>{trx.amount}</td>
                <td>{trx.description}</td>
                <td>{trx.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default App;

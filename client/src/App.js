import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import AppBar from "./components/AppBar";
import TransactionForm from "./components/TransactionForm";




function App() {
  // created a form state and stored all form data in form object.
 

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



 


  return (
    <div>
      <AppBar />
      <TransactionForm/>
      
      
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

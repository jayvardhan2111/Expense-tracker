import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import AppBar from "./components/AppBar";
import TransactionForm from "./components/TransactionForm";
import TransactionList from "./components/TransactionList";
import { Container } from "@mui/system";

function App() {
  const [transactions, setTransactions] = useState([]);
  const [editTransaction, setEditTransaction] = useState({});

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


      <Container>
        <TransactionForm fetchTransactions={fetchTransactions} editTransaction={editTransaction} setEditTransaction={setEditTransaction} />
      </Container>

      
      <TransactionList
        transactions={transactions}
        fetchTransactions={fetchTransactions}
        setEditTransaction={setEditTransaction}
      />
    </div>
  );
}

export default App;

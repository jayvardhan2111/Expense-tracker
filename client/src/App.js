import { useState } from "react";

function App() {
  const [form, setForm] = useState({
    amount: 0,
    description: " ",
    date: "",
  });

  function handleInput(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    let res = await fetch("http://localhost:4000/", {
      method: "POST",
      body: form,
    });
    console.log(res);
  }

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        action="http://localhost:4000/"
        method="POST"
      >
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
    </div>
  );
}

export default App;

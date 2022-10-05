import { useState } from "react";

function App() {
  // created a form state and stored all form data in form object.
  const [form, setForm] = useState({
    amount: 0,
    description: " ",
    date: "",
  });

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
      headers:{
        "content-type":"application/json"   // by setting this, we now get req.body as json in server.js file.
      }
    });
    console.log(res);
  }

  return (
    <div>
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
    </div>
  );
}

export default App;

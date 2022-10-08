

import AppBar from "./components/AppBar";

import { Outlet } from "react-router-dom";

function App() {
 

  return (


    <div>
      <AppBar />
      <Outlet />

    </div>
  );
}

export default App;

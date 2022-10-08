import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import * as React from "react";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
         
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/" className="text-white">Expense-Track</Link>
          </Typography>
          <Link to="/login" className="text-white"><Button color="inherit">Login</Button></Link>
          <Link to="/register" className="text-white"><Button color="inherit">Register</Button></Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

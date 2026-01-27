import { AppBar, Toolbar, Button } from "@mui/material";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <AppBar position="static" >
      <Toolbar>
        <Button color="inherit" component={Link} to="/">
          Dashboard
        </Button>
        <Button color="inherit" component={Link} to="/add">
          Add Patient
        </Button>
        <Button color="inherit" component={Link} to="/view">
          View Patients
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;

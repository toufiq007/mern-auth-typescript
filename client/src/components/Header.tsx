import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link
              to="/"
              style={{
                textDecoration: "none",
                fontSize: "30px",
                fontWeight: "bold",
                color: "#fff",
              }}
            >
              Mern auth
            </Link>
          </Typography>
          <Button color="primary">
            <Link style={{textDecoration:"none",fontSize:"18px"}} to="/sign-in">Sign In</Link>
          </Button>
          <Button color="primary">
            <Link style={{textDecoration:"none",fontSize:"18px"}} to="/sign-up">Sign Up</Link>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;

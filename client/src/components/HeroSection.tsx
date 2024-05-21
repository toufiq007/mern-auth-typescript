import { Box, Button } from "@mui/material";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const { user } = useSelector((state) => state?.auth);

  return (
    <Box>
      <Box
        sx={{
          width: "700px",
          mx: "auto",
          background: "#ededed",
          textAlign: "center",
          padding: "1rem",
          height: "300px",
          marginTop: "20px",
        }}
      >
        <h2>Welcom to {user?.user?.firstName}</h2>
        <h2 style={{ fontSize: "2rem" }}>Mern authentication</h2>
        <p>
          This is mern authentication demo page.Where you can login and signup.
          create user,update user profile and so more things in completely mern
          stack
        </p>
        <Box sx={{ marginTop: "30px" }}>
          <Link to="sign-in">
            <Button
              variant="contained"
              size="small"
              sx={{ marginRight: "20px", textTransform: "capitalize" }}
            >
              Sign In
            </Button>
          </Link>

          <Link to="/sign-up">
            <Button
              variant="contained"
              size="small"
              color="secondary"
              style={{ textTransform: "capitalize" }}
            >
              Sign UP
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default HeroSection;

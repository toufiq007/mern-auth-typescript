import { Box, Button } from "@mui/material";

const HeroSection = () => {
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
        <h2 style={{ fontSize: "2rem" }}>Mern authentication</h2>
        <p>
          This is mern authentication demo page.Where you can login and signup.
          create user,update user profile and so more things in completely mern
          stack
        </p>
        <Box sx={{ marginTop: "30px" }}>
          <Button
            variant="contained"
            size="small"
            sx={{ marginRight: "20px", textTransform: "capitalize" }}
          >
            Sign In
          </Button>

          <Button
            variant="contained"
            size="small"
            color="secondary"
            style={{ textTransform: "capitalize" }}
          >
            Sign UP
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default HeroSection;

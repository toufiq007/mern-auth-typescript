import FormContainer from "./FormContainer";
import { useForm } from "react-hook-form";
import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";

type FromType = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const SignUpScreen = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FromType>();
  const onSubmit = (data: FromType) => {
    const userObj = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      password: data.password,
    };
    console.log(userObj);
  };
  return (
    <FormContainer>
      <h2 style={{ textAlign: "center" }}>Sign In form</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="inputContainer" style={{ padding: "10px 0" }}>
          <label style={{ fontSize: "20px", display: "block" }}>
            First name
          </label>
          <input
            style={{
              marginTop: "10px",
              fontSize: "20px",
              width: "99%",
              padding: "5px",
              borderRadius: "10px",
            }}
            type="text"
            {...register("firstName", { required: "First name is required!!" })}
          />
          {errors.firstName && (
            <p style={{ color: "red" }}>{errors.firstName?.message}</p>
          )}
        </div>
        <div className="inputContainer" style={{ padding: "10px 0" }}>
          <label style={{ fontSize: "20px", display: "block" }}>
            Last name
          </label>
          <input
            style={{
              marginTop: "10px",
              fontSize: "20px",
              width: "99%",
              padding: "5px",
              borderRadius: "10px",
            }}
            type="text"
            {...register("lastName", { required: "last name is required!!" })}
          />
          {errors.lastName && (
            <p style={{ color: "red" }}>{errors.lastName?.message}</p>
          )}
        </div>
        <div className="inputContainer" style={{ padding: "10px 0" }}>
          <label style={{ fontSize: "20px", display: "block" }}>Email</label>
          <input
            style={{
              marginTop: "10px",
              fontSize: "20px",
              width: "99%",
              padding: "5px",
              borderRadius: "10px",
            }}
            type="email"
            {...register("email", { required: "Email is required!!" })}
          />
          {errors.email && (
            <p style={{ color: "red" }}>{errors.email?.message}</p>
          )}
        </div>

        <div className="inputContainer">
          <label style={{ fontSize: "20px", display: "block" }}>password</label>
          <input
            style={{
              marginTop: "10px",
              fontSize: "20px",
              width: "99%",
              padding: "5px",
              borderRadius: "10px",
            }}
            type="password"
            {...register("password", { required: "password is required!!" })}
          />
          {errors.password && (
            <p style={{ color: "red" }}>{errors.password?.message}</p>
          )}
        </div>

        <div className="inputContainer">
          <label style={{ fontSize: "20px", display: "block" }}>
            Confirm password
          </label>
          <input
            style={{
              marginTop: "10px",
              fontSize: "20px",
              width: "99%",
              padding: "5px",
              borderRadius: "10px",
            }}
            type="password"
            {...register("confirmPassword", {
              required: "password is requried!!",
              validate: (value) => {
                if (value !== watch("password")) {
                  return "password do not matched";
                }
              },
            })}
          />
          {errors.confirmPassword && (
            <p style={{ color: "red" }}>{errors.confirmPassword?.message}</p>
          )}
        </div>

        <Box
          sx={{
            marginTop: "10px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <span>already sign in?</span>
            <span>
              <Link to="/sign-in">login here</Link>
            </span>
          </div>
          <Button
            sx={{ marginTop: "20px" }}
            type="submit"
            variant="contained"
            size="medium"
          >
            Submit
          </Button>
        </Box>
      </form>
    </FormContainer>
  );
};

export default SignUpScreen;

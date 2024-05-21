import FormContainer from "./FormContainer";
import { useForm } from "react-hook-form";
import { Box, Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../redux/slices/userSlice/userSlice";

type FromType = {
  email: string;
  password: string;
};

const LoginScreen = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FromType>();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, loading, error } = useSelector((state) => state?.auth);
  const onSubmit = (data: { email: string; password: string }) => {
    const userObj = {
      email: data.email,
      password: data.password,
    };
    dispatch(loginUser(userObj));
    if (!loading) {
      navigate("/");
    }
  };
  console.log({ user, loading, error });
  return (
    <FormContainer>
      <h2 style={{ textAlign: "center" }}>Sign In form</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
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
            {...register("password", { required: "Email is required!!" })}
          />
          {errors.password && (
            <p style={{ color: "red" }}>{errors.email?.message}</p>
          )}

          <Box
            sx={{
              marginTop: "20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <span>not registered?</span>
              <span>
                <Link to="/sign-up">sign up</Link>
              </span>
            </div>

            <Button
              sx={{ marginTop: "20px" }}
              type="submit"
              variant="contained"
              size="medium"
            >
              {loading ? "loading..." : "submit"}
            </Button>
          </Box>
        </div>
      </form>
    </FormContainer>
  );
};

export default LoginScreen;

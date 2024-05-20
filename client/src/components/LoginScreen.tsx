import React from "react";
import FormContainer from "./FormContainer";
import { useForm } from "react-hook-form";
import { Button } from "@mui/material";

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
  const onSubmit = (data: { email: string; password: string }) => {
    console.log(data);
  };
  return (
    <FormContainer>
      <h2 style={{ textAlign: "center" }}>Sign In form</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="inputContainer" style={{ padding: "10px 0" }}>
          <label style={{ fontSize: "20px", marginBottom: "10px",display:"block" }}>
            Email
          </label>
          <input
            style={{
              marginTop: "10px",
              fontSize: "20px",
              width: "90%",
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
          <label style={{ fontSize: "20px", marginBottom: "10px",display:"block" }}>
            password
          </label>
          <input
            style={{
              marginTop: "10px",
              fontSize: "20px",
              width: "90%",
              padding: "5px",
              borderRadius: "10px",
            }}
            type="password"
            {...register("password", { required: "Email is required!!" })}
          />
          {errors.password && (
            <p style={{ color: "red" }}>{errors.email?.message}</p>
          )}

          <Button sx={{marginTop:"20px"}} type="submit" variant="contained" size="medium">
            Submit
          </Button>
        </div>
      </form>
    </FormContainer>
  );
};

export default LoginScreen;

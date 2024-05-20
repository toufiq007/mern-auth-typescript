import React from "react";

const FormContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      style={{
        width: "800px",
        margin: "0 auto",
        background: "#ededed",
        padding: "1rem",
        marginTop: "2rem",
        borderRadius:"10px"
      }}
    >
      {children}
    </div>
  );
};

export default FormContainer;

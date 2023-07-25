import React from "react";
import { TextField as MuiTextField } from "@mui/material";
import "./styles.css";

export default function TextField({
  children,
  className,
  variant = "standard",
  ...props
}) {
  return (
    <MuiTextField
      className={`input${className ? ` ${className}` : ""}`}
      variant={variant}
      {...props}
    >
      {children}
    </MuiTextField>
  );
}

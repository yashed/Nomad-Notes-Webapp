import React from "react";
import "./styles.css";
import TextField from "../../components/text-field";
import Checkbox from "../../components/checkbox";
import { Link } from "react-router-dom";
import { FormControlLabel } from "@mui/material";
import Button from "../../components/button";

export default function SignIn() {
  return (
    <div id="signin" className="container">
      <div className="section image-section">
        <img
          src="/images/signin/buildings-2.jpg"
          alt="Buildings"
          className="image"
        />
      </div>
      <div className="section form-section">
        <div className="content">
          <div className="title-wrap">
            <h1 className="title">Welcome Back, Jonathan</h1>
            <img
              src="/images/signin/wave-hand.svg"
              alt="Wave Hand Emoji"
              className="wave-hand"
            />
          </div>
          <form action="" className="form">
            <div className="fields">
              <TextField
                name="email"
                type="email"
                label="Email Address"
                placeholder="Email Address"
              />
              <TextField
                name="password"
                type="password"
                label="Password"
                placeholder="Password"
              />

              <div className="remember-me">
                <FormControlLabel
                  className="checkbox-wrap"
                  control={<Checkbox name="remember" />}
                  label="Remember Me"
                />
                <Link className="forgot-password-link">Forgot Password</Link>
              </div>
            </div>
            <div className="button-wrap">
              <Button type="submit" variant="contained" size="large">
                Log In
              </Button>
              <p className="bottom-text">
                Don’t have an account yet?{" "}
                <Link to="/signup">Create account</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

import { TextField } from "@mui/material";
import React, { useState } from "react";
import { Form_container } from "./Login.styled";

export const Login_form = ({ setting }) => {
  const [error, setError] = useState(false);

  const handle = () => {
    if (Number(setting.Number_Email)) {
      if (setting.Number_Email.length === 10) {
        setError(false);
        setting.setOtp_show(true);
      } else {
        setError(true);
      }
    } else {
      setting.setOtp_show(true);
    }
  };

  const handleChange = (e) => {
    setError(false);
    setting.setNumber_Email(e.target.value);
  };

  return (
    <Form_container>
      <div>
        <div className="style__cross-wrapper">
          <span
            className="style__pointer"
            onClick={() => {
              setting.setOtp_show(false);
              setting.setvisible(false);
            }}
          >
            ×
          </span>
        </div>

        <div>
          <div>
            <span className="LS_heading">Login</span>
          </div>

          <div className="otp_text">
            <span className="otp_text_span">
              Get access to your orders, lab tests & doctor consultations
            </span>
          </div>

          <div>
            <TextField
              error={error}
              id="standard-basic"
              label="Enter Email ID or Mobile Number"
              variant="standard"
              onChange={handleChange}
              helperText={
                error
                  ? "Please enter a valid 10 digit Mobile Number or Email ID"
                  : ""
              }
            />
          </div>

          <div>
            <div type="submit" onClick={handle}>
              <span>Login</span>
            </div>

            <div>
              <div>
                <span>Have an account?</span>
                <span onClick={() => setting.setShow(false)}>Sign Up</span>
              </div>
              <div>
                <span> For corporate Sign up,</span>
                <span>Click Here</span>
              </div>

              <div>By signing up, you agree to our</div>
              <div>
                <span>Terms and Conditions</span>&<span>Privacy Policy</span>
              </div>

              <div>
                <span>Need Help? Get In Touch</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Form_container>
  );
};

import React, { useState } from "react";
import { Signup_container } from "./Signup.styled";
import { TextField } from "@mui/material";

const Signup = ({ setting }) => {
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
    <Signup_container>
      <div>
        <div className="style__cross-wrapper">
          <span
            className="style__pointer"
            onClick={(e) => {
              setting.setOtp_show(false);
              setting.setvisible(false);
            }}
          >
            ×
          </span>
        </div>

        <div>
          <div className="LS_heading">
            <span>Sign Up</span>
          </div>

          <div className="otp_text">
            <span className="otp_text_span">
              Please enter your Mobile number to receive One Time Password (OTP)
            </span>
          </div>

          <div>
            <TextField
              error={error}
              id="standard-basic"
              label="Enter Mobile Number"
              variant="standard"
              onChange={handleChange}
              helperText={
                error ? "Please enter a valid mobile number to continue" : ""
              }
            />
          </div>

          <div>
            <div>
              <input type="checkbox" />
              <span>Are you a healthcare professional?</span>
            </div>

            <div onClick={handle}>Continue</div>
            <div>
              <span>Have an account?</span>
              <span onClick={() => setting.setShow(true)}>Login</span>
            </div>
            <div>
              <span>For corporate Sign up,</span>
              <span>Click Here</span>
            </div>
            <div>By signing up, you agree to our</div>
            <div>
              <span>Terms and Conditions </span>& <span>Privacy Policy</span>
            </div>
          </div>
        </div>
      </div>
    </Signup_container>
  );
};

export default Signup;

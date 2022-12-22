import { TextField } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Login_func } from "../Redux/actions";
import { Otp_container } from "./Otp_styled";

export const Otp_form = ({ setting }) => {
  const [error, setError] = useState(false);
  const [otp, setOtp] = useState();
  const dispatch = useDispatch();

  const handleOtp = () => {
    if (otp.length === 6 && Number(otp)) {
      Login_func(dispatch);
      setting.setOtp_show(false);
      setting.setvisible(false);
    } else {
      setError(true);
    }
  };

  return (
    <Otp_container>
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
            <span className="LS_heading">Verify OTP</span>
          </div>

          <div className="otp_text">
            <span className="otp_text_span">
              Provide OTP sent to {setting.Number_Email}
              <span onClick={() => setting.setOtp_show(false)}>Edit</span>
            </span>
          </div>

          <div>
            <TextField
              error={error}
              id="standard-basic"
              label="One Time Password"
              variant="standard"
              onChange={(e) => setOtp(e.target.value)}
              helperText={error ? "Incorrect entry." : ""}
            />
          </div>

          <div>
            <span>Get OTP on SMS</span>|<span>Get OTP on Call</span>
          </div>

          <div>
            <div onClick={handleOtp}>
              <span>Done</span>
            </div>

            <div>
              <div>
                <span>Need Help? Get In Touch</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Otp_container>
  );
};

import React, { Component } from "react";
import { useState } from "react";
import OtpInput from "react-otp-input";

export default function OtpCode() {
  // const [otp, setOtp] = useState("");
  // const handleChange = (otp) => setOtp({ otp });
 

    return (
      <OtpInput
        value={code}
        onChange={handleChange}
        isInputNum={true}
        shouldAutoFocus={true}
        numInputs={6}
        containerStyle="flex justify-between"
        inputStyle="w-8 h-8 rounded border border-solid mb-5"
      />
    );
  
}


import React, { useState } from "react";
import logo from "../../assets/images/logo.png";
import Login from "../login/Login";
import Auth from "../auth/Auth";

function LoginPage() {
  const [step, setStep] = useState(1);
  return (
    <>
      <main className="box-center">
        <div className="bg-white p-5 rounded-2xl flex flex-col items-center justify-center shadow-3xl">
          <div className="w-[200px] h-[71.7px] sm:mx-[116.5px]">
            <img src={logo} />
          </div>
          {step === 1 && <Login setStep={setStep} />}
          {step === 2 && <Auth setStep={setStep}/>}
        </div>
      </main>
    </>
  );
}

export default LoginPage;

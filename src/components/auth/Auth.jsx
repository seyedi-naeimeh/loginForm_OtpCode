import React, { useState } from "react";
import logo from "../../assets/images/logo.png";
import OTPInput, { ResendOTP } from "otp-input-react";
import * as Yup from "yup";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import OtpInput from "react-otp-input";

function Auth({ setStep }) {
  let navigate = useNavigate();
  const phone = useSelector((state) => state.data.value);
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const handleChange = (code) => {
    console.log(code);
    setCode(code);
  };

  //timer
  const [show, setShow] = useState(false);
  const [timer, setTimer] = useState("");

  const CountdownTimer = () => {
    let time = "0:59";
    let interval = setInterval(() => {
      let countdown = time.split(":");
      let minutes = parseInt(countdown[0], 10);
      let seconds = parseInt(countdown[1], 10);
      --seconds;
      minutes = seconds < 0 ? --minutes : minutes;
      if (minutes < 0) {
        clearInterval(interval);
        setShow(true);
      }
      if (seconds < 0 && minutes < 0) {
        seconds = "0" + seconds + 1;
        minutes = "0" + minutes + 1;
        time = minutes + ":" + seconds;
        clearInterval(interval);
        setTimer("");
        return time;
      }
      seconds = seconds < 10 ? "0" + seconds : seconds;
      minutes = minutes < 10 ? "0" + minutes : minutes;
      time = minutes + ":" + seconds;
      setTimer(time);
    }, 1000);

    return () => {
      clearInterval(interval);
      setTimer("");
    };
  };

  useEffect(() => {
    CountdownTimer();
  }, []);

  const handleResendOtp = () => {
    setShow(false);
    CountdownTimer();
  };

  const handleCheckOtp = (e) => {
    e.preventDefault();
    if (code === "") {
      setError("کد ورود الزامی است");
      return;
    }
    const pattern = /^[0-9]{6}$/;
    if (!pattern.test(code)) {
      setError("فرمت کد ورود معتبر نیست");
      return;
    }
    navigate(`/register/`)
    
  };

  const handlePhone = () => {
    setStep(1);
  };

  return (
    <>
      <div className="text-2xl my-[40px] font-bold">کد تایید را وارد کنید</div>
      <div>
        <div className="flex flex-row justify-between mb-5">
          <p>{timer}</p>
          <button className="text-[#0D61A4]" onClick={handleResendOtp}>
            {show && <p>دریافت مجدد کد تایید</p>}
          </button>
        </div>
        <form
          onSubmit={(e)=>handleCheckOtp(e)}
          className="text-right w-[248px] sm:w-[248px]"
        >
          <div className="mb-[16px] ">
            <label htmlFor="otp" className="leading-[21px]">
              لطفا کدی که به شماره {phone} پیامک شده را وارد کنید
            </label>
          </div>
          <div className="mb-5">
            <OtpInput
              value={code}
              onChange={handleChange}
              isInputNum={true}
              shouldAutoFocus={true}
              numInputs={6}
              containerStyle="flex justify-between"
              inputStyle="w-8 h-8 rounded border border-solid"
            />
            <span className=" text-rose-600 font-bold mb-5">
              {error}
            </span>
          </div>
          <button className="btn-primary sm:w-[248px]" type="sumbit">
        <p className="font-iranyekan">تایید </p>
      </button>
        </form>
      </div>
     
      <p onClick={(e) => handlePhone()}>
        شماره اشتباه است؟ <span className="color-">ویرایش شماره</span>
      </p>
    </>
  );
}
export default Auth;

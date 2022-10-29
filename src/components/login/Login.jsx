
import { ErrorMessage, useFormik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/UserSlice";
import axios from "axios";
import * as Yup from "yup";


let validate = Yup.object().shape({
  phoneNumber: Yup.string()
    .matches(
      new RegExp("^(\\+98|0)?9\\d{9}$"),
      "!لطفا شماره موبایل خود را صحیح وارد کنید "
    )
    .required("!بدون شماره موبایل"),
});

function Login({ setStep }) {
  const dispatch = useDispatch();
   
  const {values, errors, handleChange, handleSubmit, touched}=useFormik({
    initialValues: {
      phoneNumber: "",
    },
    validationSchema: validate,
    onSubmit: (value) => {
      console.log("hello")
      const data = value.phoneNumber;
      const postData = {
        mobile: `${data}`,
      }
      dispatch(login(data));
      setStep(2);
      axios
        .post("https://nakhll.com/api/v1/auth/begin/login_register/", postData)
        .then((response) => {
          console.log(response.data);
          localStorage.setItem("phoneNumber", JSON.stringify(value))
        })
        .catch((error) => {});
    },
  })
  return (
    <>
      <div className="text-2xl my-[40px] font-bold">ورود/ثبت نام</div>
      <form onSubmit={handleSubmit} className="text-right w-[248px] sm:w-[320px] flex flex-col items-center hustify-center">
      <div className="flex flex-col">
        <label
          className="leading-[21px] mb-[16px] ml-auto"
          htmlFor="cellPhone"
        >
          لطفا شماره تلفن همراه خود را وارد کنید
        </label>
        
          <input
            ref={(input) => {
              input && input.focus();
            }}
            value={values.phoneNumber}
            id="phoneNumber"
            name="phoneNumber"
            type="text"
            onChange={(e) => {
              handleChange(e);
            }}
            autoFocus={true}
            autoComplete="off"
            placeholder="09********"
            className={
              touched.phoneNumber && errors.phoneNumber
                ? "border w-[248px] h-[40px] text-right tracking-[.5px] rounded-[6px] p-3 focus:appearance-none  outline-none sm:w-[290px]"
                : "input-primry sm:w-[290px]"
            }
          />
           {touched.phoneNumber && errors.phoneNumber && (
            <span className="text-rose-600 font-bold mb-[40px] mt-1 ml-auto">
              {errors.phoneNumber}
            </span>
          )}
        </div>
        <button className="btn-primary sm:w-[290px]" type="submit">
        <p className="text-sm">تایید </p>
      </button>
      </form>
     
    </>
  );
}

export default Login;
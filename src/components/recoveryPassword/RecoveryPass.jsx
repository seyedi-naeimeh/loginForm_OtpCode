import React from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import logo from "../../assets/images/logo.png";
import { useNavigate } from "react-router-dom";

let validate = Yup.object().shape({
  password: Yup.string().required(".رمز خود را وارد کنید"),
  passwordConfirmation: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "رمز جدید و تکرار آن یکی نیست"
  ).required((" رمز خود را وارد کنید"))
});

const RecoveryPass = () => {
  let navigate = useNavigate();
  const { values, errors, handleChange, handleSubmit, touched } = useFormik({
    initialValues: {
      password: "",
      passwordConfirmation: "",
    },
    validationSchema: validate,
    onSubmit: (values) => {
      navigate(`/password`)
    }
  });

  const handleClick = () => {
    navigate(`/auth`);
  };
  return (
    <main className="box-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-5 rounded-2xl flex flex-col items-center justify-center shadow-3xl"
      >
        <div className=" w-[200px] h-[71.7px] sm:mx-[116.5px]">
          <img src={logo} />
        </div>
        <div  className="flex flex-col items-center justify-center">
          <div className="text-2xl my-[40px] font-bold">بازیابی رمز ورود </div>
          <div className="mb-[16px] ml-auto">
            <label htmlFor="password" className="leading-[21px] ">
              :رمز عبور جدید
            </label>
          </div>
          <input
            id="password"
            name="password"
            type="text"
            autoFocus={true}
            autoComplete="off"
            onChange={(e) => {
              handleChange(e);
            }}
            value={values.password}
            className={
              touched.password && errors.password
                ? "border w-[248px] h-[40px] text-right tracking-[.5px] rounded-[6px] p-3 focus:appearance-none  outline-none sm:w-[290px]"
                : "input-primry sm:w-[290px]"
            }
          />
          {touched.password && errors.password && (
            <span className="text-rose-600 font-bold mb-[40px] ml-auto">
              {errors.password}
            </span>
          )}
        </div>
        <div  className="flex flex-col items-center justify-center">
          <div className="mb-[16px] ml-auto">
            <label htmlFor="passwordConfirmation" className="leading-[21px]">
              :تکرار رمز جدید
            </label>
          </div>
          <input
            id="passwordConfirmation"
            name="passwordConfirmation"
            type="text"
            autoComplete="off"
            onChange={(e) => {
              handleChange(e);
            }}
            value={values.passwordConfirmation}
            className={
              touched.passwordConfirmation && errors.passwordConfirmation
                ? "border w-[248px] h-[40px] text-right tracking-[.5px] rounded-[6px] p-3 focus:appearance-none  outline-none sm:w-[290px]"
                : "input-primry sm:w-[290px]"
            }
          />
          {touched.passwordConfirmation && errors.passwordConfirmation && (
            <span className="text-rose-600 font-bold mb-[40px] ml-auto">
              {errors.passwordConfirmation}
            </span>
          )}
        </div>
        <button type="submit" className="btn-primary sm:w-[290px]">
          تایید
        </button>
      </form>
    </main>
  );
};
export default RecoveryPass;

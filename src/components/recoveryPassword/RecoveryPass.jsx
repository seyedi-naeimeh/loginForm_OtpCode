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
  ),
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
      alert(JSON.stringify(values, null, 2));
    },
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
            onChange={(e) => {
              handleChange(e);
            }}
            value={values.password}
            className={
              touched.password && errors.password
                ? "border w-[248px] h-[40px] text-right tracking-[.5px] rounded-[6px] p-3 focus:appearance-none  outline-none"
                : "input-primry"
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
            onChange={(e) => {
              handleChange(e);
            }}
            value={values.passwordConfirmation}
            className={
              touched.passwordConfirmation && errors.passwordConfirmation
                ? "border w-[248px] h-[40px] text-right tracking-[.5px] rounded-[6px] p-3 focus:appearance-none  outline-none"
                : "input-primry"
            }
          />
          {touched.passwordConfirmation && errors.passwordConfirmation && (
            <span className="text-rose-600 font-bold mb-[40px] ml-auto">
              {errors.passwordConfirmation}
            </span>
          )}
        </div>
        <button type="submit" className="btn-primary">
          تایید
        </button>
      </form>
    </main>
  );
};
export default RecoveryPass;

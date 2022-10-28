import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

let validate = Yup.object().shape({
  password: Yup.string().required(".رمز خود را وارد کنید"),
});

const Password = () => {
  const { values, errors, handleChange, handleSubmit, touched } = useFormik({
    initialValues: {
      password: "",
    },
    validationSchema: validate,
    onSubmit: (values) => {
      console.log("heloooo");
    },
  });
  return (
    <main className="box-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-5 rounded-2xl flex flex-col items-center justify-center shadow-3xl"
      >
        <div className=" w-[200px] h-[71.7px] sm:mx-[116.5px]">
          <img src={logo} />
        </div>
        <div className="text-2xl my-[40px] font-bold">رمز عبور وارد کنید</div>
        <div className="flex flex-col items-center justify-center">
          <input
            ref={(input) => {
              input && input.focus();
            }}
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
                ? "border w-[248px] h-[40px] text-right tracking-[.5px] rounded-[6px] p-3   focus:appearance-none  outline-none"
                : "input-primry"
            }
          />
          {touched.password && errors.password && (
            <span className="text-rose-600 font-bold mb-[40px] ml-auto mt-2">
              {errors.password}
            </span>
          )}
        </div>
        <button type="submit" className="btn-primary">
          تایید
        </button>
        <Link to="/loginPage" className="mb-[8px]">
          <p>رمز عبور را فراموش کرده اید؟</p>
        </Link>
        <Link to="/loginPage">
          <p>ورود با کد یکبار مصرف</p>
        </Link>
      </form>
    </main>
  );
};
export default Password;

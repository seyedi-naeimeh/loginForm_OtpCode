import React, { useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import logo from "../../assets/images/logo.png";
import { useNavigate } from "react-router-dom";

const validate = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "!کوتاه است")
    .max(50, "!بلند است")
    .required("نام خود را وارد کنید"),
  lastName: Yup.string()
    .min(2, "خیلی کوتاه است !")
    .max(50, "بلند است !")
    .required("نام خانوادگی خود را وارد کنید"),
});

function Register() {
  let navigate = useNavigate();
  const { values, errors, handleChange, handleSubmit, touched } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
    },
    validationSchema: validate,
    onSubmit: (values) => {
      navigate(`/`);
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
        <div className="text-2xl my-[40px] font-bold">ثبت نام</div>
        <div className="flex flex-col items-center justify-center">
          <div className="mb-[16px] ml-auto">
            <label htmlFor="firstName" className="leading-[21px] ">
              : نام
            </label>
          </div>
          <div className="flex flex-col">
            <input
              id="firstName"
              name="firstName"
              type="text"
              autoFocus={true}
              autoComplete="off"
              onChange={(e) => {
                handleChange(e);
              }}
              value={values.firstName}
              className={
                touched.firstName && errors.firstName
                  ? "border w-[248px] h-[40px] text-right tracking-[.5px] rounded-[6px] p-3 focus:appearance-none  outline-none sm:w-[290px]"
                  : "input-primry sm:w-[290px]"
              }
            />
            {touched.firstName && errors.firstName && (
              <span className="text-rose-600 font-bold mb-[40px] ml-auto">
                {errors.firstName}
              </span>
            )}
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
        <div className="mb-[16px] ml-auto">
          <label htmlFor="lastName" className="leading-[21px]">
            : نام خانوادگی
          </label>
        </div>
        <div className="flex flex-col">
          <input
            id="lastName"
            name="lastName"
            type="text"
            autoComplete="off"
            onChange={(e) => {
              handleChange(e);
            }}
            value={values.lastName}
            className={
              touched.lastName && errors.lastName
                ? "border w-[248px] h-[40px] text-right tracking-[.5px] rounded-[6px] p-3 focus:appearance-none  outline-none sm:w-[290px]"
                : "input-primry sm:w-[290px]"
            }
          />
          {touched.lastName && errors.lastName && (
            <span className="text-rose-600 font-bold mb-[40px] ml-auto">
              {errors.lastName}
            </span>
          )}
        </div>
        </div>

        <button type="submit" className="btn-primary sm:w-[290px]">
          تایید
        </button>
      </form>
    </main>
  );
}

export default Register;

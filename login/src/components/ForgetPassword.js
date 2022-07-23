import { Login } from "heroicons-react";
import React, { useEffect, useState } from "react";
import image from "../assets/Bg.jpg";
import forget from "../assets/mail.jpg";
import { NavLink } from "react-router-dom";
import Validation from "./Validation-signin";

export default function Forgetpassword() {
  const [values, setValues] = useState({
    email: "",
  });
  const [errors, setErrors] = useState({});
  const [dataIsCorrect, setDataIsCorrect] = useState(false);
  const [submitForm, setSubmitForm] = useState(false);

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };
  const handleformsubmit = (event) => {
    event.preventDefault();
    setErrors(Validation(values));
    setDataIsCorrect(true);
  };
  useEffect(() => {
    if (Object.keys(errors).length === 0 && dataIsCorrect) {
      setSubmitForm(true);
    }
  }, [errors]);
  return (
    <nav>
      <NavLink
        className="text-xs text-blue-600 hover:underline"
        to="/forgetpassword"
        exact
      ></NavLink>
      <img src={image} className="absolute w-full h-full" />

      <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
        <div className="w-96 p-6 m-auto bg-white rounded-md shadow-xl lg:max-w-xl">
          <h1 className="text-3xl font-semibold text-left text-blue-700 ">
            Forget Password
          </h1>

          <div className=" align-bottom px-5 bg-white mt-5 mb-5 text-blue-600/50">
            Enter your registered email below to receive password reset
            instruction
          </div>

          <div className="flex items-center justify-center">
            <img src={forget} width="200px" />
          </div>

          <form className="mt-6">
            <div className="mb-2 mt-5">
              <label
                for="email"
                class="input block text-sm font-semibold text-gray-800"
              >
                <input
                  class="input__field block w-full px-4 py-2 mt-2 text-blue-700 bg-white border rounded-md focus:border-bg-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  type="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  placeholder=" "
                />

                <span className="input__label">Email</span>
              </label>
            </div>
            {errors.email && <p className="text-red-500">{errors.email}</p>}
            <div className="mt-6 mb-10">
              <button
                className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-700 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                onClick={handleformsubmit}
              >
                Reset Password
              </button>
            </div>
            <div className="mt-6 mb-10" STYLE="font-weight:bold">
              Remember Password? <span STYLE="color:blue"></span>
            </div>
          </form>
        </div>
      </div>
    </nav>
  );
}

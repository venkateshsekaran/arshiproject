import { Login } from "heroicons-react";
import React, { useEffect, useState } from "react";
import image from "../assets/Bg.jpg";
import { GoogleLoginButton } from "react-social-login-buttons";
import { LinkedInLoginButton } from "react-social-login-buttons";
import { NavLink } from "react-router-dom";
import Validation from "../components/Validation-signup";

export default function Sign_up() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [dataIsCorrect, setDataIsCorrect] = useState(false);
  const [submitForm, setSubmitForm] = useState(false);

  const handleChange = (event) => {
    console.log("event===", event.target.value);
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
      <NavLink className="navbar-item" to="/register " exact></NavLink>
      <img src={image} className="absolute w-full h-full" />

      <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
        <div className="w-96 p-6 m-auto bg-white rounded-md shadow-xl lg:max-w-xl">
          <h1 className="text-3xl font-semibold  text-blue-700 uppercase">
            Sign up
          </h1>

          <form className="mt-6">
            <div className="flex mt-4 gap-x-2  ">
              <button className="flex items-center justify-center w-60 h-[60px] bg-white border-blue-200 p-2  rounded-md focus:ring-2 focus:ring-offset-1 focus:ring-violet-600">
                <div className="bold">
                  <NavLink to="">
                    <GoogleLoginButton text="  Google" iconSize="28 " />
                  </NavLink>
                </div>
              </button>
              <button className="flex items-center justify-center w-60 h-[60px] bg-white  border-blue-200 border-2 rounded-md focus:ring-2 focus:ring-offset-1">
                <div className="bold ">
                  <NavLink
                    to="/sign-up"
                    className="p-0 m-0 flex justify-center items-center no-underline"
                  >
                    <i className="ri-linkedin-box-fill ri-2x"></i>
                    <div className="text-xl font-semibold ml-1 text-black">
                      LinkedIn
                    </div>
                  </NavLink>
                </div>
              </button>
            </div>
            <div className="relative flex items-center justify-center w-full mt-6 border border-t">
              <div className="absolute px-5 bg-white text-blue-400 ">
                Or Sign up with Email{" "}
              </div>
            </div>

            <div className="mb-2 mt-5">
              <label
                for="name"
                className="input block text-sm font-semibold text-gray-800"
              >
                <input
                  className="input__field block w-full px-4 py-2 mt-2 text-blue-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  type="text"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  placeholder=" "
                />

                {errors.name && <p className="text-red-500">{errors.name}</p>}
                <span className="input__label">Name</span>
              </label>
            </div>
            <div className="mb-2 mt-5">
              <label
                for="email"
                className="input block text-sm font-semibold text-gray-800"
              >
                <input
                  className="input__field block w-full px-4 py-2 mt-2 text-blue-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  type="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  placeholder=" "
                />

                <span className="input__label">Email</span>
              </label>
              {errors.email && (
                <p className="text-red-500 m-0 ">{errors.email}</p>
              )}
            </div>

            <div className="mb-2 mt-5 forget">
              <label
                for="password"
                className="input block text-sm font-semibold text-gray-800"
              >
                <input
                  className="input__field block w-full px-4 py-2 mt-2 text-blue-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  type="password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  placeholder=" "
                />
                {values.password.length > 8 ? (
                  <span className="input__label">
                    <div className="text-green-500">Password</div>
                  </span>
                ) : (
                  <span className="input__label ">Password</span>
                )}
              </label>
              {errors.password && (
                <p className="text-red-500 m-0 ">{errors.password}</p>
              )}
              {values.password.length > 8 && (
                <p className="text-green-500">Very Strong</p>
              )}
            </div>
            <p className="mt-6 text-lg font-light text-gray-700">
              {""}
              By signing up,I accept the Goal.ly{" "}
              <a href="#">Terms of Services</a> and acknowdledge the{" "}
              <a href="#">Privacy Policy</a>.
            </p>
            <div className="flex justify-between items-center mb-6"></div>
            <div className="mt-6">
              <button
                className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-700 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                onClick={handleformsubmit}
              >
                Sign up
              </button>
            </div>
          </form>

          <p className="mt-8 text-lg font-light text-center text-gray-700">
            {" "}
            Already have an account?{" "}
            <NavLink
              to="/"
              className="font-medium text-blue-600 hover:underline"
            >
              Sign in
            </NavLink>
          </p>
        </div>
      </div>
    </nav>
  );
}

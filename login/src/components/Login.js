import React, { useRef, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Eye } from "heroicons-react";
import { EyeOff } from "heroicons-react";
import axios from "axios";
// import Navbar from "./Navbar";

function Login() {
  let [initialValue, setInitialValue] = useState({ email: "", password: "" });

  let [passwordType, setPasswordType, setPasswordInput] = useState("password");
  let [isSubmit, setIsSubmit] = useState("false");
  let [error, setError] = useState([]);
  let buttonref = useRef(null);
  let enbbtn = (event) => {
    buttonref.current.disabled = !event.target.checked;
  };
  const changeHandler = (event) => {
    setInitialValue({
      ...initialValue,
      [event.target.name]: event.target.value,
    });
  };
  const togglePassword = (e) => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };

  let addHandler = (event) => {
    if (Object.values(error).length === 0 && isSubmit) {
      let details = {
        email: initialValue.email,
        password: initialValue.password,
      };
      axios
        .post("http://localhost:3001/pub/login", details)
        .then((response) => console.log("response is:", response));

      setInitialValue({ email: "", password: "" });
    }
  };

  let submitHandler = (event) => {
    event.preventDefault();
    setError(validate(initialValue));
    setIsSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(error).length === 0 && isSubmit) {
      console.log(initialValue);
    }
  }, [error]);

  const validate = (values) => {
    const errors = {};
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!values.email) {
      errors.email = "email is required";
    } else if (!regex.test(values.email)) {
      errors.email = "please enter a valid email";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 7) {
      errors.password = "please enter minimum 7 characters for password";
    }

    return errors;
  };

  return (
    <div>
      <div className="min-h-full flex items-center justify-center py-10 px-0 my-5 sm:px-6 lg:px-8 min-h-screen flex flex-col">
        <div className="max-w-md w-full space-y8 bg-white px-7 py-9 rounded shadow-md">
          {/* <pre>{JSON.stringify(formValues, undefined, 2)}</pre> */}

          <div>
            <h1 className="mt-6 text-3xl font-semibold font-extrabold text-gray-900">
              Welcome
            </h1>
          </div>
          <div>
            <form
              className="mt-8 space-y-6"
              action="#"
              method="POST"
              onSubmit={submitHandler}
            >
              <div>
                <input
                  className="apperence-none rounded-none outline-inherit 
              rounded relative block w-full px-3 py-3 border border-b-neutral-900 
              rounded-t-md focus:outline-none focus:ring-indigo-50  focus:z-10 
              sm:text-sm outline:none placeholder:italic placeholder:text-slate-400 "
                  type="email"
                  id="email"
                  name="email"
                  value={initialValue.email}
                  placeholder="Enter UserName or Email"
                  onChange={changeHandler}
                />
                <p className="text-red-500">{error.email}</p>
              </div>
              <div className="py-2 relative">
                <input
                  className="apperence-none rounded-none rounded relative block 
              w-full px-2.5 py-3 border border-b-neutral-900 rounded-t-md 
              focus:outline-none focus:ring-indigo-500 focus:z-10 sm:text-sm  
              outline:none placeholder:italic placeholder:text-slate-400 "
                  type={passwordType}
                  name="password"
                  id="password"
                  value={initialValue.password}
                  onChange={changeHandler}
                  placeholder="Please Enter Password"
                />
                <p className="text-red-500">{error.password}</p>
                <div className="absolute inset-y-0 right-2 top-5 items-center text-sm z-10">
                  <button onClick={(e) => togglePassword(e)}>
                    {passwordType === "password" ? <EyeOff /> : <Eye />}
                  </button>
                </div>
              </div>
              <div className="flex justify-between">
                <div className="text-center">
                  <input type="checkbox" onChange={enbbtn} id="checkbox" />
                  <label className="pl-3 text-sm font-sans">Remember me</label>
                </div>
                <div>
                  <Link
                    to="/"
                    className="text-sm bg-black-800 font-sans font-semibold"
                  >
                    {" "}
                    Forget Password?
                  </Link>
                </div>{" "}
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <Link
                    to="/"
                    className="text-green-500 text-center capitalize font-ml
                font-bold"
                  >
                    {" "}
                    Create Account
                  </Link>
                </div>
                <div>
                  <input
                    className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                    type="submit"
                    ref={buttonref}
                    id="submit"
                    name="submitBtn"
                    value="Sign-In"
                    onClick={addHandler}
                    disabled
                  />
                </div>
              </div>

              <div className="border-t-2 border-black-100 border-b-2 border-black-100">
                <div className="py-2">
                  <Link to="/" className="text-sm text-center">
                    SIGN IN WITH SSO
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;

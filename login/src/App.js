import React from "react";
import axios from "axios";
// import { BrowserRouter, Switch, Route, Router } from "react-router-dom";
// import Login from "./components/Login";
import Sign_in from "./components/Sign_in";
import Sign_up from "./components/Sign_up";
import Forgetpassword from "./components/ForgetPassword";

import { BrowserRouter, Switch, Route } from "react-router-dom";

// import Nav from "./components/Nav";
// import Home from "./components/Pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        {/* <Route path="/" component={Home} /> */}
        {/* {/* <Route path="/" component={Login}  */}
        <Route path="/sign-in" component={Sign_in} />
        <Route path="/sign-up" component={Sign_up} />
        <Route exact path="/forgetpassword" component={Forgetpassword}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

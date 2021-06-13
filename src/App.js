import "./App.css";
import React, { useState } from "react";
import Form from "./Form";
import Success from "./Success";

const axios = require("axios");

function App() {
  const [status, setStatus] = useState(0);
  const [errors, setErrors] = useState([]);
  const [isError, setIsError] = useState(false);

  const handleSUbmit = (e) => {
    e.preventDefault();

    const body = {
      firstName: e.target.firstname.value,
      lastName: e.target.lastname.value,
      email: e.target.email.value,
      phoneNumber: e.target.phonenumber.value,
      password: e.target.password.value,
    };

    console.log(body);

    axios
      .post("http://127.0.0.1:3001/api/host", body)
      .then(function (response) {
        if (response.status) {
          if (response.status === 400) {
            setIsError(true);
          } else {
            setStatus(response.status);
            console.log(response.data);
          }
        }
        if (response.data.error) {
          setErrors(response.data.error);
        }
        console.log(response);
      })
      .catch(function (error) {
        setIsError(true);
        console.log(error.toJSON());
      });
  };

  return (
    <div className="app">
      <div className="app-left">
        <h4 className="app-left-header">
          Earn Upto <br />
          <span className="app-left-cash">Ksh. 105,000</span> by being a Host
        </h4>

        <p className="app-left-para">
          Sign up today ! and make money from what you enjoy doing
        </p>
      </div>

      <div className="app-right">
        {status === 201 ? (
          <Success />
        ) : (
          <Form handleSUbmit={handleSUbmit} errors={errors} iserror={isError} />
        )}
      </div>
    </div>
  );
}

export default App;

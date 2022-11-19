import React, { useState } from "react";
import '../App.css';
import { Login } from "./Login";
import { Register } from "./Register";

function LoginPage() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <div className="LoginPage">
      {
        currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
      }
    </div>
  );
}

export default LoginPage;
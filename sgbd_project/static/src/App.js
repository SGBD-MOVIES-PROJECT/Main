import React, { useState } from "react";
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Support from './pages/Support';
import Top10 from './pages/Top10';
import Filter from './pages/Filter';
import Footer from "./components/Footer";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import LoginPage from "./pages/LoginPage";




function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/help' component={Support} />
          <Route path='/top10' component={Top10} />
          <Route path='/filter' component={Filter} />
        </Switch>
      </Router>
      <div className="Login">
      {
        currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
      }
    </div>
      <Footer />
    </>
  );
}

export default App;

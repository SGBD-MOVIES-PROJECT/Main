import React, { useState } from "react";
// import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Support from './pages/Support';
import Filter from './pages/Filter';
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import LoginPage from "./pages/LoginPage";
import CreateReview from "./pages/CreateReview";
import { FooterContainer } from './React Footer/Footer'
import UserProfile from './components/UserProfile'
import Service from "./pages/Service/Service";
import About from "./pages/About/About";
import Gallery from "./pages/Gallery/Gallery";



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
          {/* <Route path='/filter' component={Filter} /> */}
          <Route path='/login' component={LoginPage} />
          <Route path='/createreview' component={CreateReview} />
          <Route path='/myprofile' component={UserProfile} />
          <Route path='/services' component={Service} />
          <Route path='/about' component={About} />
          <Route path='/gallery' component={Gallery} />
        </Switch>
      </Router>
      <FooterContainer />
    </>
  );
}

export default App;

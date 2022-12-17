import React, { useState } from "react";
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Support from './pages/Support';
import Top10 from './pages/Top10';
import Filter from './pages/Filter';
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import LoginPage from "./pages/LoginPage";
import CreateReview from "./pages/CreateReview";
import Profile from "./pages/Profile";
import { FooterContainer } from './React Footer/Footer'
import UserProfile from './components/UserProfile'




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
          {/* <Route path='/filter' component={Filter} /> */}
          <Route path='/login' component={LoginPage} />
          <Route path='/createreview' component={CreateReview} />
          <Route path='/profile' component={Profile} />
          <Route path='/myprofile' component={UserProfile} />
        </Switch>
      </Router>
      <FooterContainer />
    </>
  );
}

export default App;

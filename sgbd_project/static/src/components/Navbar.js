import React, { Component, useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';
import { MenuItems } from "./MenuItems";
import Home from '../pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Login } from '../pages/Login';
import { useHistory } from "react-router-dom";
import LoginPage from '../pages/LoginPage';



function Navbar() {
  
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  const history = useHistory();
  const Login = () => {
    history.push("/login")
  }   

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
          
          <div className='navbar'>
              <Link to = ".">
              <button type = 'submit' className='logo'>CineTube</button>
              </Link>

              <Link to='#' className='menu-bars'>
                <FaIcons.FaBars onClick={showSidebar} />
              </Link>
            
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul className='nav-menu-items' onClick={showSidebar}>
              <li className='navbar-toggle'>
                <Link to='#' className='menu-bars'>
                  <AiIcons.AiOutlineClose />
                </Link>
              </li>
              {SidebarData.map((item, index) => {
                return (
                  <li key={index} className={item.cName}>
                    <Link to={item.path}>
                      {item.icon}
                      <span>{item.title}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          <div className='button-div'>
                <button type = 'submit' className='sign-in' onClick={Login}>LOG IN</button> 
                {/* <Route path='/login' component={LoginPage} /> */}
          </div>
        </div>

      </IconContext.Provider>
    </>
  );
}

export default Navbar;

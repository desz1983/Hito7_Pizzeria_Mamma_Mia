import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { MyContext } from '../mycontext/MyContext';

const Navbar = () => {
  const setActiveClass = ({ isActive }) => (isActive ? 'active' : 'notActive');
  const { total, user } = useContext(MyContext); 
  const separadorTotal = total.toLocaleString();
  const token = user; 
  
  const buttonUno = token ? '🔓 Profile' : '🔐 Login';
  const buttonDos = token ? '🔒 Logout' : '🔐 Register';

  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">Pizzería Mamma Mia!</Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="btn btn-outline-light" role="button">&#x1F355; Home</Link>
            </li>
            <li className="nav-item pe-2 ps-2">
              <Link to="/login" className="btn btn-outline-light" role="button">{buttonUno}</Link>
            </li>
            <li className="nav-item">
              <Link to="/register" className="btn btn-outline-light" role="button">{buttonDos}</Link>
            </li>
          </ul>
          <Link to="/cart" className="btn btn-outline-primary" type="submit">&#x1F6D2; Total: ${separadorTotal}</Link>
          <Link to="/profile" className="btn btn-outline-secondary ms-2" type="submit">Profile</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

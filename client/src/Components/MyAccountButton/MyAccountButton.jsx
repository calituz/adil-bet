import React from "react";
import { Link } from 'react-router-dom';
import './MyAccountButton.css'

const MyAccountButton = () => {
  return (
    <div className="container-myaccount-button">
      <Link to='/myaccount'>
      <button className="button-myaccount-navbar">Mi cuenta</button>
      </Link>
    </div>
  )
};

export default MyAccountButton;
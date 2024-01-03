// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav >
      <ul className='navbar'>
        <li>
          <Link to="/tasks">Task List</Link>
        </li>
        <li>
          <Link to="/add-task">Add Task</Link>
        </li>
        <li>
          <Link to="/user-profile">User Profile</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

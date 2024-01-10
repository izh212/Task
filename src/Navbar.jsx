// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({user}) => {
  return (
    <nav >
      <ul className='navbar'>
        {user ? <>
          <li>
          <Link to="/tasks">Task List</Link>
        </li>
        <li>
          <Link to="/add-task">Add Task</Link>
        </li></>:<> <li>
          <Link to="/">Login</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li></> }
       
       
      </ul>
    </nav>
  );
};

export default Navbar;

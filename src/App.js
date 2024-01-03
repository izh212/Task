// App.js
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import TaskList from './TaskList';
import TaskForm from './TaskForm';
import UserProfile from './UserProfile';
import Navbar from './Navbar';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/tasks" element={<TaskList/>} />
        <Route path="/add-task" element={<TaskForm/>} />
        <Route path="/edit-task/:taskId" element={<TaskForm/>} />
        <Route path="/user-profile" element={UserProfile} />
      </Routes>
    </Router>
  );
};

export default App;

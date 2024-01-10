// App.js
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import TaskList from './TaskList';
import TaskForm from './TaskForm';
import Navbar from './Navbar';
import PrivateRoute from './PrivateRoute.';

const App = () => {
  return (
    <Router>
      <Navbar user={false}/>
      <Routes>
        <Route path="/"  element={<Login/> }  />
        <Route path="/register" element={<Register/>} />
        <Route element={<PrivateRoute user={false}/>}>
              <Route path='/tasks' element={<TaskList/>} />
              <Route path='/add-task' element={<TaskForm/>} />
          </Route>
      </Routes>
    </Router>
  );
};

export default App;

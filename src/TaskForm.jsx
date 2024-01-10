// TaskForm.js
import React, { useState } from 'react';

const TaskForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    status: 'to-do',
    dueDate: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Task submission logic goes here', formData);
    // You'll handle task submission here (e.g., call an API to create or update a task)
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Task Form</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
          <input
            placeholder='Title'
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            style={styles.input}
            required
          />
          <input type="date"
          name="dueDate"
          value={formData.dueDate}
          onChange={handleChange}
          style={styles.date}
           />

        
        <button type="submit" className='btn'>
          Submit Task
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    width: '400px',
    margin: 'auto',
    marginTop: '50px',
  },
  date: {
    width: '190px',
    margin: 'auto',
    marginBottom: '20px',
  },
  title: {
    textAlign: 'center',
    fontSize: '1.5rem',
    marginBottom: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    marginBottom: '10px',
  },
  input: {
    padding: '8px',
    marginBottom: '15px',
  },

};

export default TaskForm;

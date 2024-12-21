/*
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const AddEditStock = () => {
  const [stock, setStock] = useState({
    name: '',
    ticker: '',
    quantity: 0,
    buyPrice: 0,
  });

  const { id } = useParams(); // Get stock ID from URL params (for edit mode)
  const navigate = useNavigate();

  // Fetch stock details if editing
  useEffect(() => {
    if (id) {
      const fetchStock = async () => {
        try {
          const response = await axios.get(`http://localhost:5000/api/stocks/${id}`);
          setStock(response.data);
        } catch (error) {
          console.error('Error fetching stock:', error);
          alert('Failed to fetch stock details.');
        }
      };
      fetchStock();
    }
  }, [id]);

  const handleChange = (e) => {
    setStock({ ...stock, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (id) {
        // Update the stock if an ID is provided (edit mode)
        await axios.put(`http://localhost:5000/api/stocks/${id}`, stock);
        alert('Stock updated successfully!');
      } else {
        // Add a new stock if no ID (add mode)
        await axios.post('http://localhost:5000/api/stocks', stock);
        alert('Stock added successfully!');
      }
      navigate('/stocks'); // Redirect to stock list after success
    } catch (error) {
      console.error('Error saving stock:', error);
      alert('Failed to save stock.');
    }
  };

  // Function to handle deletion of the stock
  const handleDelete = async () => {
    const confirmDelete = window.confirm('Are you sure you want to delete this stock?');
    if (confirmDelete) {
      try {
        await axios.delete(`http://localhost:5000/api/stocks/${id}`);
        alert('Stock deleted successfully!');
        navigate('/stocks'); // Redirect to stock list after deletion
      } catch (error) {
        console.error('Error deleting stock:', error);
        alert('Failed to delete stock.');
      }
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h2>{id ? 'Edit Stock' : 'Add Stock'}</h2>
        <label>
          Stock Name:
          <input type="text" name="name" value={stock.name} onChange={handleChange} />
        </label>
        <label>
          Ticker:
          <input type="text" name="ticker" value={stock.ticker} onChange={handleChange} />
        </label>
        <label>
          Quantity:
          <input type="number" name="quantity" value={stock.quantity} onChange={handleChange} />
        </label>
        <label>
          Buy Price:
          <input type="number" name="buyPrice" value={stock.buyPrice} onChange={handleChange} />
        </label>
        <div className="button-container">
          <button type="submit">Save</button>
          {id && (
            <button
              type="button"
              onClick={handleDelete}
              className="delete-button"
            >
              Delete
            </button>
          )}
          
        </div>
      </form>

      <style jsx>{`
        .form-container {
          background-image: url('https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          color: white;
          font-family: Arial, sans-serif;
        }

        form {
          background: rgba(0, 0, 0, 0.7);
          padding: 20px 40px;
          border-radius: 10px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          text-align: center;
          width: 90%;
          max-width: 500px;
        }

        h2 {
          margin-bottom: 20px;
          font-size: 1.8rem;
          color: #fff;
        }

        label {
          display: block;
          margin: 10px 0;
          font-size: 1rem;
          text-align: left;
        }

        input {
          width: 100%;
          padding: 10px;
          margin-top: 5px;
          border: none;
          border-radius: 5px;
          font-size: 1rem;
        }

        input:focus {
          outline: none;
          border: 1px solid #ddd;
        }

        .button-container {
          display: flex;
          justify-content: space-between;
          margin-top: 20px;
        }

        button {
          padding: 10px 20px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          font-size: 1rem;
          color: #fff;
          background-color: #4caf50;
        }

        button:hover {
          background-color: #45a049;
        }

        .delete-button {
          background-color: red;
        }

        .delete-button:hover {
          background-color: darkred;
        }
      `}</style>
    </div>
  );
};

export default AddEditStock;

*/

import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const AddEditStock = () => {
  const [stock, setStock] = useState({
    name: '',
    ticker: '',
    quantity: 0,
    buyPrice: 0,
  });

  const { id } = useParams(); // Get stock ID from URL params (for edit mode)
  const navigate = useNavigate();

  // Fetch stock details if editing
  useEffect(() => {
    if (id) {
      const fetchStock = async () => {
        try {
          const response = await axios.get(`http://localhost:5000/api/stocks/${id}`);
          setStock(response.data);
        } catch (error) {
          console.error('Error fetching stock:', error);
          alert('Failed to fetch stock details.');
        }
      };
      fetchStock();
    }
  }, [id]);

  const handleChange = (e) => {
    setStock({ ...stock, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (id) {
        // Update the stock if an ID is provided (edit mode)
        await axios.put(`http://localhost:5000/api/stocks/${id}`, stock);
        alert('Stock updated successfully!');
      } else {
        // Add a new stock if no ID (add mode)
        await axios.post('http://localhost:5000/api/stocks', stock);
        alert('Stock added successfully!');
      }
      navigate('/stocks'); // Redirect to stock list after success
    } catch (error) {
      console.error('Error saving stock:', error);
      alert('Failed to save stock.');
    }
  };

  // Function to handle deletion of the stock
  const handleDelete = async () => {
    const confirmDelete = window.confirm('Are you sure you want to delete this stock?');
    if (confirmDelete) {
      try {
        await axios.delete(`http://localhost:5000/api/stocks/${id}`);
        alert('Stock deleted successfully!');
        navigate('/stocks'); // Redirect to stock list after deletion
      } catch (error) {
        console.error('Error deleting stock:', error);
        alert('Failed to delete stock.');
      }
    }
  };

  return (
    <div className="form-container">
      <div className="tagline">
        <h1>Your Portfolio, Your Future</h1>
        <p>Track and manage your investments effortlessly!</p>
      </div>
      <form onSubmit={handleSubmit} className="animated-form">
        <h2>{id ? 'Edit Stock' : 'Add Stock'}</h2>
        <label>
          Stock Name:
          <input type="text" name="name" value={stock.name} onChange={handleChange} />
        </label>
        <label>
          Ticker:
          <input type="text" name="ticker" value={stock.ticker} onChange={handleChange} />
        </label>
        <label>
          Quantity:
          <input type="number" name="quantity" value={stock.quantity} onChange={handleChange} />
        </label>
        <label>
          Buy Price:
          <input type="number" name="buyPrice" value={stock.buyPrice} onChange={handleChange} />
        </label>
        <div className="button-container">
          <button type="submit">Save</button>
          {id && (
            <button
              type="button"
              onClick={handleDelete}
              className="delete-button"
            >
              Delete
            </button>
          )}
        </div>
      </form>

      <style jsx>{`
        .form-container {
          background-image: url('https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: white;
          font-family: Arial, sans-serif;
        }

        .tagline {
          text-align: center;
          margin-bottom: 20px;
          animation: fadeIn 2s ease-in-out;
        }

        .tagline h1 {
          font-size: 2.5rem;
          margin-bottom: 5px;
          color: #fff;
          text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7);
        }

        .tagline p {
          font-size: 1.2rem;
          color: #ddd;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        form {
          background: rgba(0, 0, 0, 0.7);
          padding: 20px 40px;
          border-radius: 10px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          text-align: center;
          width: 90%;
          max-width: 500px;
          animation: slideIn 1.5s ease-in-out;
        }

        @keyframes slideIn {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        h2 {
          margin-bottom: 20px;
          font-size: 1.8rem;
          color: #fff;
        }

        label {
          display: block;
          margin: 10px 0;
          font-size: 1rem;
          text-align: left;
        }

        input {
          width: 100%;
          padding: 10px;
          margin-top: 5px;
          border: none;
          border-radius: 5px;
          font-size: 1rem;
        }

        input:focus {
          outline: none;
          border: 1px solid #ddd;
        }

        .button-container {
          display: flex;
          justify-content: space-between;
          margin-top: 20px;
        }

        button {
          padding: 10px 20px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          font-size: 1rem;
          color: #fff;
          background-color: #4caf50;
          transition: all 0.3s ease;
        }

        button:hover {
          background-color: #45a049;
          transform: scale(1.05);
        }

        .delete-button {
          background-color: red;
        }

        .delete-button:hover {
          background-color: darkred;
        }
      `}</style>
    </div>
  );
};

export default AddEditStock;

/*
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const StockList = () => {
  const [stocks, setStocks] = useState([]);
  const [isEditing, setIsEditing] = useState(null);
  const [updatedStock, setUpdatedStock] = useState({ name: '', ticker: '', quantity: '', buyPrice: '' });

  useEffect(() => {
    const fetchStocks = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/stocks');
        setStocks(response.data.stocks);
      } catch (error) {
        console.error('Error fetching stocks:', error);
        alert('Failed to fetch stocks.');
      }
    };
    fetchStocks();
  }, []);

  const handleUpdate = async (id) => {
    try {
      await axios.put(`http://localhost:5000/api/stocks/${id}`, updatedStock);
      setStocks(stocks.map(stock => stock._id === id ? { ...stock, ...updatedStock } : stock));
      setIsEditing(null);
    } catch (error) {
      console.error('Error updating stock:', error);
      alert('Failed to update stock.');
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/stocks/${id}`);
      setStocks(stocks.filter(stock => stock._id !== id));
      alert('Stock deleted successfully!');
    } catch (error) {
      console.error('Error deleting stock:', error);
      alert('Failed to delete stock.');
    }
  };

  const handleDragEnd = (result) => {
    const { source, destination } = result;
    if (!destination || source.index === destination.index) return;

    const reorderedStocks = Array.from(stocks);
    const [removed] = reorderedStocks.splice(source.index, 1);
    reorderedStocks.splice(destination.index, 0, removed);

    setStocks(reorderedStocks);
  };

  const handleInputChange = (e) => {
    setUpdatedStock({ ...updatedStock, [e.target.name]: e.target.value });
  };

  return (
    <div className="dashboard-container">
      <h2 className="title">Stock List</h2>
      <table className="stocks-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Ticker</th>
            <th>Quantity</th>
            <th>Buy Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {stocks.map((stock, index) => (
            <tr key={stock._id}>
              <td>{stock.name}</td>
              <td>{stock.ticker}</td>
              <td>{stock.quantity}</td>
              <td>{stock.buyPrice}</td>
              <td>
                <button onClick={() => setIsEditing(stock._id)}>Edit</button>
                <button onClick={() => handleDelete(stock._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <style jsx>{`
        .dashboard-container {
          background-image: url('https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          padding: 20px;
          border-radius: 8px;
          color: #fff;
          min-height: 100vh;
        }
        .title {
          text-align: center;
          font-size: 2rem;
          color: #fff;
        }
        .stocks-table {
          width: 100%;
          border-collapse: collapse;
          margin: 20px auto;
          color: #000;
        }
        .stocks-table th, .stocks-table td {
          border: 1px solid #ddd;
          padding: 8px;
        }
        .stocks-table th {
          background-color: rgba(0, 0, 0, 0.7);
          color: white;
        }
      `}</style>
    </div>
  );
};

export default StockList;

*/

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const StockList = () => {
  const [stocks, setStocks] = useState([]);
  const [isEditing, setIsEditing] = useState(null);
  const [updatedStock, setUpdatedStock] = useState({ name: '', ticker: '', quantity: '', buyPrice: '' });

  useEffect(() => {
    const fetchStocks = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/stocks');
        setStocks(response.data.stocks);
      } catch (error) {
        console.error('Error fetching stocks:', error);
        alert('Failed to fetch stocks.');
      }
    };
    fetchStocks();
  }, []);

  const handleUpdate = async (id) => {
    try {
      await axios.put(`http://localhost:5000/api/stocks/${id}`, updatedStock);
      setStocks(stocks.map(stock => stock._id === id ? { ...stock, ...updatedStock } : stock));
      setIsEditing(null);
    } catch (error) {
      console.error('Error updating stock:', error);
      alert('Failed to update stock.');
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/stocks/${id}`);
      setStocks(stocks.filter(stock => stock._id !== id));
      alert('Stock deleted successfully!');
    } catch (error) {
      console.error('Error deleting stock:', error);
      alert('Failed to delete stock.');
    }
  };

  const handleDragEnd = (result) => {
    const { source, destination } = result;
    if (!destination || source.index === destination.index) return;

    const reorderedStocks = Array.from(stocks);
    const [removed] = reorderedStocks.splice(source.index, 1);
    reorderedStocks.splice(destination.index, 0, removed);

    setStocks(reorderedStocks);
  };

  const handleInputChange = (e) => {
    setUpdatedStock({ ...updatedStock, [e.target.name]: e.target.value });
  };

  return (
    <div className="dashboard-container">
      <h2 className="title">Stock List</h2>
      <table className="stocks-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Ticker</th>
            <th>Quantity</th>
            <th>Buy Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {stocks.map((stock, index) => (
            <tr key={stock._id}>
              <td>{stock.name}</td>
              <td>{stock.ticker}</td>
              <td>{stock.quantity}</td>
              <td>{stock.buyPrice}</td>
              <td>
                <button onClick={() => setIsEditing(stock._id)}>Edit</button>
                <button onClick={() => handleDelete(stock._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <style jsx>{`
        .dashboard-container {
          background-image: url('https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          padding: 20px;
          border-radius: 8px;
          color: #fff;
          min-height: 100vh;
        }
        .title {
          text-align: center;
          font-size: 2rem;
          color: #fff;
        }
        .stocks-table {
          width: 100%;
          border-collapse: collapse;
          margin: 20px auto;
          color: #fff;
        }
        .stocks-table th, .stocks-table td {
          border: 1px solid #ddd;
          padding: 8px;
        }
        .stocks-table th {
          background-color: rgba(0, 0, 0, 0.7);
          color: white;
        }
      `}</style>
    </div>
  );
};

export default StockList;

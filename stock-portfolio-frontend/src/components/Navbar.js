/*
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-link">Dashboard</Link>
      <Link to="/stocks" className="nav-link">Stock List</Link>
      <Link to="/add" className="nav-link">Add Stock</Link>

      <style jsx>{`
        .navbar {
          background-color: #2c3e50; 
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 15px 30px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
          border-radius: 5px;
          margin-bottom: 30px; 
        }

        .nav-link {
          color: #ecf0f1; 
          text-decoration: none;
          font-size: 1.2rem;
          font-weight: 600;
          margin: 0 20px;
          transition: all 0.3s ease;
          padding: 8px 12px;
          border-radius: 4px;
        }

        .nav-link:hover {
          background-color: #2980b9; 
          color: #fff;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        .nav-link:active {
          background-color: #3498db; 
          box-shadow: none;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
*/
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-link">Dashboard</Link>
      <Link to="/stocks" className="nav-link">Stock List</Link>
      <Link to="/add" className="nav-link">Add Stock</Link>

      <style jsx>{`
        .navbar {
          background-color: #2c3e50; /* Darker, elegant shade */
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 15px 30px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
          border-radius: 5px;
          margin-bottom: 0; /* Remove space below navbar */
          height: 80px; /* Increase height of the navbar */
        }

        .nav-link {
          color: #ecf0f1; /* Light text color */
          text-decoration: none;
          font-size: 1.2rem;
          font-weight: 600;
          margin: 0 20px;
          transition: all 0.3s ease;
          padding: 8px 12px;
          border-radius: 4px;
        }

        .nav-link:hover {
          background-color: #2980b9; /* Subtle blue background on hover */
          color: #fff;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        .nav-link:active {
          background-color: #3498db; /* Slightly darker blue when clicked */
          box-shadow: none;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;

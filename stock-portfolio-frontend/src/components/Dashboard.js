/*
\import React, { useEffect, useState } from "react";
import { fetchStockPrices } from "../services/stockAPI"; // Import the fetchStockPrices function

const Dashboard = () => {
  const [tickers, setTickers] = useState(["AAPL", "GOOGL", "MSFT"]); // Example tickers
  const [stockPrices, setStockPrices] = useState({});
  const [loading, setLoading] = useState(false);

  // Fetch real-time stock prices on mount and update periodically
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const prices = await fetchStockPrices(tickers);
      setStockPrices(prices);
      setLoading(false);
    };

    fetchData();

    // Set interval for automatic price updates every 30 seconds
    const interval = setInterval(fetchData, 30000);

    // Clear interval when component unmounts
    return () => clearInterval(interval);
  }, [tickers]);

  return (
    <div className="dashboard-container">
      <h1>Real-Time Stock Prices</h1>

      {loading ? (
        <p>Loading stock prices...</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Ticker</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {tickers.map((ticker) => (
              <tr key={ticker}>
                <td>{ticker}</td>
                <td>
                  {stockPrices[ticker] === "N/A"
                    ? "N/A"
                    : stockPrices[ticker] === "Error"
                    ? "Error"
                    : `$${stockPrices[ticker]}`}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <style jsx>{`
        .dashboard-container {
          background-image: url('https://images.pexels.com/photos/186464/pexels-photo-186464.jpeg'); 
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          min-height: 100vh;
          color: white;
          font-family: Arial, sans-serif;
          padding: 20px;
        }

        h1 {
          text-align: center;
          padding: 20px;
          font-size: 2rem;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        }

        table {
          width: 50%;
          margin: 50px auto;
          border-collapse: collapse;
          background: transparent; 
          border: none; 
        }

        th, td {
          padding: 12px;
          text-align: center;
          font-size: 1.2rem;
          color: white; 
        }

        th {
          font-weight: bold;
        }

        p {
          text-align: center;
          font-size: 1.2rem;
          margin-top: 20px;
          color: white;
        }

        @media (max-width: 768px) {
          table {
            width: 90%;
          }

          th, td {
            font-size: 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Dashboard;

*/

/*
import React, { useEffect, useState } from "react";
import { fetchStockPrices } from "../services/stockAPI"; // Import the fetchStockPrices function

const Dashboard = () => {
  const [tickers, setTickers] = useState(["AAPL", "GOOGL", "MSFT"]); // Example tickers
  const [stockPrices, setStockPrices] = useState({});
  const [loading, setLoading] = useState(false);

  // Fetch real-time stock prices on mount and update periodically
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const prices = await fetchStockPrices(tickers);
      setStockPrices(prices);
      setLoading(false);
    };

    fetchData();

    // Set interval for automatic price updates every 30 seconds
    const interval = setInterval(fetchData, 30000);

    // Clear interval when component unmounts
    return () => clearInterval(interval);
  }, [tickers]);

  return (
    <div className="dashboard-container">
      <h1>Real-Time Stock Prices</h1>

      {loading ? (
        <p>Loading stock prices...</p>
      ) : (
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Ticker</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {tickers.map((ticker) => (
                <tr key={ticker}>
                  <td>{ticker}</td>
                  <td>
                    {stockPrices[ticker] === "N/A"
                      ? "N/A"
                      : stockPrices[ticker] === "Error"
                      ? "Error"
                      : `$${stockPrices[ticker]}`}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <style jsx>{`
        .dashboard-container {
          background-image: url('https://images.pexels.com/photos/186464/pexels-photo-186464.jpeg'); 
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          min-height: 100vh;
          color: white;
          font-family: Arial, sans-serif;
          padding: 20px;
        }

        h1 {
          text-align: center;
          padding: 20px;
          font-size: 2rem;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        }

        .table-container {
          width: 80%;
          margin: 50px auto;
          max-height: 400px; 
          overflow-y: auto; 
          border: 1px solid rgba(255, 255, 255, 0.3); 
          border-radius: 8px;
        }

        table {
          width: 100%;
          border-collapse: collapse;
          background: transparent; 
        }

        th, td {
          padding: 12px;
          text-align: center;
          font-size: 1.2rem;
          color: white; 
          border-bottom: 1px solid rgba(255, 255, 255, 0.2); 
        }

        th {
          font-weight: bold;
          background: rgba(0, 0, 0, 0.5); 
        }

        tr:hover {
          background: rgba(255, 255, 255, 0.1); 
        }

        p {
          text-align: center;
          font-size: 1.2rem;
          margin-top: 20px;
          color: white;
        }

        @media (max-width: 768px) {
          .table-container {
            width: 90%;
          }

          th, td {
            font-size: 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Dashboard;
*/

import React, { useEffect, useState } from "react";
import { fetchStockPrices } from "../services/stockAPI"; // Import the fetchStockPrices function

const Dashboard = () => {
  const [tickers, setTickers] = useState(["AAPL", "GOOGL", "MSFT"]); // Example tickers
  const [stockPrices, setStockPrices] = useState({});
  const [loading, setLoading] = useState(false);

  // Fetch real-time stock prices on mount and update periodically
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const prices = await fetchStockPrices(tickers);
      setStockPrices(prices);
      setLoading(false);
    };

    fetchData();

    // Set interval for automatic price updates every 30 seconds
    const interval = setInterval(fetchData, 30000);

    // Clear interval when component unmounts
    return () => clearInterval(interval);
  }, [tickers]);

  return (
    <div className="dashboard-container">
      <h1>Real-Time Stock Prices</h1>
      <p className="tagline">Stay updated with the latest stock market trends</p>

      {loading ? (
        <p>Loading stock prices...</p>
      ) : (
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Ticker</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {tickers.map((ticker) => (
                <tr key={ticker}>
                  <td>{ticker}</td>
                  <td>
                    {stockPrices[ticker] === "N/A"
                      ? "N/A"
                      : stockPrices[ticker] === "Error"
                      ? "Error"
                      : `$${stockPrices[ticker]}`}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <style jsx>{`
        .dashboard-container {
          background-image: url('https://images.pexels.com/photos/186464/pexels-photo-186464.jpeg'); /* Link to the image */
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          min-height: 100vh;
          color: white;
          font-family: Arial, sans-serif;
          padding: 20px;
        }

        h1 {
          text-align: center;
          padding: 20px;
          font-size: 2rem;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
          transition: all 0.3s ease-in-out; /* Smooth transition effect */
        }

        h1:hover {
          color: #f0db4f; /* Optional hover effect for heading */
          transform: scale(1.05); /* Slight scaling on hover */
        }

        .tagline {
          text-align: center;
          font-size: 1.2rem;
          margin-top: -10px;
          color: #ffdd57; /* Optional contrasting color for tagline */
        }

        .table-container {
          width: 80%;
          margin: 50px auto;
          max-height: 400px; /* Set maximum height for the table container */
          overflow-y: auto; /* Enable vertical scrolling */
          border: 1px solid rgba(255, 255, 255, 0.3); /* Optional border for visibility */
          border-radius: 8px;
          box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2); /* Subtle shadow effect */
          transition: transform 0.3s ease, box-shadow 0.3s ease; /* Smooth transitions */
        }

        .table-container:hover {
          transform: translateY(-5px); /* Slight upward movement on hover */
          box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.3); /* Enhanced shadow on hover */
        }

        table {
          width: 100%;
          border-collapse: collapse;
          background: transparent; /* Make the table background transparent */
        }

        th,
        td {
          padding: 12px;
          text-align: center;
          font-size: 1.2rem;
          color: white; /* Text color to stand out on the background */
          border-bottom: 1px solid rgba(255, 255, 255, 0.2); /* Optional row separator */
        }

        th {
          font-weight: bold;
          background: rgba(0, 0, 0, 0.5); /* Optional header background */
        }

        tr:hover {
          background: rgba(255, 255, 255, 0.1); /* Optional hover effect */
          transition: background 0.3s ease; /* Smooth transition on row hover */
        }

        p {
          text-align: center;
          font-size: 1.2rem;
          margin-top: 20px;
          color: white;
        }

        @media (max-width: 768px) {
          .table-container {
            width: 90%;
          }

          th,
          td {
            font-size: 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Dashboard;

Portfolio Tracker

A comprehensive web application designed to help users track their stock portfolio. The application allows users to add, view, edit, and delete stock holdings while dynamically calculating the portfolio's total value based on real-time stock prices. The dashboard displays key portfolio metrics, including the total portfolio value, top-performing stocks, and portfolio distribution.
Features

    Stock Management: Add, view, update, and delete stock holdings (e.g., stock name, ticker, quantity, buy price).
    Real-Time Portfolio Tracking: The total value of the portfolio is dynamically calculated using live stock prices.
    Portfolio Dashboard: Displays key portfolio metrics, such as total portfolio value, top-performing stocks, and portfolio distribution.
    Responsive Design: Built with the MERN stack to ensure optimal usability across devices.

Technologies Used
Frontend

    React: A modern JavaScript library for building user interfaces.
    HTML5, CSS3, JavaScript: For structuring, styling, and adding interactivity to the application.
    Redux: For state management across the application.

Backend

    Node.js: JavaScript runtime for building the server-side logic.
    Express.js: Web framework for Node.js to handle routes and API requests.
    MongoDB: Database for storing user and stock information (if required).
    MySQL: Relational database used for storing stock details, including stock name, ticker, quantity, and buy price.
    Axios: For making HTTP requests from the frontend to the backend.

Real-Time Data

    Stock Price API: Integrated with free stock price APIs (e.g., Alpha Vantage, Yahoo Finance) to fetch live stock prices and calculate the portfolio's total value.

How to Run the Project Locally
Prerequisites

    Node.js
    React.js
    Java springboot
    MySQL (or MongoDB if used)

Frontend Setup (React)

    Clone the repository:
    Navigate to the frontend directory:
    Install dependencies
    start react app
Backend Setup (Node.js & Express)

    Navigate to the backend directory:
    install dependencies
    start nodejs server
    Assumptions and Limitations

    Each stock added to the portfolio is assumed to have a quantity of 1 for simplicity.
    The stock price is fetched from an external API (e.g., Alpha Vantage), and portfolio value is recalculated using the real-time stock price.
    No user authentication or authorization is implemented in this version.
    The application does not include advanced features such as portfolio history or stock charts.


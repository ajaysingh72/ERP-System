import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

function Dashboard() {
  // Assuming these metrics are fetched from an API or stored in state
  const totalProducts = 100; // Example total number of products
  const totalOrders = 50; // Example total number of orders

  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <div className="metrics">
        <div className="metric">
          <h3>Total Products</h3>
          <p>{totalProducts}</p>
        </div>
        <div className="metric">
          <h3>Total Orders</h3>
          <p>{totalOrders}</p>
        </div>
      </div>
      <div className="navigation">
        <Link to="/product">
          <button>Products Management</button>
        </Link>
        <Link to="/order">
          <button>Orders Management</button>
        </Link>
      </div>
    </div>
  );
}

export default Dashboard;

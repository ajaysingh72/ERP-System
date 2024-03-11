import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard.jsx';




import ProductsManagement from './pages/ProductsManagement.jsx';
import OrdersManagement from './pages/OrdersManagement.jsx';
import OrdersCalendar from './pages/OrdersCalendar.jsx';


const App = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/product" element={<ProductsManagement />} />
          <Route path="/order" element={<OrdersManagement />} />
          <Route path="/orderclendar" element={<OrdersCalendar />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;
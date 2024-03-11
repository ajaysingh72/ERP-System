import React, { useState } from 'react';

function OrdersManagement() {
  // Mock data for orders
  const [orders, setOrders] = useState([
    { id: 1, orderId: 'ORD001', customerName: 'X', orderDate: '2024-03-01', status: 'Pending' },
    { id: 2, orderId: 'ORD002', customerName: 'Y', orderDate: '2024-03-02', status: 'Shipped' },
    { id: 3, orderId: 'ORD003', customerName: 'Z', orderDate: '2024-03-03', status: 'Delivered' },
  ]);

  // Optional: Function to view order details
  const viewOrderDetails = (orderId) => {
    // Implement view order details functionality
    console.log('View order details for order ID:', orderId);
  };

  // Optional: Function to update order status
  const updateOrderStatus = (orderId, newStatus) => {
    // Implement update order status functionality
    console.log('Update order status for order ID:', orderId, 'to', newStatus);
  };

  // Optional: Function to delete order
  const deleteOrder = (orderId) => {
    // Implement delete order functionality
    setOrders(orders.filter(order => order.id !== orderId));
    console.log('Delete order with ID:', orderId);
  };

  return (
    <div className="orders-management">
      <h2>Orders Management</h2>
      <table>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer Name</th>
            <th>Order Date</th>
            <th>Status</th>
            {/* Optional: Add headings for action buttons */}
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id}>
              <td>{order.orderId}</td>
              <td>{order.customerName}</td>
              <td>{order.orderDate}</td>
              <td>{order.status}</td>
              {/* Optional: Add action buttons for viewing, updating, and deleting orders */}
              <td>
                <button onClick={() => viewOrderDetails(order.id)}>View Details</button>
                <button onClick={() => updateOrderStatus(order.id, 'Shipped')}>Update Status</button>
                <button onClick={() => deleteOrder(order.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default OrdersManagement;

import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


const OrdersCalendar = ({ orders }) => {
  const [selectedDate, setSelectedDate] = useState(null);

  // Function to handle date click
  const handleDateClick = date => {
    setSelectedDate(date);
  };

  // Filter orders for the selected date
  const ordersForSelectedDate = selectedDate
    ? orders.filter(order => {
        const deliveryDate = new Date(order.expectedDeliveryDate);
        return deliveryDate.toDateString() === selectedDate.toDateString();
      })
    : [];

  return (
    <div className="orders-calendar-view">
      <h2>Orders Calendar View</h2>
      <div className="calendar-container">
        <Calendar
          onChange={handleDateClick}
          value={selectedDate}
        />
      </div>
      {selectedDate && (
        <div>
          <h3>Orders for {selectedDate.toDateString()}</h3>
          <ul className="orders-list">
            {ordersForSelectedDate.map(order => (
              <li key={order.id}>
                Order ID: {order.id}, Customer: {order.customerName}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default OrdersCalendar;

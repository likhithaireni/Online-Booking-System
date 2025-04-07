import React, { useEffect, useState } from "react";
import axios from "axios";

function BookingList() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/api/bookings")
      .then(response => {
        setBookings(response.data);
      })
      .catch(error => {
        console.error("Error fetching bookings:", error);
      });
  }, []);

  return (
    <div>
      <h2>All Bookings</h2>
      <ul>
        {bookings.map(booking => (
          <li key={booking.id}>
            {booking.customerName} booked Room {booking.room.id} on {booking.bookingDate}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookingList;
import React, { useEffect, useState } from "react";
import axios from "axios";

function RoomList() {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    axios.get("/api/rooms")
      .then(response => {
        setRooms(response.data);
      })
      .catch(error => {
        console.error("Error fetching rooms:", error);
      });
  }, []);

  return (
    <div>
      <h2>Available Rooms</h2>
      <ul>
        {rooms.map(room => (
          <li key={room.id}>
            Room ID: {room.id}, Name: {room.roomName}, Booked: {room.booked ? "Yes" : "No"}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RoomList;
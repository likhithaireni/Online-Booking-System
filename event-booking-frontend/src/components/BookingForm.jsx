// import React, { useState } from "react";
// import axios from "axios";

// function BookingForm() {
//   const [roomId, setRoomId] = useState("");
//   const [name, setName] = useState("");
//   const [date, setDate] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     axios.post(`http://localhost:8080/api/book`, null, {
//       params: { roomId, name, date }
//     })
//     .then(response => {
//       alert("Room booked successfully!");
//       // Clear input fields
//       setRoomId("");
//       setName("");
//       setDate("");
//     })
//     .catch(error => {
//       alert("Failed to book room: " + (error.response?.data?.message || error.message));
//     });
//   };

//   return (
//     <form onSubmit={handleSubmit} style={{ marginTop: "20px" }}>
//       <h2>Book a Room</h2>
//       <input
//         type="number"
//         placeholder="Room ID"
//         value={roomId}
//         onChange={(e) => setRoomId(e.target.value)}
//         required
//       />
//       <br />
//       <input
//         type="text"
//         placeholder="Your Name"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//         required
//       />
//       <br />
//       <input
//         type="date"
//         value={date}
//         onChange={(e) => setDate(e.target.value)}
//         required
//       />
//       <br />
//       <button type="submit">Book</button>
//     </form>
//   );
// }

// export default BookingForm;
// import React, { useState } from "react";
// import axios from "axios";

// function BookingForm() {
//   const [roomId, setRoomId] = useState("");
//   const [name, setName] = useState("");
//   const [date, setDate] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const bookingData = {
//       room: { id: Number(roomId) }, // Matches backend expectation
//       customerName: name,
//       bookingDate: date,
//     };

//     try {
//       await axios.post("http://localhost:8080/api/book", bookingData, {
//         headers: { "Content-Type": "application/json" },
//       });

//       alert("Room booked successfully!");
//       setRoomId("");
//       setName("");
//       setDate("");
//     } catch (error) {
//       alert("Failed to book room: " + (error.response?.data?.message || error.message));
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} style={{ marginTop: "20px" }}>
//       <h2>Book a Room</h2>
//       <input
//         type="number"
//         placeholder="Room ID"
//         value={roomId}
//         onChange={(e) => setRoomId(e.target.value)}
//         required
//       />
//       <br />
//       <input
//         type="text"
//         placeholder="Your Name"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//         required
//       />
//       <br />
//       <input
//         type="date"
//         value={date}
//         onChange={(e) => setDate(e.target.value)}
//         required
//       />
//       <br />
//       <button type="submit">Book</button>
//     </form>
//   );
// }

// export default BookingForm;
import React, { useState } from "react";
import axios from "axios";

function BookingForm() {
  const [roomId, setRoomId] = useState("");
  const [name, setName] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const bookingData = {
      room: { id: Number(roomId) }, // Ensure ID is a number
      customerName: name,
      bookingDate: date,
    };

    try {
      await axios.post("/api/book", bookingData, {
        headers: { "Content-Type": "application/json" },
      });

      alert("Room booked successfully!");
      setRoomId("");
      setName("");
      setDate("");
    } catch (error) {
      console.error("Booking error:", error);
      if (error.response) {
        console.error("Response data:", error.response.data);
        alert("Failed to book room: " + (error.response.data.message || "Unknown error"));
      } else {
        alert("Failed to book room: " + error.message);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: "20px" }}>
      <h2>Book a Room</h2>
      <input
        type="number"
        placeholder="Room ID"
        value={roomId}
        onChange={(e) => setRoomId(e.target.value)}
        required
      />
      <br />
      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <br />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      <br />
      <button type="submit">Book</button>
    </form>
  );
}

export default BookingForm;
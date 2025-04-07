// import React, { useState, useEffect } from "react";
//  import axios from "axios";
//   //import "./index.css";

// const HomePage = () => { 
//     const [isSignedIn, setIsSignedIn] = useState(false);
//     const [rooms, setRooms] = useState([]);

//     useEffect(() => { 
//         if (isSignedIn) { 
//             axios.get("http://localhost:8080/api/rooms") .then(response => { setRooms(response.data); }) .catch(error => { console.error("Error fetching rooms:", error); }); } }, [isSignedIn]);

// const handleSignIn = () => { setIsSignedIn(true); };

// const handleBookRoom = (roomId) => { axios.post(`http://localhost:8080/api/bookings`, { roomId }) .then(response => { alert("Room booked successfully!"); }) .catch(error => { console.error("Error booking room:", error); }); };

// return ( <div className="container"> {/* Navigation Bar */} <nav className="navbar"> <h2 className="logo">Vihan Luxury Hotel</h2> <div> {!isSignedIn ? ( <> <button className="button" onClick={handleSignIn}>Sign In</button> <button className="button">Sign Up</button> </> ) : ( <button className="button" onClick={() => setIsSignedIn(false)}>Sign Out</button> )} </div> </nav>

// {/* Main Content */}
//   {!isSignedIn ? (
//     <div className="welcomeSection">
//       <h1>Welcome to Hotel Name</h1>
//     </div>
//   ) : (
//     <div className="roomsSection">
//       <h1>Available Rooms</h1>
//       <ul>
//         {rooms.map(room => (
//           <li key={room.id}>
//             {room.name} - <button className="bookButton" onClick={() => handleBookRoom(room.id)}>Book Now</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   )}
// </div>

// ); };

// export default HomePage;
// import React from "react";
// import { useNavigate } from "react-router-dom";
// import "../index.css";

// const HomePage = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="container">
//       <nav className="navbar">
//         <h2 className="logo">Vihan Luxury Hotel</h2>
//         <div>
//           <button className="button" onClick={() => navigate("/signin")}>Sign In</button>
//           <button className="button" onClick={() => navigate("/signup")}>Sign Up</button>
//         </div>
//       </nav>

//       <div className="welcomeSection">
//         <h1>Welcome to Vihan Luxury Hotel</h1>
//       </div>
//     </div>
//   );
// };

//export default HomePage;

// import React from "react";
// import "../index.css";

// function HomePage() {
//   return (
//     <div className="homepage">
//       <h1>Welcome to Hotel Booking System</h1>
//       <p>Book your room with ease and comfort!</p>
//     </div>

//   );
// }

// export default HomePage;

// import React from "react";
// import "../index.css";

// function HomePage() {
//   return (
//     <div className="homepage">
//       <h1>Welcome to Hotel Booking System</h1>
//       <p>Book your room with ease and comfort!</p>

//       {/* About Us / How it Works Section */}
//       <section className="about-us">
//         <h2>How It Works</h2>
//         <p>
//           Our Hotel Booking System helps you find the best hotel deals
//           effortlessly. Search, compare, and book hotels instantly from the
//           comfort of your home.
//         </p>
//       </section>

//       {/* Services Section */}
//       <section className="services">
//         <h2>Our Services</h2>
//         <div className="services-grid">
//           <div className="service-card">
//             <h3>Tour & Excursions</h3>
//             <p>We offer amazing city and nearby tours.</p>
//           </div>
//           <div className="service-card">
//             <h3>Free Wi-Fi</h3>
//             <p>Unlimited internet access in all rooms and lobbies.</p>
//           </div>
//           <div className="service-card">
//             <h3>Babysitting</h3>
//             <p>Available upon request for all guests.</p>
//           </div>
//           <div className="service-card">
//             <h3>Laundry Service</h3>
//             <p>Daily laundry service available at affordable rates.</p>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="footer">
//         <div className="footer-content">
//           <div>
//             <h4>Contact Us</h4>
//             <p>123 Main Street, New Delhi, India</p>
//             <p>Email: info@hotelbooking.com</p>
//           </div>
//           <div>
//             <h4>About Us</h4>
//             <p>
//               We provide top-rated hotels and services to ensure a pleasant stay
//               for all our guests.
//             </p>
//           </div>
//         </div>
//         <p className="footer-note">© 2025 Hotel Booking System. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// }

// export default HomePage;
import React from "react";
import "../index.css";

// function HomePage() {
//   return (
//     <div className="homepage">

//       {/* 1. Hero Section */}
//       <div className="hero-section">
//         <h1>Welcome to Hotel Booking System</h1>
//         <p>Book your room with ease and comfort!</p>
//       </div>

//       {/* 2. How It Works Section */}
//       <div className="how-it-works-section">
//         <h2>How It Works</h2>
//         <div className="steps-container">
//           <div className="step-box">
//             <h3>1. Search Hotels</h3>
//             <p>Enter your destination and dates to search hotels.</p>
//           </div>
//           <div className="step-box">
//             <h3>2. Select Room</h3>
//             <p>Choose from a wide range of available rooms.</p>
//           </div>
//           <div className="step-box">
//             <h3>3. Confirm Booking</h3>
//             <p>Pay and confirm your booking instantly.</p>
//           </div>
//         </div>
//       </div>

//       {/* 3. Services Section */}
//       <div className="services-section">
//         <h2>Our Services</h2>
//         <div className="services-container">
//           <div className="service-box">
//             <h4>Tour & Excursions</h4>
//             <p>Exciting tours available for all guests.</p>
//           </div>
//           <div className="service-box">
//             <h4>Free Wi-Fi</h4>
//             <p>High-speed internet throughout the hotel.</p>
//           </div>
//           <div className="service-box">
//             <h4>Babysitting</h4>
//             <p>Available on request for your children.</p>
//           </div>
//           <div className="service-box">
//             <h4>Laundry</h4>
//             <p>On-demand clean & fresh clothes.</p>
//           </div>
//         </div>
//       </div>

//       {/* 4. Footer */}
//       <div className="footer">
//         <p>&copy; 2025 Hotel Booking System. All rights reserved.</p>
//       </div>
      

//     </div>
//   );
// }

// export default HomePage;
function HomePage() {
  return (
    <div className="homepage">

      {/* 1. Hero Section */}
      <div className="hero-section">
        <h1>Welcome to Hotel Booking System</h1>
        <p>Book your room with ease and comfort!</p>
      </div>

      {/* 2. How It Works */}
      <div className="how-it-works-section">
        <h2>How It Works</h2>
        <div className="steps-container">
          <div className="step-box">
            <h3>1. Search Hotels</h3>
            <p>Enter your destination and dates to search hotels.</p>
          </div>
          <div className="step-box">
            <h3>2. Select Room</h3>
            <p>Choose from a wide range of available rooms.</p>
          </div>
          <div className="step-box">
            <h3>3. Confirm Booking</h3>
            <p>Pay and confirm your booking instantly.</p>
          </div>
        </div>
      </div>

      {/* 3. Services Section */}
      <div className="services-section">
        <h2>Services</h2>
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">👤</div>
            <h3>Tour & Excursions</h3>
            <p>Vehicles are available for tour and travel.</p>
          </div>
          <div className="service-card">
            <div className="service-icon">📶</div>
            <h3>Free Wireless Internet</h3>
            <p>Enjoy wireless internet access available in public areas.</p>
          </div>
          <div className="service-card">
            <div className="service-icon">🍼</div>
            <h3>Babysitting On Request</h3>
            <p>Babysitting services are available on request.</p>
          </div>
          <div className="service-card">
            <div className="service-icon">🧺</div>
            <h3>Laundry Service</h3>
            <p>Free laundry service available for a comfortable stay.</p>
          </div>
        </div>
      </div>

      {/* 4. Footer Section */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-column">
            <h3>Address</h3>
            <p>D-204, Hotel Street, South West, Delhi<br />110096, India</p>
          </div>
          <div className="footer-column">
            <h3>Sales</h3>
            <p>Email: sales@hotelbookings.com<br />Phone: +91-9999999999</p>
          </div>
          <div className="footer-column">
            <h3>About Us</h3>
            <p>We serve 17 countries worldwide providing hotel bookings and premium rooms for guests. With over 7 years of trusted service, we bring comfort and luxury together.</p>
          </div>
        </div>
        <div className="footer-note">
          <p>© 2025 Hotel Booking System. All rights reserved.</p>
        </div>
      </footer>

    </div>
  );
}

export default HomePage;
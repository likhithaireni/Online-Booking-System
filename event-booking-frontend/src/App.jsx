// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
// import React from "react";
// import RoomList from "./components/RoomList";
// import BookingForm from "./components/BookingForm";
// import BookingList from "./components/BookingList"

// function App() {
//   return (
//     <div style={{ padding: "20px", fontFamily: "Arial" }}>
//       <h1>Online Room Booking System</h1>
//       <RoomList />
//       <BookingForm />
//       <BookingList />
//     </div>
//   );
// }

// export default App;
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/HomePage";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import RoomList from "./components/RoomList";
import BookingForm from "./components/BookingForm";
import BookingList from "./components/BookingList";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <Navbar isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/signup" element={<SignUp setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/rooms" element={isAuthenticated ? (
          <>
            <RoomList />
            <BookingForm />
            <BookingList />
          </>
        ) : (
          <Navigate to="/signin" />
        )} />
      </Routes>
    </Router>
  );
}

export default App;
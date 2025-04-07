// import React from "react";
// import { Link } from "react-router-dom";
// import "../index.css";

// function Navbar({ isAuthenticated, setIsAuthenticated }) {
//   const handleLogout = () => {
//     setIsAuthenticated(false);
//   };

//   return (
//     <nav style={{ padding: "10px", background: "#333", color: "white" }}>
//       <Link to="/" style={{ marginRight: "15px", color: "white" }}>Home</Link>
//       {!isAuthenticated ? (
//         <>
//           <Link to="/signin" style={{ marginRight: "15px", color: "white" }}>Sign In</Link>
//           <Link to="/signup" style={{ color: "white" }}>Sign Up</Link>
//         </>
//       ) : (
//         <>
//           <Link to="/rooms" style={{ marginRight: "15px", color: "white" }}>Rooms</Link>
//           <button onClick={handleLogout} style={{ marginLeft: "10px" }}>Logout</button>
//         </>
//       )}
//     </nav>
//   );
// }

// export default Navbar;
import React from "react";
import { Link } from "react-router-dom";
import "../index.css"; // Make sure this import exists

function Navbar({ isAuthenticated, setIsAuthenticated }) {
  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <nav className="navbar">
      {!isAuthenticated ? (
        <>
          <Link to="/">Home</Link>
          <Link to="/signin">Sign In</Link>
          <Link to="/signup">Sign Up</Link>
        </>
      ) : (
        <>
          <Link to="/rooms">Rooms</Link>
          <button onClick={handleLogout}>Logout</button>
        </>
      )}
    </nav>
  );
}

export default Navbar;
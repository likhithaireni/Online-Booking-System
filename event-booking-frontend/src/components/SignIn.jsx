// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const SignIn = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleSignIn = (e) => {
//     e.preventDefault();
//     // Dummy authentication logic
//     if (email && password) {
//       navigate("/booking");
//     } else {
//       alert("Invalid credentials");
//     }
//   };

//   return (
//     <div className="formContainer">
//       <h2>Sign In</h2>
//       <form onSubmit={handleSignIn}>
//         <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
//         <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required />
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default SignIn;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignIn({ setIsAuthenticated }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, simulate login success
    if (email && password) {
      setIsAuthenticated(true);
      navigate("/rooms");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Sign In</h2>
      <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <br />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      <br />
      <button type="submit">Login</button>
    </form>
  );
}

export default SignIn;
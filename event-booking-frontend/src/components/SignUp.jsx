// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const SignUp = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleSignUp = (e) => {
//     e.preventDefault();
//     if (name && email && password) {
//       alert("Registered successfully!");
//       navigate("/booking");
//     }
//   };

//   return (
//     <div className="formContainer">
//       <h2>Sign Up</h2>
//       <form onSubmit={handleSignUp}>
//         <input type="text" placeholder="Full Name" value={name} onChange={e => setName(e.target.value)} required />
//         <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
//         <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required />
//         <button type="submit">Register</button>
//       </form>
//     </div>
//   );
// };

// export default SignUp;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignUp({ setIsAuthenticated }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate registration success
    if (email && password) {
      setIsAuthenticated(true);
      navigate("/rooms");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Sign Up</h2>
      <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <br />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      <br />
      <button type="submit">Register</button>
    </form>
  );
}

export default SignUp;
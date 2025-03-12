// import './App.css'
// import { useState } from 'react'

// function App(){
//   let isAdmin = false
//   let isLoggedIn = true
//   const [darkMode, setDarkMode] = useState (false)
//   return(
//     <div
//     style={{
//       backgroundColor: darkMode ? "black" : "white",
//       color: darkMode ? "white" : "black",
//       width: "100vw",
//       height: "100vh"
//     }}
//     >
//     {isAdmin ? <p>Welcome to admins configuration</p> : <p>Admin's config isn't aviable</p> }
//     {isLoggedIn && <p>You are loggined</p> }
//     {darkMode ? "dark mode switched on" : "light mode switched on"}
//     <button onClick={() => setDarkMode(!darkMode)}>
//       {darkMode}
//     </button>
//     </div>
//   )
// }

// export default App


import { useState } from "react";
import "./App.css";


export default function Card() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  
  return (
    <div className="container">
      {isLoggedIn ? (
        <div className="content">
          <h2>Бастапқы бетке қош келдіңіз</h2>
          <button onClick={() => setIsLoggedIn(false)}>
            Log out
          </button>
        </div>
      ) : showRegister ? (
        <div className="form-container">
          <h2>Тіркелу</h2>
          <input type="text" placeholder="Email немесе телефон" className="if" />
          <input type="password" placeholder="Жаңа құпия сөз" className="if" />
          <button className="register-btn" onClick={() => setShowRegister(false)}>
            Register
          </button>
        </div>
      ) : (
        <div className="content">
          <h2>Жүйеге кіру қажет</h2>
          <button className="login-btn" onClick={() => setIsLoggedIn(true)}>
            Login
          </button>
          <button className="register-btn" onClick={() => setShowRegister(true)}>
            Register
          </button>
        </div>
      )}
    </div>
  );
}
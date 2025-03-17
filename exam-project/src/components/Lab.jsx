import { useState } from "react";
import "./App.css";

export default function Card() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="container">
      {isLoggedIn ? (
        <div className="content">
          <h2>Бастапқы бетке қош келдіңіз</h2>
          <button onClick={() => setIsLoggedIn(false)}>Log out</button>
        </div>
      ) : showRegister ? (
        <div className="form-container">
          <h2>Тіркелу</h2>
          <input
            type="text"
            placeholder="Email немесе телефон"
            className="if"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Жаңа құпия сөз"
            className="if"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="register-btn" onClick={() => setShowRegister(false)}>
            Register
          </button>
          <button className="back-btn" onClick={() => setShowRegister(false)}>
            Back
          </button>
        </div>
      ) : (
        <div className="content">
          <h2>Жүйеге кіру қажет</h2>
          <button className="login-btn" onClick={() => setIsLoggedIn(true)}>Login</button>
          <button className="register-btn" onClick={() => setShowRegister(true)}>Register</button>
          <button className="guest-btn" onClick={() => setIsLoggedIn(true)}>Guest</button>
        </div>
      )}
    </div>
  );
}

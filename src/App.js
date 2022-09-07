import "./App.css";
import Navbar from "./components/Navbar";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Footer from "./components/Footer";
import Dashboard from "./components/Dashboard";

function App() {
  const [isloggedin, setIsloggedin] = useState(false);
  const [user, setUser] = useState(null);

  return (
    <div className="App">
      <Navbar
        isloggedin={isloggedin}
        setIsloggedin={setIsloggedin}
        user={user}
        setUser={setUser}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Home isloggedin={isloggedin} setIsloggedin={setIsloggedin} />
          }
        />
        <Route
          path="/login"
          element={
            <Login
              isloggedin={isloggedin}
              setIsloggedin={setIsloggedin}
              user={user}
              setUser={setUser}
            />
          }
        />
        <Route
          path="/dashboard"
          element={
            <Dashboard
              isloggedin={isloggedin}
              setIsloggedin={setIsloggedin}
              user={user}
              setUser={setUser}
            />
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

// import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Register from "./components/Register.jsx";
import "./App.css";

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Routes>
          <Route path={"/"} element={<h1>Homepage</h1>}></Route>
          <Route path={"/register"} element={<Register />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

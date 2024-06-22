// Lucky Didan Ramadhan
// FSWD Batch 7
// import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Register from "./components/Register.jsx";
import BookForm from "./components/BookForm.jsx";
import BookDetails from "./components/BookDetails.jsx";
import Homepage from "./components/Homepage.jsx";
import EditBooks from "./components/EditBooks.jsx";
import "./App.css";

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Routes>
          <Route path={"/"} element={<Homepage />}></Route>
          <Route path={"/register"} element={<Register />}></Route>
          <Route path={"/newbook"} element={<BookForm />}></Route>
          <Route path={"/books/:id"} element={<BookDetails />}></Route>
          <Route path={"/editbook/:id"} element={<EditBooks />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

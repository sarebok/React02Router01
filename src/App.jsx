import { useState } from "react";
import "./App.css";
import reactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./assets/components/NavBar";
import Contacto from "./assets/views/Contacto";
import Home from "./assets/views/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

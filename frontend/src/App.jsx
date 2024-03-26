import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginForm from "./User/Login";
import NavigationBar from "./User/LogOut";
import Register from "./User/Register";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="register" element="" />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginForm from "./User/Login";
import LogOut from "./User/LogOut";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path='register' element= <LogOut /> />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

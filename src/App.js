import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppRouter from "./Components/UI/AppRouter";
import Navbar from "./Components/UI/Navbar/Navbar";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className={"container"}>
        <AppRouter />
      </div>
    </BrowserRouter>
  );
}

export default App;

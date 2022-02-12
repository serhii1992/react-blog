import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppRouter from "./Components/UI/AppRouter/AppRouter";
import Navbar from "./Components/UI/Navbar/Navbar";
import { AuthContext } from "./context/context";
import { useState } from "react";

function App() {
  const [isAuthorized, setIsAuthorized] = useState(false);

  return (
    <AuthContext.Provider value={{
      isAuthorized,
      setIsAuthorized
    }}>
    <BrowserRouter>
      <Navbar />
      <div className={"container"}>
        <AppRouter />
      </div>
    </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;

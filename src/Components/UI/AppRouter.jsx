import React from "react";
import About from "../../pages/About";
import Posts from "../../pages/Posts";
import { Route, Routes } from "react-router-dom";

export default function AppRouter() {
  return (
    <div>
      <Routes>
        <Route path="/about" element={<About />}></Route>
        <Route path="/posts" element={<Posts />}></Route>
        <Route path="*" element={<Posts />} />
      </Routes>
    </div>
  );
}

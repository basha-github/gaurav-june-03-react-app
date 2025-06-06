import React from "react";
import AppUsers from "./components/AppUsers";
import DisplayAllUsers from "./components/DisplayAllUsers";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppUsers />} />
          <Route path="/all" element={<DisplayAllUsers />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

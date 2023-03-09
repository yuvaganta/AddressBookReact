import React, { useState } from "react";
import "./App.css";
import SetUp from "./Components/SetUp";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<SetUp />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;

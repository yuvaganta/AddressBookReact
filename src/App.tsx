import React, { useState } from 'react';
import './App.css';
import SetUp from './SetUp';
import { BrowserRouter, Link, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <SetUp/></BrowserRouter>
    </div>
  );
}
export default App;

import "./App.css";
import React from "react";
import Expense from "./components/Expenses/Expense";
function App() {
  const express = [
    { title: "Car Insurance", amount: 294.67, date: new Date(2023, 5, 10) },
    { title: "Car Insurance", amount: 300.0, date: new Date(2023, 5, 10) },
    { title: "Car Insurance", amount: 100.0, date: new Date(2023, 5, 10) },
  ];
  return (
    <div className="App">
      <h2>Let's get started</h2>
      <Expense item = {express}></Expense>
    </div>
  );
}

export default App;

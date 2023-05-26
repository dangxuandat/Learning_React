import "./App.css";
import React, {useState} from "react";
import Expense from "./components/Expenses/Expense";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSE = [
  {id: Math.random().toString(), title: "Car Insurance", amount: 294.67, date: new Date(2021, 5, 10) },
  {id: Math.random().toString(), title: "Car Insurance", amount: 300.0, date: new Date(2020, 5, 10) },
  {id: Math.random().toString(), title: "Car Insurance", amount: 100.0, date: new Date(2019, 5, 10) },
];
function App() {
  const [expenses, setExpense] = useState(DUMMY_EXPENSE);
  const addExpenseHandler = expense => {
    setExpense(prevExpenses => {
      return [expense, ...prevExpenses];
    });
  };
  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expense items = {expenses}></Expense>
    </div>
  );
}

export default App;

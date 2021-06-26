import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
};

export default Expenses;

/** 1. Outputting condition content using && operator
 * {filteredExpenses.length === 0 && <p>No expenses found.</p>}
 */

/** 2. Outputting condition content using ternary(?:) operator
 * {filteredExpenses.length === 0 ? <p>No expenses found.</p> : <filteredExpenses...}
 */

/** 3. Outputting Condition Content
 * let expensesContent = <p>No expenses found.</p>;
 * if (filteredExpenses.length > 0) {
 *  expensesContent = filteredExpenses.map((expense) => (
 *    <ExpenseItem
 *      key={expense.id}
 *      title={expense.title}
 *      amount={expense.amount}
 *      date={expense.date} 
 */
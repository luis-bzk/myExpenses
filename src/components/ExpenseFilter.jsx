import { useState, useEffect } from "react";

const ExpenseFilter = ({ expenseFilter, setExpenseFilter, FontAwesomeIcon }) => {
  return (
    <div className={"expense-filter container-m"}>
      <form>
        <div className={"field"}>
          <label> Filter expenses!</label>

          <select
            value={expenseFilter}
            onChange={(event) => setExpenseFilter(event.target.value)}
          >
            <option value="">-- Filter by a category! --</option>
            <option value="savings">My Savings</option>
            <option value="food">Food</option>
            <option value="hygiene">Hygiene</option>
            <option value="house">House</option>
            <option value="water">Water</option>
            <option value="light">Light</option>
            <option value="internet">Internet</option>
            <option value="entertainment">Entertainment</option>
            <option value="clothes">Clothes</option>
            <option value="health">Health</option>
            <option value="otherExpenses">Other expenses</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default ExpenseFilter;

import React from "react";
import NewBudget from "./NewBudget";

const Header = ({ budget, setBudget }) => {
  return (
    <header className="header">
      <h1>Set your expenses</h1>

      <NewBudget budget={budget} setBudget={setBudget} />
    </header>
  );
};

export default Header;

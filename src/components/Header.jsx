import React from "react";
import NewBudget from "./NewBudget";
import ControlBudget from "./ControlBudget";

const Header = ({
  budget,
  setBudget,
  isValidBudget,
  setIsValidBudget,
  expenses,
  setExpenses,
}) => {
  return (
    <header className="header">
      <h1>Set your expenses</h1>

      {/* see the control budget component or see add new budget */}
      {isValidBudget ? (
        <ControlBudget
          budget={budget}
          setBudget={setBudget}
          expenses={expenses}
          setExpenses={setExpenses}
          setIsValidBudget={setIsValidBudget}
        />
      ) : (
        <NewBudget
          budget={budget}
          setBudget={setBudget}
          setIsValidBudget={setIsValidBudget}
        />
      )}
    </header>
  );
};

export default Header;

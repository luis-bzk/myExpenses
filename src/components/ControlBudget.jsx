// import use effect
import { useState, useEffect } from "react";

const ControlBudget = ({ budget, expenses }) => {
  // use state
  const [available, setAvailable] = useState(0);
  const [spent, setSpent] = useState(0);

  // use effect to change values of avaliable and spent
  useEffect(() => {
    console.log("componente de calculo de gastos arranca!");
    const totalSpent = expenses.reduce(
      (total, expense) => expense.expenseAmount + total,
      0
    );

    const totalAvailable = budget - totalSpent;
    setAvailable(totalAvailable);

    setSpent(totalSpent);
  }, [expenses]);

  // function change value to dollar
  const dollarFormat = (amount) => {
    return amount.toLocaleString("en-us", {
      style: "currency",
      currency: "USD",
    });
  };

  return (
    <div className="container-m control-budget">
      <div className="budget-chart">
        <p>Control grafica</p>
      </div>
      <div className="budget-content">
        <p>
          <span>Budget: </span>
          {dollarFormat(budget)}
        </p>

        <p>
          <span>Available: </span>
          {dollarFormat(available)}
        </p>

        <p>
          <span>Spent: </span>
          {dollarFormat(spent)}
        </p>
      </div>
    </div>
  );
};
export default ControlBudget;

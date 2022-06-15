// import use effect
import { useState, useEffect } from "react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const ControlBudget = ({
  budget,
  setBudget,
  expenses,
  setExpenses,
  setIsValidBudget,
}) => {
  // use state
  const [available, setAvailable] = useState(0);
  const [spent, setSpent] = useState(0);

  const [percentage, setPercentage] = useState(0);

  // use effect to change values of avaliable and spent
  useEffect(() => {
    const totalSpent = expenses.reduce(
      (total, expense) => expense.expenseAmount + total,
      0
    );

    const totalAvailable = budget - totalSpent;

    // calc percentage in graphic
    // const newPercentage = ((budget - totalAvailable) / budget) * 100;
    const newPercentage = ((totalSpent * 100) / budget).toFixed(2);

    setAvailable(totalAvailable);
    setSpent(totalSpent);

    setTimeout(() => {
      setPercentage(Number(newPercentage));
    }, 1000);
  }, [expenses]);

  // function change value to dollar
  const dollarFormat = (amount) => {
    return amount.toLocaleString("en-us", {
      style: "currency",
      currency: "USD",
    });
  };

  const handleResetApp = () => {
    const result = confirm(
      "Are you sure you want to reset and delete all your data?"
    );
    if (result) {
      setBudget(0);
      setExpenses([]);
      setIsValidBudget(false);
    }
  };

  return (
    <div className="container-m control-budget">
      <div className="budget-chart">
        <CircularProgressbar
          value={percentage}
          text={`${percentage}% Spent`}
          className={"chart-graphic"}
          styles={{
            text: {
              fill: percentage > 90 ? "#E14A37FF" : "#3a6bc0",
              fontSize: "10px",
              fontWeight: "500",
            },
            path: {
              stroke: percentage > 90 ? "#E14A37FF" : "#4089F5FF",
            },
            trail: {
              stroke: "#EBEBEB",
              strokeLinecap: "butt",
            },
          }}
        />
      </div>

      <div className="budget-content">
        <button className={"app-reset"} type="button" onClick={handleResetApp}>
          Reset all my data
        </button>

        <p>
          <span>Budget: </span>
          {dollarFormat(budget)}
        </p>

        <p className={` ${available < budget * 0.1 ? "danger" : ""}`}>
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

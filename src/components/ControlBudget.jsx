const ControlBudget = ({ budget }) => {
  // functions
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
          <span>Avaliable: </span>
          {dollarFormat(0)}
        </p>

        <p>
          <span>Spent: </span>
          {dollarFormat(0)}
        </p>
      </div>
    </div>
  );
};
export default ControlBudget;

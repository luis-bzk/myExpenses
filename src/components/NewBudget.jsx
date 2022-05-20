import { useState } from "react";

const NewBudget = ({ budget, setBudget }) => {
  // states
  const [message, setMessage] = useState("");

  // on sumbmit form
  const handleBudget = (event) => {
    event.preventDefault();

    if (!Number(budget)) {
      setMessage("The budget format is not valid");
    }

    if (Number(budget) <= 0) {
      setMessage("thw budget will be bigger than 0");
    }
  };

  return (
    <div className="container-m budget-form">
      <form onSubmit={handleBudget}>
        <div className="field">
          <label>Set new Budget</label>
          <input
            className="new-budget"
            type="text"
            placeholder="Add a new budget"
            value={budget}
            onChange={(event) => setBudget(event.target.value)}
          />
        </div>
        {/* button */}
        <input className="button-budget" type="submit" value="Add Budget" />
      </form>
    </div>
  );
};

export default NewBudget;

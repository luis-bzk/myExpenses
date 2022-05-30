import { useState } from "react";
import Message from "./Message";

const NewBudget = ({ budget, setBudget, setIsValidBudget }) => {
  // states
  const [message, setMessage] = useState("");

  // on sumbmit form
  const handleBudget = (event) => {
    event.preventDefault();

    // validation
    if (!budget) {
      setMessage("You need to set a budget");
      return;
    }
    if (budget <= 0) {
      setMessage("The budget will be bigger than 0");
      return;
    }
    if (!Number(budget)) {
      setMessage("The budget format is not valid");
      return;
    }

    // clear message
    setMessage("");

    //validation
    setIsValidBudget(true);
  };

  return (
    <div className="container-m budget-form">
      <form onSubmit={handleBudget}>
        <div className="field">
          <label>Set new Budget</label>
          <input
            className="new-budget"
            type="number"
            placeholder="Add a new budget"
            value={budget}
            onChange={(event) => setBudget(Number(event.target.value))}
          />
        </div>
        {/* button */}
        <input className="button-budget" type="submit" value="Add Budget" />

        {/* alert */}
        {message && <Message type="error">{message}</Message>}
      </form>
    </div>
  );
};

export default NewBudget;

// use state
import { useState, useEffect } from "react";
// componments
import Message from "./Message";
// icons
import { faSquareXmark } from "@fortawesome/free-solid-svg-icons";

const Modal = ({
  FontAwesomeIcon,
  setModal,
  modalAnimation,
  setModalAnimation,
  saveExpense,
  editExpense,
  setEditExpense,
}) => {
  // states
  const [expenseName, setExpenseName] = new useState("");
  const [expenseAmount, setExpenseAmount] = new useState("");
  const [expenseCategory, setExpenseCategory] = new useState("");
  // for edit expenses
  const [expenseId, setExpenseId] = new useState("");
  const [expenseDate, setExpenseDate] = new useState("");

  const [message, setMessage] = new useState(""); // for message error

  // useEffect when editExpense is ready, change values in the form with recollected data
  useEffect(() => {
    if (Object.keys(editExpense).length > 0) {
      setExpenseName(editExpense.expenseName);
      setExpenseAmount(editExpense.expenseAmount);
      setExpenseCategory(editExpense.expenseCategory);
      setExpenseId(editExpense.expenseId);
      setExpenseDate(editExpense.expenseDate);
    }
  }, [editExpense]);

  // function close and remove Modal
  const closeModal = () => {
    setModalAnimation(false);
    setEditExpense({});

    setTimeout(() => {
      setModal(false);
    }, 400);
  };

  // submit form Modal
  const handleSubmit = (event) => {
    event.preventDefault();

    // validation
    if ([expenseName, expenseAmount, expenseCategory].includes("")) {
      setMessage("You need to set all the values.");

      setTimeout(() => {
        setMessage("");
      }, 2000);
      return;
    }

    // save my expense
    saveExpense({
      expenseName,
      expenseAmount,
      expenseCategory,
      expenseId,
      expenseDate,
    });
  };

  return (
    <div className="modal">
      <div className="close-modal">
        <FontAwesomeIcon
          icon={faSquareXmark}
          className="close-modal-button"
          onClick={closeModal}
        />
      </div>

      {/* formulary to add a task */}
      <form
        onSubmit={handleSubmit}
        className={`form-add-expense container-s ${
          modalAnimation ? "animation" : "close"
        }`}
      >
        <legend>
          {editExpense.expenseName ? "Edit expense" : "New expense"}
        </legend>
        {/* message validation */}
        {message && <Message type="error">{message}</Message>}

        <div className="field">
          <label htmlFor="expenseName">Expense Name:</label>
          <input
            id="expenseName"
            type="text"
            placeholder="Ej. My new food expense"
            value={expenseName}
            onChange={(event) => setExpenseName(event.target.value)}
          />
        </div>

        <div className="field">
          <label htmlFor="expenseAmount">Expense Amount:</label>
          <input
            id="expenseAmount"
            type="number"
            placeholder="Ej. 20"
            value={expenseAmount}
            onChange={(event) => setExpenseAmount(Number(event.target.value))}
          />
        </div>

        <div className="field">
          <label htmlFor="expenseCategory">Category:</label>
          <select
            id="expenseCategory"
            value={expenseCategory}
            onChange={(event) => setExpenseCategory(event.target.value)}
          >
            <option value="">-- Select a category! --</option>
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

        <input
          type="submit"
          value={editExpense.expenseName ? "Save changes" : "Add expense"}
          className="button-add-expense"
        />
      </form>
    </div>
  );
};

export default Modal;

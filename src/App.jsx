// import use state
import { useState, useEffect } from "react";

// import modules
import Header from "./components/Header";
import Modal from "./components/Modal";
import ExpensesList from "./components/ExpensesList";
import ExpenseFilter from "./components/ExpenseFilter";
import { idGenerator } from "./helpers/helpers";
// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";

function App() {
  // states
  const [budget, setBudget] = useState(
    Number(localStorage.getItem("budget")) ?? 0
  );
  const [isValidBudget, setIsValidBudget] = useState(false);

  const [modal, setModal] = useState(false);
  const [modalAnimation, setModalAnimation] = useState(false);

  const [expenses, setExpenses] = useState(
    localStorage.getItem("expenses")
      ? JSON.parse(localStorage.getItem("expenses"))
      : []
  );

  const [editExpense, setEditExpense] = useState({});

  const [expenseFilter, setExpenseFilter] = useState("");
  const [expensesFiltered, setExpensesFiltered] = useState([]);

  // useEffect in editExpense, when have data in an expense to edit, open modal
  useEffect(() => {
    if (Object.keys(editExpense).length > 0) {
      console.log("se tiene datos a editar :)");
      handleNewExpense();
    }
  }, [editExpense]);

  // useEffect, save data in localStorage, budget
  useEffect(() => {
    localStorage.setItem("budget", budget ?? 0);
  }, [budget]);

  // useEffect, show next view if have budget
  useEffect(() => {
    const budgetLS = Number(localStorage.getItem("budget")) ?? 0;

    if (budgetLS > 0) {
      setIsValidBudget(true);
    }
  }, []);

  // useEffect, save data in localStorage -> expenses
  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses) ?? []);
  }, [expenses]);

  //useEffect filter expenses
  useEffect(() => {
    if (expenseFilter) {
      // filter
      const filteredExpenses = expenses.filter((expense) => {
        return expense.expenseCategory === expenseFilter;
      });

      setExpensesFiltered(filteredExpenses);
    }
  }, [expenseFilter]);

  // function - button to open a modal => add new expense
  const handleNewExpense = () => {
    setModal(true);

    setTimeout(() => {
      setModalAnimation(true);
    }, 100);
  };

  // function - to save a new expense
  const saveExpense = (myExpense) => {
    console.log(myExpense);
    if (myExpense.expenseId) {
      // update
      const updateExpenses = expenses.map((expenseState) =>
        expenseState.expenseId === myExpense.expenseId
          ? myExpense
          : expenseState
      );

      setExpenses(updateExpenses);
    } else {
      // new
      myExpense.expenseId = idGenerator();
      myExpense.expenseDate = Date.now();

      setExpenses([...expenses, myExpense]);
    }

    // close modal
    setModalAnimation(false);
    setEditExpense({});

    setTimeout(() => {
      setModal(false);
    }, 500);
  };

  // delete an expense
  const deleteExpense = (idExp) => {
    const updatedExpenses = expenses.filter(
      (expense) => expense.expenseId !== idExp
    );

    setExpenses(updatedExpenses);
  };

  return (
    <div>
      <Header
        budget={budget}
        setBudget={setBudget}
        isValidBudget={isValidBudget}
        setIsValidBudget={setIsValidBudget}
        expenses={expenses}
        setExpenses={setExpenses}
      />

      {/* add expense icon if set a budget */}
      {isValidBudget && (
        <>
          {/* expenses list */}
          <main className={"main"}>
            {expenses.length > 0 && (
              <ExpenseFilter
                expenseFilter={expenseFilter}
                setExpenseFilter={setExpenseFilter}
              />
            )}
            <ExpensesList
              expenses={expenses}
              setEditExpense={setEditExpense}
              deleteExpense={deleteExpense}
              expenseFilter={expenseFilter}
              expensesFiltered={expensesFiltered}
            />
          </main>

          {/* expense button  */}
          <div className="add-expense" onClick={handleNewExpense}>
            <FontAwesomeIcon icon={faCirclePlus} className="expense-button" />
          </div>
        </>
      )}

      {/* show modal if press button to add a new expense*/}
      {modal && (
        <Modal
          FontAwesomeIcon={FontAwesomeIcon}
          setModal={setModal}
          modalAnimation={modalAnimation}
          setModalAnimation={setModalAnimation}
          saveExpense={saveExpense}
          editExpense={editExpense}
          setEditExpense={setEditExpense}
        />
      )}
    </div>
  );
}

export default App;

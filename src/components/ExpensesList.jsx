// import modules
import Expense from "./Expense";

const ExpensesList = ({ expenses }) => {
  return (
    <div className="expenses-list container-m">
      <h2>{expenses.length ? "Expenses List" : "Add a new expenses!"}</h2>

      {expenses.map((expense) => (
        <Expense key={expense.expenseId} expense={expense} />
      ))}
    </div>
  );
};

export default ExpensesList;

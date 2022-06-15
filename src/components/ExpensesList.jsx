// import modules
import Expense from "./Expense";

const ExpensesList = ({
  expenses,
  setEditExpense,
  deleteExpense,
  expensesFiltered,
  expenseFilter,
}) => {
  return (
    <div className="expenses-list container-m">
      <h2>{expenses.length ? "Expenses List" : "Add a new expense!"}</h2>

      {
        expenseFilter ? (
          <>
            {expensesFiltered.map((expense) => (
              <Expense
                key={expense.expenseId}
                expense={expense}
                setEditExpense={setEditExpense}
                deleteExpense={deleteExpense}
              />
            ))}
            {expensesFiltered.length === 0 && (
              <p>There are not expenses in this category</p>
            )
            }
          </>

        ) : (
          expenses.map((expense) => (
            <Expense
              key={expense.expenseId}
              expense={expense}
              setEditExpense={setEditExpense}
              deleteExpense={deleteExpense}
            />
          ))
        )
      }

    </div>
  );
};

export default ExpensesList;

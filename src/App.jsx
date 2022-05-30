// import use state
import { useState } from "react";
// import "./App.css";
import Header from "./components/Header";
import Modal from "./components/Modal";
// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";

function App() {
  // states
  const [budget, setBudget] = useState(0);
  const [isValidBudget, setIsValidBudget] = useState(false);

  const [modal, setModal] = useState(false);
  const [modalAnimation, setModalAnimation] = useState(false);

  // functions
  const handleNewExpense = () => {
    setModal(true);

    setTimeout(() => {
      setModalAnimation(true);
    }, 500);
  };

  return (
    <div>
      <Header
        budget={budget}
        setBudget={setBudget}
        isValidBudget={isValidBudget}
        setIsValidBudget={setIsValidBudget}
      />

      {/* add expense icon if set a budget */}
      {isValidBudget && (
        <div className="add-expense" onClick={handleNewExpense}>
          <FontAwesomeIcon icon={faCirclePlus} className="expense-button" />
        </div>
      )}

      {/* show modal if press button to add a new expense*/}
      {modal && (
        <Modal
          FontAwesomeIcon={FontAwesomeIcon}
          setModal={setModal}
          modalAnimation={modalAnimation}
          setModalAnimation={setModalAnimation}
        />
      )}
    </div>
  );
}

export default App;

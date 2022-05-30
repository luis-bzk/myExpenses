// icons
import { faSquareXmark } from "@fortawesome/free-solid-svg-icons";

const Modal = ({
  FontAwesomeIcon,
  setModal,
  modalAnimation,
  setModalAnimation,
}) => {
  // functions
  const closeModal = () => {
    setModalAnimation(false);
    setTimeout(() => {
      setModal(false);
    }, 500);
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
        className={`form-add-expense container-s ${
          modalAnimation ? "animation" : "close"
        }`}
      >
        <legend>Formulario</legend>

        <div className="field">
          <label htmlFor="name">Expense Name:</label>
          <input id="name" type="text" placeholder="Ej. My new food expense" />
        </div>

        <div className="field">
          <label htmlFor="amount">Expense Amount:</label>
          <input id="amount" type="number" placeholder="Ej. 20" />
        </div>

        <div className="field">
          <label htmlFor="category">Category:</label>
          <select id="category">
            <option value="" selected disabled>
              -- Select a category! --
            </option>
            <option value="savings">My Savings</option>
            <option value="food">Food</option>
            <option value="hygiene">Hygiene</option>
            <option value="house">House</option>
            <option value="water">Water</option>
            <option value="light">Light</option>
            <option value="internet">Internet</option>
            <option value="entertainment">Entertainment</option>
            <option value="health">Health</option>
            <option value="expenses">Other expenses</option>
          </select>
        </div>

        <input
          type="submit"
          value="Add Expense"
          className="button-add-expense"
        />
      </form>
    </div>
  );
};

export default Modal;

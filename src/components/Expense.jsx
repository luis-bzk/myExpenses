import { dateFormat } from "../helpers/helpers";
import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions,
} from "react-swipeable-list";

import "react-swipeable-list/dist/styles.css";
// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faPiggyBank,
  faBowlFood,
  faHandSparkles,
  faHouse,
  faFaucet,
  faLightbulb,
  faWifi,
  faTv,
  faShirt,
  faHeartPulse,
  faWandMagicSparkles,
} from "@fortawesome/free-solid-svg-icons";

// icon dictionary for categoryf
const iconDictionary = {
  savings: <FontAwesomeIcon icon={faPiggyBank} className="FAI-icon" />,
  food: <FontAwesomeIcon icon={faBowlFood} className="FAI-icon" />,
  hygiene: <FontAwesomeIcon icon={faHandSparkles} className="FAI-icon" />,
  house: <FontAwesomeIcon icon={faHouse} className="FAI-icon" />,
  water: <FontAwesomeIcon icon={faFaucet} className="FAI-icon" />,
  light: <FontAwesomeIcon icon={faLightbulb} className="FAI-icon" />,
  internet: <FontAwesomeIcon icon={faWifi} className="FAI-icon" />,
  entertainment: <FontAwesomeIcon icon={faTv} className="FAI-icon" />,
  clothes: <FontAwesomeIcon icon={faShirt} className="FAI-icon" />,
  health: <FontAwesomeIcon icon={faHeartPulse} className="FAI-icon" />,
  otherExpenses: (
    <FontAwesomeIcon icon={faWandMagicSparkles} className="FAI-icon" />
  ),
};

const Expense = ({ expense, setEditExpense }) => {
  // destructuring expense object
  const {
    expenseName,
    expenseAmount,
    expenseCategory,
    expenseId,
    expenseDate,
  } = expense;

  // action when go to right in a expense target
  const leadingActions = () => {
    return (
      <LeadingActions>
        <SwipeAction
          onClick={() => {
            setEditExpense(expense);
          }}
        >
          Edit
        </SwipeAction>
      </LeadingActions>
    );
  };

  // action when go to left in a expense target
  const trailingActions = () => {
    return (
      <TrailingActions>
        <SwipeAction
          onClick={() => {
            console.log("Eliminar X");
          }}
        >
          Delete
        </SwipeAction>
      </TrailingActions>
    );
  };

  return (
    <SwipeableList>
      <SwipeableListItem
        leadingActions={leadingActions()}
        trailingActions={trailingActions()}
      >
        <div className="expense">
          <div className="expense__content">
            {/* icon */}
            <div className={`category-icon ` + expenseCategory}>
              {iconDictionary[expenseCategory]}
            </div>

            <div className="expense__description">
              <p className="expense__category">{expenseCategory}</p>
              <p className="expense__name">{expenseName}</p>
              <p className="expense__date">
                Date: {""}
                <span>{dateFormat(expenseDate)}</span>
              </p>
            </div>
          </div>

          <p className="expense__amount">$ {expenseAmount}</p>
        </div>
      </SwipeableListItem>
    </SwipeableList>
  );
};

export default Expense;

import { dateFormat } from "../helpers/helpers";

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
  faHeartPulse,
  faWandMagicSparkles,
} from "@fortawesome/free-solid-svg-icons";

// icon dictionary for category
const iconDictionary = {
  savings: <FontAwesomeIcon icon={faPiggyBank} className="FAI-icon" />,
  food: <FontAwesomeIcon icon={faBowlFood} className="FAI-icon" />,
  hygiene: <FontAwesomeIcon icon={faHandSparkles} className="FAI-icon" />,
  house: <FontAwesomeIcon icon={faHouse} className="FAI-icon" />,
  water: <FontAwesomeIcon icon={faFaucet} className="FAI-icon" />,
  light: <FontAwesomeIcon icon={faLightbulb} className="FAI-icon" />,
  internet: <FontAwesomeIcon icon={faWifi} className="FAI-icon" />,
  entertainment: <FontAwesomeIcon icon={faTv} className="FAI-icon" />,
  health: <FontAwesomeIcon icon={faHeartPulse} className="FAI-icon" />,
  otherExpenses: (
    <FontAwesomeIcon icon={faWandMagicSparkles} className="FAI-icon" />
  ),
};

const Expense = ({ expense }) => {
  const {
    expenseName,
    expenseAmount,
    expenseCategory,
    expenseId,
    expenseDate,
  } = expense;

  return (
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
  );
};

export default Expense;

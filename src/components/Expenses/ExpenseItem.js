import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import './ExpenseItem.css';

/** className
 * We use className inplace of class attribute because
 * javascript has class keyword 
 * */

/** Props
 * To accept the arguments passed from other components 
 * we use props as a parameter as a standarda
 * we can write anything other than props also
 */

const ExpenseItem = (props) => {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
  )
}

export default ExpenseItem;
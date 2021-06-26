import React from 'react';
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

/** useState
 * It is used to create a special variable, change value of 
 * that variable will be reflected back in the UI by  
 * re-executing that component again. useState function will 
 * schedule the changes and they will reflect after some time 
 */
const ExpenseItem = (props) => {
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
      </Card>
    </li>
  );
}

export default ExpenseItem;
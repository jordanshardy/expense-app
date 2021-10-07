import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import React, {useState} from 'react';

const Expenses = (props) => {
  //define useState and initialize with a value
  // filteredYear and setFilteredYear function
  // when the filterchangehandler function executes set the filtered year, to the selected year. 
  const [filteredYear, setFilteredYear] = useState('2020') 

  //pass a function down to a component that is called. Pass function to expensesd filter so that the function in expense filter is chosen
  // define a function to be passed down
  // selected year as an argument
  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear)
  }
// prop on ExpensesFilter called onChangeFilter (function that is in expenses filter and is pointing the filterChangeHandler)
  
return (
  // set another prop on expenses filter pointing to filteredYear funciton and state variable
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
        <ExpenseItem
          title={props.items[0].title}
          amount={props.items[0].amount}
          date={props.items[0].date}
        />
        <ExpenseItem
          title={props.items[1].title}
          amount={props.items[1].amount}
          date={props.items[1].date}
        />
        <ExpenseItem
          title={props.items[2].title}
          amount={props.items[2].amount}
          date={props.items[2].date}
        />
        <ExpenseItem
          title={props.items[3].title}
          amount={props.items[3].amount}
          date={props.items[3].date}
        />
      </Card>
    </div>
  );
};

export default Expenses;

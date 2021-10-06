import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

//this function has a callback that points to the expenseData in the parent expenseForm component. You cannot pass props to the parent,
// but by declaring a function with a call back we can pass data.
const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    // callback funtion to handle expense data in this component
    const expenseData = {
      //referencing expenseData function in ExpenseForm
      ...enteredExpenseData, //spread operator to add the objects to a new object
      id: Math.random().toString(), //find an return a random number for the ID key.
    };
    props.onAddExpense(expenseData)
  };

  //This return is in place to return the expense form, and a function from the parent. Props cannot be passed to the parent,
  // and so we declare a function with a callback to point to the function in the child component.

  //we point the function through onsaveexpense to expenseform component
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} /> 
    </div>
  );
};

export default NewExpense;

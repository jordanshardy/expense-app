import "./ExpensesFilter.css";


//Listen to changes on the select element which will emit a change event when a user picks a new value from the dropdown
// onChange prop (a built in component) to trigger a function. Don't execute it here, just point at it.
// set event object as the parameter choose the chosen value of event (console.log(event.target.value))
const ExpensesFilter = (props) => {
  //define a function that handles the change and retrieve the chosen value from the event...
  //in the function use props to point to the function in expenses that prints the selected year to the consol
  const dropDownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value)
  }
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={props.selected} onChange={dropDownChangeHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;

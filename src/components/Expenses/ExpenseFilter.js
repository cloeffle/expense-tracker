import React, { useState } from 'react';

import './ExpenseFilter.css';

const ExpensesFilter = () => {
  const [filter, setFilter] = useState('');
  const yearChangeHandler = (event) => {
    setFilter(event.target.value);
  };
  console.log(filter);
  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select onChange={yearChangeHandler}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;

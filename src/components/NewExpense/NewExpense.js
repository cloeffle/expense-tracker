import React from 'react';
import './NewExpense.css';
import ExpensForm from './ExpenseForm';

const NewExpense = () => {
  return (
    <div className='new-expense'>
      <ExpensForm />
    </div>
  );
};

export default NewExpense;

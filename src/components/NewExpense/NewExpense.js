import React from 'react';
import './NewExpense.css';
import ExpensForm from './ExpenseForm';

const NewExpense = () => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(), //good enough for this demo
    };
    console.log(expenseData);
  };

  return (
    <div className='new-expense'>
      <ExpensForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;

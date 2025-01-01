import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context/AppContext';

export const IncomeExpenses = () => {
  const [income, setIncome] = useState(0);
  const [expenses, setExpenses] = useState(0);

  const { transaction } = useContext(AppContext);

  useEffect(() => {
    // Calculate income and expenses from the transaction array
    const incomeTotal = transaction
      .filter((item) => item.amount > 0)
      .reduce((acc, item) => acc + item.amount, 0);

    const expensesTotal = transaction
      .filter((item) => item.amount < 0)
      .reduce((acc, item) => acc + Math.abs(item.amount), 0);

    setIncome(incomeTotal);
    setExpenses(expensesTotal);
  }, [transaction]); // Trigger whenever the transaction array changes

  return (
    <div className="flex bg-white shadow-lg h-20 w-72 justify-evenly items-center">
      <div className="flex flex-col justify-center items-center">
        <p className="text-transform: uppercase text-sm">Income</p>
        <p className="text-green-500 text-lg">${income}</p>
      </div>
      <div className="h-10 w-[1px] bg-gray-300"></div>
      <div className="flex flex-col justify-center items-center">
        <p className="text-transform: uppercase text-sm">Expense</p>
        <p className="text-red-500 text-lg">${expenses}</p>
      </div>
    </div>
  );
};

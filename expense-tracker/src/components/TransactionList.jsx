import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

export const TransactionList = () => {
  const { transaction } = useContext(AppContext);

  return (
    <div>
      <p className="font-bold">History</p>
      <div className="w-72 h-[1px] bg-gray-400 my-2"></div>

      {transaction.length > 0 ? (
        transaction.map((item, index) => (
          <div key={index} className={`flex justify-between p-2 shadow-lg bg-white border-r-4 
           ${item.amount > 0 ? 'border-green-500' : 'border-red-500'}`} >
            <p>{item.text}</p>
            <p>{item.amount > 0 ? `+${item.amount}` : item.amount}</p>
          </div>
        ))
      ) : (
        <p className="text-gray-500">No transactions yet.</p>
      )}
    </div>
  );
};

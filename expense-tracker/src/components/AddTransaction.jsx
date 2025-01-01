import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

export const AddTransaction = () => {
  const { transaction, setTransaction } = useContext(AppContext);
  const [formState, setFormState] = useState({ text: "", amount: "" });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      text: formState.text,
      amount: parseFloat(formState.amount),
    };

    setTransaction([...transaction, newTransaction]); // Add new transaction to the array
    setFormState({ text: "", amount: "" }); // Reset form state
  };

  return (
    <div>
      <h1>Add new transaction</h1>
      <div className="w-72 h-[1px] bg-gray-400 my-2"></div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            name="text"
            value={formState.text}
            onChange={handleChange}
            placeholder="Enter Text"
            className="p-2 border border-gray-400 rounded-md"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            name="amount"
            value={formState.amount}
            onChange={handleChange}
            placeholder="Enter Amount"
            className="p-2 border border-gray-400 rounded-md"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-purple-500 p-2 rounded-md shadow-lg text-white font-bold text-lg hover:scale-105 transition duration-100"
        >
          Add Transaction
        </button>
      </form>
    </div>
  );
};

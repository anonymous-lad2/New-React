import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";

export const Balance = () => {
  const { transaction } = useContext(AppContext); // Destructure amount from AppContext
  const [totalAmount, setTotalAmount] = useState(0);

  // Update totalAmount when amount changes
  useEffect(() => {
    const total = transaction.reduce((acc, item) => acc + item.amount, 0);
    setTotalAmount(total);
  }, [transaction]);

  return (
    <div>
      <p className="text-transform:uppercase font-bold">Your Balance:</p>
      <p className="text-xl font-bold">${totalAmount}</p>
    </div>
  );
};

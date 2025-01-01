import React from "react";
import { Header } from "./components/Header";
import { Balance } from "./components/Balance";
import { IncomeExpenses } from "./components/IncomeExpenses";
import { TransactionList } from "./components/TransactionList";

function App() {
  return (
    <div className="h-screen w-screen bg-[#f7f7f7]">
      <div className="flex items-center pl-32 pt-20 w-4/12 mx-auto">
        <div className="flex flex-col gap-5">
          <Header/>
          <Balance/>
          <IncomeExpenses/>
          <TransactionList/>
        </div>
      </div>
    </div>
  );
}

export default App;

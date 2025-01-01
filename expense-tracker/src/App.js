import React from "react";
import { Header } from "./components/Header";
import { Balance } from "./components/Balance";
import { IncomeExpenses } from "./components/IncomeExpenses";
import { TransactionList } from "./components/TransactionList";
import AppContextProvider from "./context/AppContext";
import { AddTransaction } from "./components/AddTransaction";
import { ResetTransaction } from "./components/ResetTransaction";

function App() {
  return (
    <AppContextProvider>
      <div className="h-screen w-screen bg-[#f7f7f7]">
        <div className="flex pt-20 items-center justify-evenly">
          <div className="flex flex-col gap-5">
            <Header />
            <Balance />
            <IncomeExpenses />
            <TransactionList />
            <ResetTransaction/>
          </div>
          <AddTransaction/>
        </div>
      </div>
    </AppContextProvider>
  );
}

export default App;

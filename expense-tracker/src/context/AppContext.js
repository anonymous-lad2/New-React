import { createContext, useState } from "react";

export const AppContext = createContext();

function AppContextProvider({ children }) {
  const [transaction, setTransaction] = useState([]);

  return (
    <AppContext.Provider value={{ transaction, setTransaction }}>
      {children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;

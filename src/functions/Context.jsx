import React, { createContext } from "react";
export const dataContext = createContext();
function Context({ children }) {
  return (
    <dataContext.Provider value={{ state, setState }}>
      {children}
    </dataContext.Provider>
  );
}

export default Context;

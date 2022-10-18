import React, { createContext, useReducer } from "react";

export const fetchContext = createContext();

const initialValue = {
  productsMan: [],
  productsWoman: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "FETCH_PRODUCTS_MAN":
      return { productsMan: action.payload };
    case "FETCH_PRODUCTS_WOMAN":
      return { productsWoman: action.payload};
    default:
      return state;
  }
}

function FetchContext({ children }) {
  const [state, dispatch] = useReducer(reducer, initialValue);

  return (
    <fetchContext.Provider value={{ state, dispatch }}>
      {children}
    </fetchContext.Provider>
  );
}

export default FetchContext;

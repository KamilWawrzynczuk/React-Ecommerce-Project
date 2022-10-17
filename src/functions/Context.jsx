import React, { createContext, useReducer } from "react";


export const dataContext = createContext();

const initialValue = {
  users: [],
};

function reducer(state, action) {
  switch(action.type){
    case "SUBMIT_USER":
      return {...state, users:[...state.users, action.payload]};
    case "Second":
      return null;
    default:
      return state;
  }
}

function Context({ children }) {

  const [state, dispatch] = useReducer(reducer, initialValue)

  return (
    <dataContext.Provider value={{ state, dispatch }}>
      {children}
    </dataContext.Provider>
  );
}

export default Context;

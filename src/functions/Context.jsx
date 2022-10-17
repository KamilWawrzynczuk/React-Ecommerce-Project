import React, { createContext, useReducer } from "react";

export const dataContext = createContext();

const initialValue = {
  users: [
    {
      email: "info@info.com",
      password: "password1234",
      passwordTwo: "password1234",
      accept: false,
      newsletter: false,
      isLogin: false,
    },
  ],
};

function reducer(state, action) {
  switch (action.type) {
    case "SUBMIT_USER":
      return { ...state, users: [...state.users, action.payload] };
    case "IS_LOGIN":
      return {
        ...state,
        users: state.users.map((ele) => {
          if (ele.email === action.payload.email)
            return { ...ele, isLogin: true };
          else return ele;
        }),
      };
    default:
      return state;
  }
}

function Context({ children }) {
  const [state, dispatch] = useReducer(reducer, initialValue);

  return (
    <dataContext.Provider value={{ state, dispatch }}>
      {children}
    </dataContext.Provider>
  );
}

export default Context;

import React, { createContext, useState } from "react";

export const TodoContextFunc = createContext({});

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [search, setSearch] = useState();
  const [term, setTerm] = useState();

  return (
    <TodoContextFunc.Provider
      value={{ todos, setTodos, search, setSearch, term, setTerm }}
    >
      {children}
    </TodoContextFunc.Provider>
  );
};

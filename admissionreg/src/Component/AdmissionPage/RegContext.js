import React, { createContext, useReducer, useEffect } from 'react';
import { RegReducer } from './RegReducers';

export const RegContext = createContext();

const RegContextProvider = (props) => {
  const [books, dispatch] = useReducer(RegReducer, [], () => {
    const localData = localStorage.getItem('books');
    return localData ? JSON.parse(localData) : [];
  });
  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(books));
    document.title = "Admission";
  }, [books]);
  return (
    <RegContext.Provider value={{ books, dispatch }}>
      {props.children}
    </RegContext.Provider>
  );
}
 
export default RegContextProvider;
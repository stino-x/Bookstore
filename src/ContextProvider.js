// SharedStateContext.js
import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const SharedStateContext = createContext();

export function ContextProvider({ children }) {
  const [BookArray, setBookArray] = useState([]);
  function Bookconstructor(property1, property2) {
    this.bookname = property1;
    this.author = property2;
  }
  

  return (
    <SharedStateContext.Provider value={{
      BookArray, setBookArray, Bookconstructor
    }}
    >
      {children}
    </SharedStateContext.Provider>
  );
}

ContextProvider.propTypes = {
  children: PropTypes.node.isRequired, // Validate children as a node (React node)
};

export default SharedStateContext;

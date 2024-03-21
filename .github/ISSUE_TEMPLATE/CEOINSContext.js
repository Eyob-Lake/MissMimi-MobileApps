import React, { createContext, useState } from 'react';

const CEOINSContext = createContext();

const CEOINSProvider = ({ children }) => {
  const [chatMessages, setChatMessages] = useState([]);

  const addMessage = (message) => {
    setChatMessages((prevMessages) => [...prevMessages, message]);
  };

  return (
    <CEOINSContext.Provider value={{ chatMessages, addMessage }}>
      {children}
    </CEOINSContext.Provider>
  );
};

export { CEOINSProvider, CEOINSContext };
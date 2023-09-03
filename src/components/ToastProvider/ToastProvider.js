import React, { createContext, useState } from "react";

export const ToastContext = createContext();
function ToastProvider({ children }) {
  const [messageList, setMessageList] = useState([]);

  function createToast(message, messageType) {
    setMessageList((prevState) => [
      ...prevState,
      { id: crypto.randomUUID(), message: message, type: messageType },
    ]);
  }

  function dismissToast(id) {
    const nextToasts = messageList.filter((message) => {
      return message.id !== id;
    });
    setMessageList(nextToasts);
  }
  return (
    <ToastContext.Provider value={{ messageList, createToast, dismissToast }}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;

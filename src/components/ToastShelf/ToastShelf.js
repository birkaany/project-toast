import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

function ToastShelf({ messageList, handleDismiss }) {
  return (
    <ol className={styles.wrapper}>
      {messageList.map(({ message, type, id }, index) => {
        return (
          <li className={styles.toastWrapper} key={index}>
            <Toast messageType={type} id={id} handleDismiss={handleDismiss}>
              {message}
            </Toast>
          </li>
        );
      })}
    </ol>
  );
}

export default ToastShelf;

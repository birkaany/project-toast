import React, { useContext } from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";
import { ToastContext } from "../ToastProvider/ToastProvider";
function ToastShelf({ handleDismiss }) {
  const { messageList } = useContext(ToastContext);
  return (
    <ol className={styles.wrapper}>
      {messageList.map(({ message, type, id }, index) => {
        return (
          <li className={styles.toastWrapper} key={index}>
            <Toast messageType={type} id={id}>
              {message}
            </Toast>
          </li>
        );
      })}
    </ol>
  );
}

export default ToastShelf;

import React, { useState } from "react";

import Button from "../Button";
import Toast from "../Toast/Toast";
import styles from "./ToastPlayground.module.css";
import ToastShelf from "../ToastShelf/ToastShelf";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
  const [messageType, setMessageType] = useState("");
  const [message, setMessage] = useState("");
  const [messageList, setMessageList] = useState([]);
  function handleSubmit(e) {
    e.preventDefault();
    if (message == "" || messageType == "") {
      alert("Please fill the form");
      return;
    }
    setMessageList((prevState) => [
      ...prevState,
      { id: crypto.randomUUID(), message: message, type: messageType },
    ]);
    setMessage("");
  }
  function handleDismiss(id) {
    const nextToasts = messageList.filter((message) => {
      return message.id !== id;
    });
    setMessageList(nextToasts);
  }
  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>
      <ToastShelf messageList={messageList} handleDismiss={handleDismiss} />
      <form className={styles.controlsWrapper} onSubmit={handleSubmit}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: "baseline" }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea
              id="message"
              className={styles.messageInput}
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          {VARIANT_OPTIONS.map((option, index) => {
            return (
              <div
                key={index}
                className={`${styles.inputWrapper} ${styles.radioWrapper}`}
              >
                <label htmlFor={`variant-${option}`}>
                  <input
                    id={`variant-${option}`}
                    type="radio"
                    name="variant"
                    value={messageType}
                    onChange={() => setMessageType(option)}
                  />
                  {option}
                </label>
              </div>
            );
          })}
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <Button>Pop Toast!</Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;

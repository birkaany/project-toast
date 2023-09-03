import React, { useContext } from "react";
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from "react-feather";

import VisuallyHidden from "../VisuallyHidden";
import styles from "./Toast.module.css";
import { ToastContext } from "../ToastProvider/ToastProvider";
const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

function Toast({ id, messageType, children }) {
  const messageTypeStyle = messageType && `${styles[messageType]}`;
  const Icon = ICONS_BY_VARIANT[messageType];
  const { dismissToast } = useContext(ToastContext);
  return (
    <div className={`${styles.toast} ${messageTypeStyle}`}>
      <div className={styles.iconContainer}>
        <Icon size={24} />
      </div>
      <p className={styles.content}>{children}</p>
      <button className={styles.closeButton} onClick={() => dismissToast(id)}>
        <X size={24} />
        <VisuallyHidden>Dismiss message</VisuallyHidden>
      </button>
    </div>
  );
}

export default Toast;

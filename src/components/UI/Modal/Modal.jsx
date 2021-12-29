import Button from "../Button/Button";
import Card from "../Card/Card";

import styles from "./Modal.module.scss";

const Modal = ({ title, message, closeModal }) => {
  return (
    <>
      <div className={styles.backdrop} />
      <Card className={styles.modal}>
        <header className={styles.header}>
          <h2>{title}</h2>
        </header>
        <div className={styles.content}>
          <p>{message}</p>
        </div>
        <footer className={styles.actions}>
          <Button onClick={closeModal}>Close</Button>
        </footer>
      </Card>
    </>
  );
};

export default Modal;

import ReactDOM from "react-dom";
import Button from "../Button/Button";
import Card from "../Card/Card";

import styles from "./Modal.module.scss";

const Backdrop = ({ onClick }) => {
  return <div className={styles.backdrop} onClick={onClick} />;
};

const ModalOverlay = ({ title, message, closeModal }) => {
  return (
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
  );
};

const Modal = ({ title, message, closeModal }) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClick={closeModal} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={title}
          message={message}
          closeModal={closeModal}
        />,
        document.getElementById("overlay-root")
      )}
    </>
  );
};

export default Modal;

import styles from "./Card.module.scss";

const Card = ({ className, children }) => {
  return <div className={`${styles.card} ${className}`}>{children}</div>;
};

export default Card;

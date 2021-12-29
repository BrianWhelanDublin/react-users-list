import { useState } from "react";
import Button from "../../UI/Button/Button";
import Card from "../../UI/Card/Card";
import Modal from "../../UI/Modal/Modal";

import styles from "./AddUser.module.scss";

const AddUser = ({ onAddUser }) => {
  const [userName, setUserName] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (e) => {
    e.preventDefault();
    if (userName.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: "Error Empty Inputs",
        message: "Inputs cannot be empty! Please try input a user again",
      });
      return;
    }
    if (+age < 1) {
      setError({
        title: "Error! Wrong age set",
        message: "Age cannot be lower than 1",
      });
      return;
    }
    onAddUser(userName, age);
    setUserName("");
    setAge("");
  };

  const resetError = () => {
    setError(null);
  };

  const userNameChange = (e) => {
    setUserName(e.target.value);
  };

  const ageChange = (e) => {
    setAge(e.target.value);
  };
  return (
    <>
      {error && (
        <Modal
          title={error.title}
          message={error.message}
          closeModal={resetError}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="user-name">User Name</label>
          <input
            id="user-name"
            type="text"
            onChange={userNameChange}
            value={userName}
          />
          <label htmlFor="age">Age (Years)</label>
          <input id="age" type="text" onChange={ageChange} value={age} />
          <Button type={"submit"}>Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;

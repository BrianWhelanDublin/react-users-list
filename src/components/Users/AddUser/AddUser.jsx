import { useRef, useState } from "react";
import Button from "../../UI/Button/Button";
import Card from "../../UI/Card/Card";
import Modal from "../../UI/Modal/Modal";

import styles from "./AddUser.module.scss";

const AddUser = ({ onAddUser }) => {
  const userNameInput = useRef();
  const ageInput = useRef();

  // const [userName, setUserName] = useState("");
  // const [age, setAge] = useState("");
  const [error, setError] = useState(null);

  const addUserHandler = (e) => {
    e.preventDefault();
    let enteredName = userNameInput.current.value;
    let enteredAge = ageInput.current.value;
    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Error Empty Inputs",
        message: "Inputs cannot be empty! Please try input a user again",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "Error! Wrong age set",
        message: "Age cannot be lower than 1",
      });
      return;
    }
    onAddUser(enteredName, enteredAge);
    userNameInput.current.value = "";
    ageInput.current.value = "";
  };

  const resetError = () => {
    setError(null);
  };

  // const userNameChange = (e) => {
  //   setUserName(e.target.value);
  // };

  // const ageChange = (e) => {
  //   setAge(e.target.value);
  // };

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
            // onChange={userNameChange}
            // value={userName}
            ref={userNameInput}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="text"
            // onChange={ageChange}
            // value={age}
            ref={ageInput}
          />
          <Button type={"submit"}>Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;

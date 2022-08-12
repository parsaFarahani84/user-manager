import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import styles from "./AddUser.module.css";

function AddUser(props) {
  const [username, setUserName] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState();

  const addUserHandler = function (e) {
    e.preventDefault();

    if (username.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please Enter a Valid Name and Age",
      });
      return;
    }
    if (age.trim() < 1) {
      setError({
        title: "Invalid Age",
        message: "Please Enter a Valid Age ( > 0)",
      });
      return;
    }

    props.userHandler(username, age);

    setUserName("");
    setAge("");
  };

  const usernameHandler = function (e) {
    setUserName(e.target.value);
  };

  const ageHandler = function (e) {
    setAge(e.target.value);
  };

  const errorHandler = function () {
    setError();
  };

  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          meessage={error.message}
          onComfirm={errorHandler}
        />
      )}{" "}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            onChange={usernameHandler}
            value={username}
          />
          <label htmlFor="age">Age (Years)</label>
          <input id="age" type="number" onChange={ageHandler} value={age} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
}

export default AddUser;

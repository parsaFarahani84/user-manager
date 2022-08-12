import React, { useState } from "react";
import AddUser from "./component/Users/AddUser";
import UserList from "./component/Users/UserList";

function App() {
  const [userData, setUserData] = useState([]);

  const userFunc = function (username, age) {
    setUserData((prevdata) => {
      return [...prevdata, { name: username, pAge: age, id: Math.random() }];
    });
  };

  return (
    <div>
      <AddUser userHandler={userFunc} />
      {userData.length === 0 ? (
        <p style={{ textAlign: "center", color: "white", fontSize: "1.5rem" }}>
          no user yet...
        </p>
      ) : (
        <UserList user={userData} />
      )}
    </div>
  );
}

export default App;

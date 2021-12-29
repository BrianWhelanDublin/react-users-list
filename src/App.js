import React, { useState } from 'react';
import AddUser from './components/Users/AddUser/AddUser';
import UsersList from './components/Users/UsersList/UsersList';


const App = () => {
  const [usersList, setUsersList] = useState([])

  const onAddUser = (userName, age) => {
    const user = {
      userName,
      age,
      id: Math.random().toString()
    }

    setUsersList((prevState) => {
      return [user, ...prevState];
    })
  }

  return (
    <div>
      <AddUser onAddUser={onAddUser} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;

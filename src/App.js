import React , {useState} from 'react';

import AddUser from './components/Users/AddUser.js';
import UserList from './components/Users/UserList.js';

function App() {
  const [usersList , setUsersList] = useState([]);

  const addUserHandler = (uName , uAge) =>{
    setUsersList((prevUserList)=>{
      return [...prevUserList , {name: uName , age: uAge , id:Math.random().toString()}];
    })
  }

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={usersList}/>
    </div>
  );
}

export default App;
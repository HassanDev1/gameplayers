import React, { useState} from 'react';
import logo from './logo.svg';
import './App.css';
import AddUser from './components/addUser';
import UserList from './components/userList';

/*
This exercise will help you put together and practice all of the concepts you've
learned thus far. It will also help you form a strong foundational knowledge of
React and prepare you for your first project.

The instructions for this project are located in the `instructions.md` file.
*/

const App=()=>{

 const [users, setusers] = useState([]);
 const addUser=(user)=>{
   console.log(user)
  setusers([...users,user])
 }
    return (
      <div >
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        
        <AddUser users={users} onAdding={addUser} />
        <UserList   users={users}/>
        
      </div>
    );
  
}

export default App;

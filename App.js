import React,{useState} from 'react';
import './App.css';
import Card from './Components/UI/Card';
import UserForm from './Components/User/UserForm';
import UserList from './Components/User/UserList';

const DUMMY_USER = [
  {name: 'Tom', age:26},
  {name: 'Jerry', age:27}
]

const App = () => {
  const [userData,setUserData] = useState(DUMMY_USER);

const addNewUserHandler = (newUserData) =>{
  setUserData((prevUserDate)=>{
    return [newUserData,...prevUserDate];
  });
}

  return (
    <div className='app-body'>
      <UserForm onSaveNewUser={addNewUserHandler}/>
      <Card>
      {userData.map((e)=>{
        return <UserList data={e} />
      })}
      </Card>
    </div>
  );
}

export default App;

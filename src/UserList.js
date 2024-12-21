import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserList = () => {
  
  const [listOfUsers, setListOfUsers] = useState([]);

  
  useEffect(() => {
    
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        
        setListOfUsers(response.data);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
      });
  }, []);  

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {}
        {listOfUsers.map(user => (
          <li key={user.id}>
            <strong>{user.name}</strong> - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;

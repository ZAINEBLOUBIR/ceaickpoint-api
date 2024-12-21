import React from 'react';
import './App.css';
import UserList from './UserList';  // Correct import

function App() {
  return (
    <div className="App">
      <UserList />  {/* Ensure the component name is exactly 'UserList' */}
    </div>
  );
}

export default App;

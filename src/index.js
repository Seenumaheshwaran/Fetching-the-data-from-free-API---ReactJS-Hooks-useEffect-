import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './App.css';

function Demo() {
  const [users, setUser] = useState({}); 
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        setUser(data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error loading data");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      <h1>List out the user in API</h1>
      <ul>
      {users.map(user => (<li key={user.id}>{user.name}</li>))}
      </ul>
    </div>
  )
}


ReactDOM.render(<Demo/>,document.getElementById('root'));
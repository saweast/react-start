import React, { useState } from 'react';
import Tweet from './Tweet';
import './App.css'


function App() {

  const [isRed, setRed] = useState(false);
  const [count, setCount] = useState(0);


  const increment = () => {
    setCount(count + 1);
    setRed(!isRed);
  }

  const [users, setUsers] = useState([
    { name: 'test', message: 'test message',},
    {
      name: 'test1', message: 'test message1',
    },
    {
      name: 'test2', message: 'test message2',
    },
    {
      name: 'test3', message: 'test message3',
    }
  ])

  return (
    <div className="app">
      <h1 className={isRed ? 'red' : ''}>Change my color!</h1>
      <button onClick={increment}>Increment</button>
      <h1>{count}</h1>
      <div>
        {users.map(user => (
          <Tweet name={user.name} message={user.message}/>
        ))}
      </div>
      
    </div>
  );
}

export default App;
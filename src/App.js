import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement} from './actions';

function App() {

  const counter = useSelector( state => state.counter );
  const isLogged = useSelector( state => state.isLogged );
  const dispatch = useDispatch();

  return (
    <div className="App">
      <button onClick={()=>dispatch(increment(5))}>+</button>
      <h1>Counter {counter}</h1>
      <button onClick={()=>dispatch(decrement())}>-</button>
      {isLogged ? <h4>Valuable</h4> : ''}
    </div>
  );
}

export default App;
import logo from './logo.svg';
import './App.css';
import React from 'react';
import Hide_Show from './components/Hide_Show';
import Increament_Decrement from './components/Increament_Decrement';
import SumNumber from './components/SumNumber';
import UserData from './components/UserData';
import DisableButton from './components/DisableButton';
import { useSelector, useDispatch } from "react-redux";
import { incNumber, decNumber } from "./actions/index";

function App() {
  const myState = useSelector((state) => state.changeNumber);
  const dispatch = useDispatch();
  const users = [
    { name: "John Doe", id: 1 },
    { name: "Jane", id: 2 },
    { name: "Billy Doe", id: 3 }
  ];

  const [] = React.useState(true);

  return (
    <div className="App">

      {users.map((u, i) => {
        return <h2 key={i}>{u.name}--{u.id}</h2>
      })}

      <div className="container">

        <h3>Increament/Decrement Counter</h3>
        <h4>Using React and Redux</h4>


        <a href="quantity_minus" title='Decreament' onClick={() => dispatch(decNumber())}><span>-</span></a>
        <input type="text" name='quantity' className='quantity_input' value={myState} />
        <a href="quantity_plus" title='Increament' onClick={ () => dispatch(incNumber())}><span>+</span></a>

      </div>

      <Hide_Show />

      < Increament_Decrement />
      <DisableButton />
      <SumNumber />

      <UserData />

    </div>
  );
}

export default App;

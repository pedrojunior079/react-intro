import reactLogo from './assets/react.svg';
import './App.css';
import Header from './Header';
import { useState } from 'react';

function App() {
  const [contador, setContador] = useState(0);
  function increment(){
    setContador(contador+1);
    console.log(contador);
  }
  return (
    <>
      <div className='App'>
      <Header title="Header Param"/>
        <img src={reactLogo} className="logo react" alt="React logo" />
        <p>
          <input type="button" value="Clique" onClick={increment}/>
        </p>
        <p>{contador}</p>cliques!
      </div>
         
    </>
  );
}

export default App;

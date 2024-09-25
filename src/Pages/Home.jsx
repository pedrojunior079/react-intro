import reactLogo from '../assets/react.svg';
import Header from '../Header';
import { useState } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

function Home() {
  const [contador, setContador] = useState(0);
  function increment(){
    setContador(contador+1);
    console.log(contador);
  }
  return (
    <>
      <div className='Home'>
      <Header title="Header Param"/>
        <img src={reactLogo} className="logo react" alt="React logo" />
        <p>
          <input type="button" value="Clique" onClick={increment}/>
        </p>
        <p>{contador}</p>cliques!
        <Link to="/cadastro">Acessa cadastro</Link>
      </div>
         
    </>
  );
}

export default Home;
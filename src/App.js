import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Greeting from './components/Greeting/Greeting';
import ItemCount from './components/ItemCount/ItemCount';



function App() {
  return (
    <>
      <NavBar/>
      <Greeting titulo="Cualquier Titulo"/>
      <ItemCount initialValue={1} maxValue={5}/>
    </>
  );
}

export default App;

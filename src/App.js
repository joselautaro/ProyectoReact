// import logo from './logo.svg';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/NavBar';
import './components/style.css';
import ItemListContainer from './components/ItemListContainer';



function App() {
  return (
    <>
      <NavBar/>
      <ItemListContainer titulo="Cualquier Titulo"/>
    </>
  );
}

export default App;

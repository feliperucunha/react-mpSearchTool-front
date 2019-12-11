import React from 'react';
import './App.css';
import NavBar from './components/NavBar'
import ItemList from './components/ItemList'
import BackToTop from './components/BackToTop'

function App() {

  return (
    <div>
      <NavBar />
      <ItemList />
      <BackToTop />
    </div>
  );
}

export default App;

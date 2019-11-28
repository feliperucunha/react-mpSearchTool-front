import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import NavBar from './components/NavBar'
import ItemList from './components/ItemList'

function App() {
 // const [NavBar, setItem] = useState([]);

 // useEffect(() => {
  //  fetch("/movies").then(response =>
  //    response.json().then(data => {
  //      SetItem(data.item);
  //    })
  //  );
 // }, []);


  return (
    <div>
      <NavBar />
      <ItemList />
    </div>
  );
}

export default App;

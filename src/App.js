import HomePage from './components/HomePage';
import {Routes, Route} from 'react-router-dom';
import Beer from './components/BeeR';
import RandomBeers from './components/RandomeBeer';
import AddNewBeer from './components/NewBeer';
import BeerDetails from './components/BeerDetails';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/beers" element={<Beer/>}/>
        <Route path="/random-beer" element={<RandomBeers/>}/>
        <Route path="/beers/addnew" element={<AddNewBeer/>}/>
        <Route path="/beers/:beerId" element={<BeerDetails/>}/>
      </Routes>
      
    </div>
  );
}

export default App;

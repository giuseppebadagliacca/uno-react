import './App.css';
import PlayersHand from './components/PlayersHand/PlayersHand';
import OpponentsHand from './components/OpponentsHand/OpponentsHand';
import CenterPile from './components/CenterPile/CenterPile';

function App() {

  const colorRandomizer = ()=> {
    const colors =['blue', 'green', 'red', 'yellow'];
    return colors[Math.floor(Math.random()*4)];
  }
  const numberRandomizer = () => {
    const numbers = [0,1,2,3,4,5,6,7,8,9];
    return numbers[Math.floor(Math.random()*9)];
  }

  colorRandomizer();
  return (
    <div className="App">
     <h1>My REAL first react app</h1>
     <PlayersHand colorRandomizer={colorRandomizer} numberRandomizer={numberRandomizer}/>
     <CenterPile colorRandomizer={colorRandomizer} numberRandomizer={numberRandomizer}/>
     <OpponentsHand />
    </div>
  );
}

export default App;

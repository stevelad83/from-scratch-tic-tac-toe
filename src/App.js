import './App.css';
import Board from './components/Board.js';
import { GameProvider } from './context/GameContext.js';

function App() {
  return (
    <div>
      <Board />
    </div>
  );
}

export default App;

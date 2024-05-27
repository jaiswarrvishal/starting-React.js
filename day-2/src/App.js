import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './Home';
import UseState from './25-05/useState';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element = {<Home />}/>
        <Route path='/use-state' element = {<UseState />}/>
      </Routes>
    </div>
  );
}

export default App;

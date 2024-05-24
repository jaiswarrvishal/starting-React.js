
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Mens from './Components/Mens';
import Profile from './Components/Profile';
import Register from './Components/Register';
import Login from './Components/Login';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/mens' element={<Mens />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;

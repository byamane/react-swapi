import './App.css';
import { Route, Routes } from 'react-router-dom'
import StarshipsList from './pages/StarshipsLists/StarshipsList';
import StarshipDetails from './pages/StarshipDetails/StarshipDetails';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<StarshipsList />} />
        <Route path='/starship' element={<StarshipDetails />} />
      </Routes>
    </div>
  );
}

export default App;

import './App.css';
import { Route, Routes } from 'react-router-dom' 
import Search from './components/search';
import DisplayPeople from './views/displayPeople';
import DisplayPlanets from './views/displayPlanets.js';
function App() {
  return (
    <div>
      <Search/>
      <Routes>
        <Route path='/planets/:id' element ={<DisplayPlanets/>} />
        <Route path='/people/:id' element ={<DisplayPeople/>} />
      </Routes>
    </div>
  );
}

export default App;

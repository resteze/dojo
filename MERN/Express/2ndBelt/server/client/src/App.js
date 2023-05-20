import './App.css';
import { Route, Routes } from 'react-router-dom';
import Main from './views/Main'
import AddStore from './views/AddStore';
import EditStore from './views/EditStore'
import Store from './views/Store';

function App() {
  return (
    <div >
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/store/add' element={<AddStore/>}/>
        <Route path='/store/edit/:id' element={<EditStore/>}/>
        <Route path='/store/:id' element={<Store/>}/>
        
      </Routes>
    </div>
  );
}

export default App;

import { Route, Routes } from 'react-router-dom';
import Product from './component/Product';
import Update from './component/Update'
import './App.css';
import Main from './views/Main';
function App() {
  return (
    <div >
      <Routes>
        <Route path='/api/' element={<Main />} />
        <Route path='/api/:id/' element={<Product />} />
        <Route path='/api/update/:id/' element={<Update/>}/>
      </Routes>
    </div>
  );
}

export default App;

import './App.css';
import Navigation from './components/Navigation'
import AddProduct from './components/AddProduct';
import Catalog from './components/Catalog';
import Home from './components/Home';
import { Routes, Route } from 'react-router-dom'
import Details from './components/Details';

function App() {
  return (
    <div id="content">
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products/add' exact element={<AddProduct />} />
        <Route path='/products/all' exact element={<Catalog />} />
        <Route path='/products/details/:id' element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;

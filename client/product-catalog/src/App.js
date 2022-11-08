import './App.css';
import Navigation from './components/Navigation'
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div id="content">
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Men from './components/Men';
import Women from './components/Women';
import Search from './components/Search';
import Skincare from './components/Skincare';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path='/' element={<Men />} />
        <Route path='/women' element={<Women />} />
        <Route path='/search' element={<Search />} />
        <Route path='/skincare' element={<Skincare />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;

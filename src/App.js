import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';

import Navbar from './Navbar';
import Home from './Home';
import Services from './Services';
import Contactus from './Contactus';

function App() {
  return (
    <BrowserRouter>
      <div id='app'>
        <Navbar />

        <Routes>
          <Route path='/' element={<Home />} exact/>
          <Route path='/contactus' element={<Contactus />} exact/>
          <Route path='/services' element={<Services />} exact/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

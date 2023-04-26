import './App.css';

import { BrowserRouter,Routes,Route } from 'react-router-dom';
import HomePage from './Home_Page';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Form from './components/Form/Form';
import Packages from './components/Packages/Packages';
import Destination from './components/Destination/Destination';
import Home1 from './components/Home/Home1';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index path='/' element={<HomePage/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/booking' element={<Form/>}/>
          <Route path='/Package' element={<Packages/>}/>
          <Route path='/Home1' element={<Home1/>}/>
          <Route path='/Destination' element={<Destination/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;

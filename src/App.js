import './App.css';

import { BrowserRouter,Routes,Route } from 'react-router-dom';
import HomePage from './Home_Page';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Form from './components/Form/Form';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index path='/' element={<HomePage/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/booking' element={<Form/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;

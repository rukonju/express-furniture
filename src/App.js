
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './context/AuthProvider/AuthProvider';

import Login from './Pages/Authentication/Login/Login';
import Register from './Pages/Authentication/Register/Register';
import Home from './Pages/HomePage/Home/Home';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path='/home' element={<Home />} />
            <Route path="/login" element={<Login />}/>
            <Route path="/register" element={<Register />}/>
          </Routes>
        </BrowserRouter>
      </AuthProvider>  
    </div>
  );
}

export default App;


import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './context/AuthProvider/AuthProvider';

import Login from './Pages/Authentication/Login/Login';
import Register from './Pages/Authentication/Register/Register';
import DashboardMain from './Pages/Dashboard/DashboardMain/DashboardMain';
import Feedback from './Pages/Dashboard/Feedback/Feedback';
import MyOrders from './Pages/Dashboard/MyOrders/MyOrders';

import Home from './Pages/HomePage/Home/Home';
import Products from './Pages/HomePage/Products/Products';
import PrivateRoute from './PrivateRoute/PrivateRoute';


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
            <Route path="/products" element={<Products />}/>
            <Route path='dashboard/*' element={<PrivateRoute><DashboardMain /></PrivateRoute> }>
              <Route path='feedback' element={<Feedback />}/>
              <Route path='myOrder' element={<MyOrders />}/>
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>  
    </div>
  );
}

export default App;

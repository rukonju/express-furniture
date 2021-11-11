
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './context/AuthProvider/AuthProvider';
import AllProducts from './Pages/AllProducts/AllProducts';

import Login from './Pages/Authentication/Login/Login';
import Register from './Pages/Authentication/Register/Register';
import AddProduct from './Pages/Dashboard/AddProduct/AddProduct';
import DashboardMain from './Pages/Dashboard/DashboardMain/DashboardMain';
import Feedback from './Pages/Dashboard/Feedback/Feedback';
import MyOrders from './Pages/Dashboard/MyOrders/MyOrders';

import Home from './Pages/HomePage/Home/Home';
import PrivateRoute from './PrivateRoute/PrivateRoute';


function App() {
  
  return (
    <div className="">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path='/home' element={<Home />} />
            <Route path="/login" element={<Login />}/>
            <Route path="/register" element={<Register />}/>
            <Route path="/products" element={<AllProducts />}/>
            <Route path='dashboard/*' element={<PrivateRoute><DashboardMain /></PrivateRoute> }>
              <Route path='feedback' element={<Feedback />}/>
              <Route path='myOrder' element={<MyOrders />}/>
              <Route path='addProduct' element={<AddProduct />}/>
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>  
    </div>
  );
}

export default App;

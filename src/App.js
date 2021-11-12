
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './context/AuthProvider/AuthProvider';
import AllProducts from './Pages/AllProducts/AllProducts';
import AdminRoute from './Pages/Authentication/AdminRoute/AdminRoute';
import Login from './Pages/Authentication/Login/Login';
import PrivateRoute from './Pages/Authentication/PrivateRoute/PrivateRoute';
import Register from './Pages/Authentication/Register/Register';
import AddProduct from './Pages/Dashboard/AddProduct/AddProduct';
import DashboardDrawer from './Pages/Dashboard/DashboardDrawer/DashboardDrawer';
import Feedback from './Pages/Dashboard/Feedback/Feedback';
import MakeAdmin from './Pages/Dashboard/MakeAdmin/MakeAdmin';
import MyOrders from './Pages/Dashboard/MyOrders/MyOrders';
import Payment from './Pages/Dashboard/Payment/Payment';
import Home from './Pages/HomePage/Home/Home';
import Purchase from './Pages/PurchasePage/Purchase/Purchase';
import PurchaseMain from './Pages/PurchasePage/PurchaseMain/PurchaseMain';



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
            <Route path="products/:id" element={<PrivateRoute><PurchaseMain /></PrivateRoute>}/>
            <Route path="products/products/:id" element={<PrivateRoute><PurchaseMain /></PrivateRoute>}/>
            <Route path='dashboard/*' element={<PrivateRoute><DashboardDrawer /></PrivateRoute> }>
              <Route path='myOrder' element={<MyOrders />}/>
              <Route path='payment' element={<Payment />}/>
              <Route path='feedback' element={<Feedback />}/>
            </Route>
            <Route path='dashboard/*' element={<AdminRoute><DashboardDrawer /></AdminRoute> }>
              <Route path='addProduct' element={<AddProduct />}/>
              <Route path='admin' element={<MakeAdmin />}/>
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>  
    </div>
  );
}

export default App;

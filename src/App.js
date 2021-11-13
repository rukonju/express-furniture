
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './context/AuthProvider/AuthProvider';
import About from './Pages/About/About';
import AllProducts from './Pages/AllProducts/AllProducts';
import AdminRoute from './Pages/Authentication/AdminRoute/AdminRoute';
import Login from './Pages/Authentication/Login/Login';
import PrivateRoute from './Pages/Authentication/PrivateRoute/PrivateRoute';
import Register from './Pages/Authentication/Register/Register';
import AddProduct from './Pages/Dashboard/AddProduct/AddProduct';
import DashboardDrawer from './Pages/Dashboard/DashboardDrawer/DashboardDrawer';
import Feedback from './Pages/Dashboard/Feedback/Feedback';
import MakeAdmin from './Pages/Dashboard/MakeAdmin/MakeAdmin';
import ManageOrder from './Pages/Dashboard/ManageOrders/ManageOrder';
import ManageProducts from './Pages/Dashboard/ManageProducts/ManageProducts';
import MyOrders from './Pages/Dashboard/MyOrders/MyOrders';
import Payment from './Pages/Dashboard/Payment/Payment';
import Home from './Pages/HomePage/Home/Home';
import PurchaseMain from './Pages/PurchasePage/PurchaseMain/PurchaseMain';



function App() {
  
  return (
      <AuthProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path='/home' >
            <Home />
            </Route>
            <Route path="/login" >
            <Login />
            </Route>
            <Route path="/register">
            <Register />
            </Route>
            <Route path="/products" >
              <AllProducts />
            </Route>
            <PrivateRoute path="/purchase/:id">
              <PurchaseMain />
            </PrivateRoute>
            <PrivateRoute path='/dashboard'>
              <DashboardDrawer />
            </PrivateRoute>
              
            <Route path="/about">
              <About />
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>  
  );
}

export default App;

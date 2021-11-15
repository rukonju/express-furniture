
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './context/AuthProvider/AuthProvider';
import About from './Pages/About/About';
import AllProducts from './Pages/AllProducts/AllProducts';
import Login from './Pages/Authentication/Login/Login';
import PrivateRoute from './Pages/Authentication/PrivateRoute/PrivateRoute';
import Register from './Pages/Authentication/Register/Register';
import DashboardDrawer from './Pages/Dashboard/DashboardDrawer/DashboardDrawer';
import Home from './Pages/HomePage/Home/Home';
import PurchaseMain from './Pages/PurchasePage/PurchaseMain/PurchaseMain';
import PageNotFound from './Pages/PageNotFound/PageNotFound';

function App() {
  
  return (
    <div className="App">
      <AuthProvider>
        <Router>
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
            <Route path="*">
              <PageNotFound />
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>  
  );
}

export default App;

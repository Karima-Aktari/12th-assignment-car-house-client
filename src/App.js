import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Navigation from './Pages/Shared/Navigation/Navigation';
import Footer from './Pages/Shared/Footer/Footer';
import Home from '../src/Pages/HomePages/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import ShowAllProducts from './Pages/HomePages/ShowAllProducts/ShowAllProducts';
import Login from './Pages/LoginPages/Login/Login';
import DashBoard from './Pages/DashBoardPage/DashBoard/DashBoard';
import Bookings from './Pages/HomePages/Bookings/Bookings';
import AuthProvider from './Context/AuthProvider';
import Register from './Pages/LoginPages/Register/Register';
import PrivateRoute from './PrivateRoute/PrivateRoute';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Navigation></Navigation>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/allCars">
              <ShowAllProducts></ShowAllProducts>
            </Route>
            <PrivateRoute path="/dashBoard">
              <DashBoard></DashBoard>
            </PrivateRoute>
            <PrivateRoute path="/booking/:bookingId">
              <Bookings></Bookings>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;

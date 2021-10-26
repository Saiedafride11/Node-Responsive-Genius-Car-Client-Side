import './App.css';
import Home from './pages/Home/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Booking from './pages/Booking/Booking/Booking';
import Login from './pages/Login/Login/Login';
import Header from './pages/Shared/Header/Header';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './pages/Login/PrivateRoute/PrivateRoute';
import Footer from './pages/Shared/Footer/Footer';
import AddService from './pages/AddService/AddService';
import ManageServices from './pages/Home/ManageServices/ManageServices';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/booking/:serviceId">
              <Booking></Booking>
            </PrivateRoute>
            <Route path="/addService">
              <AddService></AddService>
            </Route>
            <Route path="/manageServices">
              <ManageServices></ManageServices>
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

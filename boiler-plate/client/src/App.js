import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
  
} from "react-router-dom";

import LandingPage from './components/views/LandingPage/LandingPage';
import LoginPage from './components/views/LoginPage/LoginPage';
import RegisterPage from './components/views/RegisterPage/RegisterPage';
import NavBar from './components/views/NavBar/NavBar';
import Footer from './components/views/Footer/Footer';



function App() {
  return (
    <Router>
    <div>
      <Switch>
        <Route exact path="/" component ={LandingPage}/>
        <Route exact path="/login" component ={LoginPage}/>
        <Route exact path="/Register" component ={RegisterPage}/>
      </Switch>
    </div>
  </Router>
  );
}

export default App;

// import logo from './logo.svg';
import './App.css';
// import axios from "axios";
import Homepage from './components/homepage/homepage';
import Login from './components/login/login';
import Register from './components/register/register';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from 'react';


function App(){

  const [ user, setLoginUser] = useState({
    // name:"",
    // email:"",
    // password:""
  })

  return(
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" >
            {
              user && user._id ? <Homepage setLoginUser={setLoginUser}/> : <Login setLoginUser={setLoginUser}/>
            }
          </Route>
          <Route  path="/login">
            <Login setLoginUser={setLoginUser}/>
          </Route>
          <Route path="/Register">
            <Register/>
          </Route>
        </Switch>
      </Router>
      {/* <Homepage/>
      <Login/>
      <Register/> */}
    </div>
  );
}


export default App;

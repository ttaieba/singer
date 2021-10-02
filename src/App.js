// import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";


import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import './App.css';
import Employe from "./components/Employ/Employe";
import Employes from "./components/Employes/Employes";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Nodfound from "./components/Notfound/Nodfound";



function App() {
  return (
    <div className="">

      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />

          </Route>
          <Route exact path="/Home">
            <Home />

          </Route>
          <Route exact path="/Employes">
            <Employes />

          </Route>
          <Route exact path="/Employe/:id">
            <Employe />

          </Route>
          <Route exact path="*">
            <Nodfound />

          </Route>
        </Switch>
      </Router>


    </div>
  );
}

export default App;

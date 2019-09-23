import React from 'react';
import { BrowserRouter as Router , Route , Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import "react-datepicker/dist/react-datepicker.css";

import Navbar from "./components/Layout/navbar"
import ExcercisesList from './components/Excercises/excercisesList'
import CreateExcercises from './components/Excercises/excerciseCreate'
import EditExcercise from './components/Excercises/excerciseEdit'
import CreateUser from './components/User/createUser'

const App = () => {
  return (
    <Router>
      <Navbar/>
      <br/>
      <div className="container">
      <Switch>
        <Route path="/" exact component={ExcercisesList} />
        <Route path="/edit/:id" exact component={EditExcercise} />
        <Route path="/create" exact component={CreateExcercises} />
        <Route path="/user" exact component={CreateUser} />
      </Switch>
      </div>
    </Router>
  );
}

export default App;

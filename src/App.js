import React, { Component } from 'react';
import './App.css';
import {Switch , Route} from 'react-router-dom'
import Header from './Component/Header'
import Home from './Component/Home'
import Model from './Component/Model'
import Actor from './Component/Actor'
import Music from './Component/Music'
import About from './Component/About'
import Contact from './Component/Contact'

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header/>
          <Switch>
              <Route exact path='/' component={Home}/>
              <Route path='/model' component={Model}/>
              <Route path='/actor' component={Actor}/>
              <Route path='/music' component={Music}/>
              <Route path='/about' component={About}/>
              <Route path='/contact' component={Contact}/>
          </Switch>
      </div>
    );
  }
}

export default App;

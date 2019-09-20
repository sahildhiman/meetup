import React from 'react';
import './App.css';
import { MainHeader } from './components/header'
import { LoginUser } from './components/login'
import  { SignUp } from './components/signup'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './containers/MainLanding'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MainHeader />
        <Route exact path="/" component={Home} />
        <Route path="/LoginUser" component={LoginUser} />        
        <Route path="/SignUp" component={SignUp} />                
      </BrowserRouter>
    </div>
  );
}

export default App;

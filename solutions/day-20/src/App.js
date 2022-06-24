import logo from './logo.svg';
import './App.css';
import React , { Component} from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Redirect,
  Prompt,
  withRouter,
} from 'react-router-dom';

import Header from './components/header';
import Home from './components/catsPage';
import About from './components/about';
import Dummy from './components/dummy';
import Footer from './components/footer';

class App extends Component {
    render (){
      return (
        <BrowserRouter>
          <div className="App">
              <Header/>
              <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/about' element={<About/>}></Route>
                <Route path='/dummy' element={<Dummy/>}></Route>
              </Routes>
              <Footer/>
          </div>
        </BrowserRouter>
      )
    }
  }


export default App;

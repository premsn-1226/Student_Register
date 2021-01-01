import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Component/HomePage/Home';
import Sidemenu from './Component/Sidebar/Sidemenu';
import University from './Component/UniversityPage/University';
import Register from './Component/AdmissionPage/Register';
import './App.css'
class App extends Component {
  render() {
    return (      
      <BrowserRouter>
        <Sidemenu />
        <Route  exact path="/" component={Home} />
        <Route path="/University" component={University}/>
        <Route path="/Admission" component={Register}/>
      </BrowserRouter>
    );
  }
}
 
export default App;
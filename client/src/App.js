import React from 'react';
import {Routes, Route} from 'react-router-dom'
import Login from "./componets/login";
import Signup from "./componets/signup";
import Nav from "./componets/nav"
import Dashboard from './componets/Dashboard';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path="*" element={<Login/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
       
        <Route path="/account/signup" element={<Signup/>}/>
      </Routes>
    </div>
  );
}

export default App;

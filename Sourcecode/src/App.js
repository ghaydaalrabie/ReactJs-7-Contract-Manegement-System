import './App.css';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
// import Videos from "./youtube"
import Header from "./components/header";
import Main from "./components/Main";
import Footer from "./components/footer";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from './components/Register';
import Login from "./components/login";

import AddContract from './components/AddContract';

import EditStudent from './components/EditContract';
import  { Component }  from 'react';

import Contracts from './Contracts';
import Profile from './components/Profile';







function App() {



  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/" element={<Main />} />
         
          <Route exact path="/Register" element={<Register />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/Profile" element={<Profile />} />
          <Route path="/dashboard" element={<AddContract />} />
          <Route path='/edit/:id' element={<EditStudent />} />
          <Route path="/Contracts" element={<Contracts/>}/>
        </Routes>
        
        <Footer />
        {/* <Videos /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;

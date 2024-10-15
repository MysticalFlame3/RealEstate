import { BrowserRouter,Route,Routes } from 'react-router-dom'

import React from 'react'
import Home from "./pages/Home";
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import About from './pages/About';
import SignIn from './pages/Signin';
import Header from './Components/Header';

export default function App() {
  return <BrowserRouter>
  <Header/>
  <Routes> 
    <Route path='/' element = {<Home/>}/>
    <Route path='/about' element = {<About/>}/>
    <Route path="/signin" element = {<SignIn/>}/>
    <Route path="/signup" element = {<SignUp/>}/>
    <Route path='/profile' element = {<Profile/>}/>
  </Routes>
  </BrowserRouter>
}

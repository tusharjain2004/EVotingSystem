import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Vote from './components/Vote'
import VoterLogin from './components/VoterLogin'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import AdminLogin from './pages/AdminLogin'
import MainPage from './pages/MainPage'

function App() {

  return (
    <>
      {/* <div className='App'>
        <Vote/>
      </div>
      <br />
      <div>

      </div> */}
      
        <Routes>
          <Route path="/Login" element={<Login/>}/>
          <Route path="/AdminLogin" element={<AdminLogin/>}/>
          <Route path='/MainPage' element={<MainPage/>}/>
          <Route path="/" element={<Home/>}/>
        </Routes>
      
    </>
  )
}

export default App

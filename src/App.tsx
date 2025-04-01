import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Pages/Home'
import HelpCenter from './Pages/HelpCenter'
import Signin from './Pages/Signin'
import Signup from './Pages/Signup'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/helpCenter" element={<HelpCenter />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
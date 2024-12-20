import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Doctors from './pages/Doctors'
import About from './pages/About'
import Contact from './pages/Contact'
import Profile from './pages/Profile'
import Login from './pages/Login'
import Appointments from './pages/Appointments'
import Appoin from './pages/Appoin'
import Navbar from './components/Navbar';
import Footer from './components/Footer'




const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>

      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/doctors' element={<Doctors />} />
        <Route path='/doctors/:speciality' element={<Doctors />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/about' element={<About />} />
        <Route path='/appointment' element={<Appointments />} />
        <Route path='/appointment/:docId' element={<Appoin />} />

      </Routes>
      <Footer/>
    </div>
  )
}

export default App
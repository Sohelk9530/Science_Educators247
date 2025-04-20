import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router';
import Contact from './components/Contact/Contact.jsx';
import Team from './components/Team/Team.jsx';
import Allcourses from './components/Courses/Allcourses.jsx';
import Home from './components/home/Home.jsx';
import About from './components/About/About.jsx';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}> </Route>
        <Route path='/about' element={<About />}> </Route>
        <Route path='/allcourses' element={<Allcourses />}> </Route>
        <Route path='/team' element={<Team />}> </Route>
        <Route path='/contact' element={<Contact />}> </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App

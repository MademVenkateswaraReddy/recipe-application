import { useState } from 'react'
import './App.css'
import Registration from './components/Registration'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home'
import Nav from './components/Nav'
import CreateRecipe from './components/CreateRecipe'
import SavedRecipe from './components/SavedRecipe'
import ReadRecipe from './components/ReadRecipe'

function App() {

  return (
    <Router>
      <Nav />
      <Routes>
      <Route exact path='/' element={<Home />} />
        <Route exact path='/auth/register' element={<Registration />} />
        <Route exact path='/auth/login' element={<Login />} />
        <Route exact path='/recipe/create-recipe' element={<CreateRecipe />} />
        <Route exact path='/recipe/saved-recipe' element={<SavedRecipe />} />
        <Route exact path='/read-recipe/:id' element={<ReadRecipe />} />
      </Routes>
     
    </Router>
  )
}

export default App

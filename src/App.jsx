import React from 'react'
import './App.css'
import NavBar from './components/Navbar/NavBar'
import Banner from './components/Banner/Banner'
import RowPost from './components/RowPost/RowPost'
import {action,originals} from './urls'
function App() {


  return (
  <div className='App'>
    <NavBar/>
    <Banner/>
    <RowPost url={originals} title='Netflix Originals'/>
    <RowPost url={action} title='Action' isSmall/>
    <RowPost url={action} title='Action' isSmall/>
  </div>
      
  )
}

export default App

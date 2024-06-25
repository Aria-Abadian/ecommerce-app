import React from 'react'
import NavBar from './components/Navbar/NavBar'
import Hero from './components/Hero/Hero'
import CategoryRow1 from './components/Category/CategoryRow1'
import CategoryRow2 from './components/Category/CategoryRow2'

const App = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <CategoryRow1 />
      <CategoryRow2 />
    </div>
  )
}

export default App
import React from 'react'
import { Best, Footer, Home, Navbar, Premium, Store, Testimonials } from './components'
import styles from './constants/style'

const App = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <Home />
        <Best />
        <Premium />
        <Store />
        <Testimonials />
        <Footer />
      </div>
    </div>
  )
}

export default App
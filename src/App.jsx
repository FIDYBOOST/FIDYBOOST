import { useState } from 'react'
import './App.css'
import './components/header/header.css'
import './components/contenido/contenido.css'
import './components/footer/footer.css'
import Header from './components/header/Header'
import Contenido from './components/contenido/contenido'
import Footer from './components/footer/Footer'



function App() {

  return (
    <div className="container-fluid min-vh-100 d-flex flex-column">
      <div className="row sticky-top text-center">
        <div className="col-12 bg-dark p-100 text-light">
          <Header />
        </div>
      </div>
      <div className="row flex-grow-1 text-center">
        <div className="col-12 bg-dark m-10 vh-90 text-light">
          <Contenido />
        </div>
      </div>
      <div className="row text-center">
        <div className="col-12 bg-dark p-100 text-light">
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default App

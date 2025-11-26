import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MobileFrame from "./components/MobileFrame";
import MobileLayout from "./components/MobileLayout";


function App() {

  return (
    <MobileFrame>
      <MobileLayout>
        <h2>Pantalla Home</h2>
        <p>Contenido de prueba dentro del mockup del móvil.</p>
      </MobileLayout>
    </MobileFrame>
  )
}

export default App

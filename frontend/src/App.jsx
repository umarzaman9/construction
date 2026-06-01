import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="d-flex justify-content-center align-items-center vh-100">
        <button className="btn btn-primary">Click here</button>
      </div>
    </>
  )
}

export default App

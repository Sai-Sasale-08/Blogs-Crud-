import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Allroutes from './Allroutes'
import NavigationBar from './components/NavigationBar'
import MyNavbar from './components/NavigationBar'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <MyNavbar/>
      <Allroutes/>
      <Footer/>
    </>
  )
}

export default App

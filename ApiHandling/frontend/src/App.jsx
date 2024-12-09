import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [products,setProducts] = useState([])

  useEffect 

  return (
    <>
    <h1> Number of products are: {products.length}</h1>
    </>
  )
}

export default App

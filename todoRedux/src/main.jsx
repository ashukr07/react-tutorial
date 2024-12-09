import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './app/store.js'

//ham dono jagah kar skte hai
//hame yaha simlilarly prover aur store chahiye rhega

//ham yaha value bolne ki jagah ham use store bolte hai

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)

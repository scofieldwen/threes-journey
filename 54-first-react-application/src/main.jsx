// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <App clickersCount={ 3 }>
      <h1>My First React App</h1>
      <h2>And a fancy subtitle</h2>
    </App>
  // </StrictMode>,
)

import { StrictMode, useContext } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ProveerCartContext from './contexts/ProveerCartContext.jsx'

createRoot(document.getElementById('root')).render(
  <ProveerCartContext>

    <StrictMode>

      <App />
      
    </StrictMode>

  </ProveerCartContext>
  ,
)

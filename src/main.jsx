import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from "./AppB"; //
import './index.css'
import AppB from './AppB';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppB/>
  </StrictMode>,
)

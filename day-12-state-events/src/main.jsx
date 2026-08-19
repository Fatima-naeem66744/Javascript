import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ValidatedForm from './ValidatedForm.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <br /> <hr />
    <ValidatedForm />
  </StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { AuthProvider } from './Components/AuthContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
        <AuthProvider>
          <App />
        </AuthProvider>,
  </StrictMode>,
)

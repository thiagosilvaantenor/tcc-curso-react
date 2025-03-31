import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Menu from './components/Menu/index.tsx'
import { UserProvider } from './context/ContextUser.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <UserProvider>
      <Menu />
      <App />
    </UserProvider>
  </StrictMode>,
)

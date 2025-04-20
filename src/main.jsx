import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Auth0Provider
      domain="dev-6feu7g7hslh3xr2p.us.auth0.com"
      clientId="5hQHL0J6rp5h6Iiu4nZNYhCwCAfQ6uLt"
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >
      <App />
    </Auth0Provider>,
  </StrictMode>,
)

import { Auth0Provider } from '@auth0/auth0-react';
import Login from './components/Login';

function App() {
  return (
    <Auth0Provider
      domain={process.env.REACT_APP_AUTH0_DOMAIN}
      clientId={process.env.REACT_APP_AUTH0_CLIENT_ID}
      authorizationParams={{
        redirect_uri: window.location.origin,
        audience: process.env.REACT_APP_AUTH0_AUDIENCE
      }}
      cacheLocation="localstorage"
      useRefreshTokens={true}
    >
      <Login />
    </Auth0Provider>
  );
}

export default App;
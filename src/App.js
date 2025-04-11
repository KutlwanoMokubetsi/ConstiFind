import { Auth0Provider } from '@auth0/auth0-react';
import Login from './components/Login';

function App() {
  console.log('[SECURITY CHECK] Auth0 Config:', {
    domain: process.env.REACT_APP_AUTH0_DOMAIN,
    clientId: process.env.REACT_APP_AUTH0_CLIENT_ID,
    buildTime: process.env.REACT_APP_BUILD_TIME
  });
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
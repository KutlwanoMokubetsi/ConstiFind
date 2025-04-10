import { Auth0Provider } from '@auth0/auth0-react';
import Login from './components/Login';

function App() {
  return (
    <Auth0Provider
      domain={"dev-0guwahdjkljcq658.us.auth0.com"}
      clientId={"BViyv7wTuGcwpJVyyPcWcyRcRjpmeHJL"}
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >
      <Login />
    </Auth0Provider>
  );
}

export default App;
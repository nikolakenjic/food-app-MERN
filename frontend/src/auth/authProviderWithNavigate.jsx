import { Auth0Provider } from '@auth0/auth0-react';

const AuthProviderWithNavigate = ({ children }) => {
  const domain = import.meta.env.VITE_AUTH0_DOMAIN;
  const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
  const redirectUri = import.meta.env.VITE_AUTH0_CALLBACK_URL;
  //   const audience = import.meta.env.VITE_AUTH0_AUDIENCE;

  console.log(domain);

  if (!domain || !clientId || !redirectUri) {
    throw new Error('unable to initialize auth');
  }

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: redirectUri,
        // audience,
      }}
      //   onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};

export default AuthProviderWithNavigate;

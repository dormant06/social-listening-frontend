import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect, logout, isAuthenticated,user } = useAuth0();

  return (
    <ul>
  {isAuthenticated ? (
    <li>
        <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
          Log Out
        </button>
      </li>
   ) : (
      <li>
      <button onClick={() => loginWithRedirect()}>Log In</button>
      </li>
   )}

      <li>{isAuthenticated && <p>{user.name}</p>}
      </li>
 
            
    </ul>
  );
};

export default LoginButton;

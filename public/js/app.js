let auth0Client = null;

// ..

const fetchAuthConfig = () => fetch("/auth_config.json");

// ..

const configureClient = async () => {
    const response = await fetchAuthConfig();
    const config = await response.json();
  
    auth0Client = await auth0.createAuth0Client({
      domain: config.domain,
      clientId: config.clientId
    });
  };



  // ..

window.onload = async () => {
    await configureClient();
  
    // NEW - update the UI state
    updateUI();

    
  };
  
  // NEW
  const updateUI = async () => {
    const isAuthenticated = await auth0Client.isAuthenticated();
  
    document.getElementById("btn-logout").disabled = !isAuthenticated;
    document.getElementById("btn-login").disabled = isAuthenticated;
  };

  const login = async () => {
    await auth0Client.loginWithRedirect({
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    });
  };
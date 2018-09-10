const Auth = {};

Auth.isAuthenticated = function() {
  return !!this.getToken();
};

Auth.setToken = function(token) {
  localStorage.setItem('token', token);
};

Auth.getToken = function() {
  return localStorage.getItem('token');
};

Auth.removeToken = function() {
  localStorage.removeItem('token');
};


//Decode token and get values which were stored on it
Auth.getPayload = function() {
  const token = this.getToken();
  if(token) {
    const payload = token.split('.')[1];
    return JSON.parse(atob(payload));
  }
};

Auth.currentProfilename = function() {
  return this.getPayload().username;
};

Auth.currentProfileId = function() {
  if(this.isAuthenticated()) {
    return this.getPayload().sub;
  }
};

Auth.bearerHeader = function() {
  return {
    headers: {
      //request headers
      authorization: `Bearer ${Auth.getToken()}`
    }
  };
};


export default Auth;

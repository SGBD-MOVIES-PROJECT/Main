class TokenService {
   
    getLocalAccessToken() {
      const getObject = JSON.parse(localStorage.getItem('user'));
      return getObject;
    }
  
    updateLocalAccessToken(Token) {
        localStorage.setItem('user', JSON.stringify(JSON.stringify(Token)));
        
    }
    removeLocalAccessToken() { 
      localStorage.removeItem('user');
    }

    itslogged() {
      const token = localStorage.getItem('user');
      if (token) {
        return true;
      } else {
        return false;
      }
      
    }

  
  }
  
  export default new TokenService();
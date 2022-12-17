class TokenService {
   
    getLocalAccessToken() {
      const getObject = JSON.parse(localStorage.getItem('user'));
      return getObject;
    }
  
    updateLocalAccessToken(Token) {
        localStorage.setItem('user', JSON.stringify(JSON.stringify(Token)));
        
    }
  


  }
  
  export default new TokenService();
import axios from "axios";
import tokenService from "./tokenService"; 
 const baseUrl="http://127.0.0.1:8000/api/";


class Services { 
    async getMyProfile() { 
        var bodyFormData = new FormData();
        const response= await axios({
            method: "get",
            url:baseUrl+"perfil/",
            data: bodyFormData,
            headers: { "Content-Type": "application/json", "Authorization": "Bearer " + 
            tokenService.getLocalAccessToken().replace(/['"]+/g, '')},

          })
        
          const value = response?.data;         
        return value[0]; 
    }


  }
  
  export default new Services();
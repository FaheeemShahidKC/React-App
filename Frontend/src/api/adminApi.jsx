import axios from "axios";

const adminApi = axios.create({
     baseURL: "http://localhost:5000/admin",
});

const adminLogin = async (loginData) => {
     try {
          const adminLogin = await adminApi.post('/login', loginData)
          return adminLogin.data
     } catch (error) {

     }
}

export{
     adminLogin
}
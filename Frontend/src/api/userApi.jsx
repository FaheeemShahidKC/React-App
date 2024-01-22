import axios from 'axios'

const userApi = axios.create({
     baseURL: 'http://localhost:5000'
})

const userSignup = async (signupData) => {
     try {
          console.log("asdf");
          const fetchedData = await userApi.post('/signup', signupData)
          return fetchedData.data
     } catch (error) {
          console.log(error.message);
     }
}

const userLogin = async (loginData) => {
     try {
          const fetchedData = await userApi.post('/login', loginData)
          console.log(fetchedData.data);
          return fetchedData.data

     } catch (error) {
          console.log(error.message);
     }
}

export {
     userSignup,
     userLogin
}
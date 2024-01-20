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
          console.log('jhgf');
          const fetchedData = await userApi.post('/login', loginData)
          return fetchedData.data
     } catch (error) {
          console.log(error.message);
     }
}

export {
     userSignup,
     userLogin
}
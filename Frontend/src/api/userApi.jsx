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

const updateProfileApi = async ({ name, email, phone, image, id }) => {
     try {
          const data = new FormData()
          data.append("id", id)
          data.append("name", name)
          data.append("emil", email)
          data.append("phone", phone)
          data.append("image", image)

          const config = {
               header: {
                    "content-type": "multipart/form-data",
                    userId: id,
               },
               withCredentials: true,
          };

          const resposnse = await userApi.post('/updateprofile', data, config)
          return resposnse.data
     } catch (error) {
          console.log(error.message);
     }
}

export {
     userSignup,
     userLogin,
     updateProfileApi
}
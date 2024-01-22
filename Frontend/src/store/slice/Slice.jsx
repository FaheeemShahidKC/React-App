import { createSlice } from '@reduxjs/toolkit'

const initialState = {
     id: "",
     name: "",
     email: "",
     image: "",
     phone: "",
}


const userSlice = createSlice({
     name: "user",
     initialState,
     reducers: {
          setUserDetails: (state, action) => {
               console.log(action.payload);
               state.id = action.payload.id;
               state.name = action.payload.name;
               state.email = action.payload.email
               state.phone = action.payload.phone;
               state.image = action.payload.image;
          },
          logoutDetails: (state, action) => {
               state.id = "";
               state.name = "";
               state.email = ""
               state.phone = ""
               state.image = ""
          }
     }
})

export const { setUserDetails, logoutDetails } = userSlice.actions

export default userSlice.reducer
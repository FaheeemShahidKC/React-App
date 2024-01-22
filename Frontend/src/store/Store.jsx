import { configureStore } from '@reduxjs/toolkit'
import UserSlice from './slice/Slice'

const Store = configureStore({
    reducer: {
        user: UserSlice
    }
})

export default Store
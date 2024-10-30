import {applyMiddleware, configureStore} from "@reduxjs/toolkit"
import cartReducer from './cart.reducer'
import userSlice from "./user.reducer"
import { thunk } from "redux-thunk"


const store = configureStore({
    reducer:{
        cart: cartReducer,
        user:userSlice
    }
})

export default store

import { createSlice } from "@reduxjs/toolkit";

const AuthSlice = createSlice({
    name:'auth',
    initialState:{
        isAuthenticated : false,
        email : '',
        id: ''
    },
    reducers:{
        userLogin(state, action){
            state.isAuthenticated = true
            state.id = action.payload.id
            state.email = action.payload.email
        },
        userLogout(state){
            state.isAuthenticated = false
            state.id = ''
            state.email = ''
        }
    }
})

export const {userLogin, userLogout} = AuthSlice.actions
export default AuthSlice.reducer
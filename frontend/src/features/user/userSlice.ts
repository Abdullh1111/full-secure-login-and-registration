import { createSlice } from "@reduxjs/toolkit";
import { TUser } from "../../Types/userType";
 
const initialState :Partial<TUser>={

}
export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        userData:(_state,action)=>{
            
            return {...action.payload}
        }
    }
})

export default userSlice.reducer
export const {userData} = userSlice.actions
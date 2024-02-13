import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
    name:"category",
    initialState:{
        category:'All',
    },
    reducers:{
        SetCategory:(state,action)=>{
            state.category = action.payload
        }
    }
})

export const {SetCategory} = categorySlice.actions
export default categorySlice.reducer;
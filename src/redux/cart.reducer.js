import {createSlice} from '@reduxjs/toolkit'
const cartStore =  createSlice({
    name:'cart',
    initialState:{
       items:[]
    },
    reducers:{
        addItem: (state,action)=>{
            state.items.push(action.payload)
              
        },
        removeItem:  (state)=>{
               state.items.pop()
        },
        cleanCart: (state)=>{
               state.items = []
        }
    }
})

export const {addItem,cleanCart,removeItem} = cartStore.actions

export default cartStore.reducer


import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'
export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    return response.data;
  });


const userSlice = createSlice({
    name:"user",
    initialState:{
      users:[],
      loading:0

    },
    reducers:{
       addUser:(state,payload)=>{
       state.users.push(payload)

       }
    },
    extraReducers:(builder) => {
        builder
          .addCase(fetchUsers.pending, (state) => {
            state.loading = true;
          })
          .addCase(fetchUsers.fulfilled, (state, action) => {
            state.loading = false;
            state.users = action.payload;
          })
          .addCase(fetchUsers.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
          });
      }
})


export default userSlice.reducer
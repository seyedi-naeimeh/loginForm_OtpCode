import { createSlice } from "@reduxjs/toolkit"


export const UserSlice = createSlice({
  name: "data",
  initialState: { value: null},
  reducers: {
    login: (state, action) => {
      state.value = action.payload;
      console.log(action.payload)
    },
   
  },
});

export const { login} = UserSlice.actions;

export default UserSlice.reducer;

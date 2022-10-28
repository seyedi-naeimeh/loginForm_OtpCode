import { configureStore } from '@reduxjs/toolkit'
import UserSlice  from './UserSlice';

export const store = configureStore({
  devTools : true,
  reducer: {
    data:UserSlice
    
  },
})

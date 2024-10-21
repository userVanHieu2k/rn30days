// userSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';


const initialState: UserState = {
  data: null,
  result: null,
  loading: false,
  error: null,
};

// types.ts
  export interface User {
    address: object,
    company: object,
    email: string,
    id: number,
    name: string,
    phone: string,
    username: string,
    website: string,
  }

  export interface ListUser {
    data: User[],
    loading: boolean,
    error: string | null,
  }
  
  export interface UserState {
    data: User | null;
    result: User | null;
    loading: boolean;
    error: string | null;
  }
  

  const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
      fetchUserRequest: (state) => {
        // return state
      },
      saveUser1: (state, action) => {
        return {...state, result: action.payload}
      },
      fetchUserSuccess: (state, action: PayloadAction<User>) => {
        state.data = action.payload;
        state.loading = false;
      },
      fetchUserFailure: (state, action: PayloadAction<string>) => {
        state.error = action.payload;
        state.loading = false;
      },
    },
  });

export const { fetchUserRequest, fetchUserSuccess, fetchUserFailure, saveUser1 } = userSlice.actions;
export default userSlice.reducer;

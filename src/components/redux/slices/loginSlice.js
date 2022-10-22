import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../../axios";

export const fetchLogin = createAsyncThunk(
  "auth/fetchLoginData",
  async (params) => {
    const { data } = await axios.post("auth/login", params);
    return data;
  }
);

export const fetchAuthMe = createAsyncThunk('auth/me', async () => {
  const {data} = await axios.get('auth/me');
  return data;
})

const initialState = {
  data: null,
  status: "loading",
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    logOut: (state) => {
        state.data = null;
    }
  },
  extraReducers: {
    [fetchLogin.pending]: (state) => {
      state.status = "loading";
      state.data = null;
    },
    [fetchLogin.fulfilled]: (state, action) => {
      state.status = "loaded";
      state.data = action.payload;
    },
    [fetchLogin.rejected]: (state, action) => {
      state.status = "rejected";
      state.data = null;
    },
    [fetchAuthMe.pending]: (state) => {
      state.status = "loading";
      state.data = null;
    },
    [fetchAuthMe.fulfilled]: (state, action) => {
      state.status = "loaded";
      state.data = action.payload;
    },
    [fetchAuthMe.rejected]: (state, action) => {
      state.status = "rejected";
      state.data = null;
    },
  },
});

export const selectAuth = (state) => Boolean(state.login.data);
export const {logOut} = loginSlice.actions;
export default loginSlice.reducer;

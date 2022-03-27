import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { aPost } from "./axios/index";

export const login = createAsyncThunk(
  "user/login",
  async (credentials, thunkAPI) => {
    const response = await aPost("auth/login", {
      email: credentials.email,
      password: credentials.password,
    });

    //action.payload del reducer (fullfilled)
    return response.data;
  }
);

export const signUp = createAsyncThunk(
  "user/signUp",
  async (credentials, thunkAPI) => {
    const response = await aPost("auth/signup", {
      email: credentials.email,
      password: credentials.password,
      username: credentials.username,
    });

    //action.payload del reducer (fullfilled)
    return response.data;
  }
);

export const validate = createAsyncThunk(
  "user/validate",
  async (params, thunkAPI) => {
    const response = await aPost("auth/validate");
    return response.data;
  }
);

export const logout = createAsyncThunk("user/logout", async () => {
  const res = await aPost("auth/logout");
  return res.data;
});

const userSlice = createSlice({
  name: "user",
  initialState: {
    logged: false,
    name: "",
    isFetching: false,
    /* lo ponemos false por el tipo */
    error: true,
    message: "",
    loggedUser: null,
  },
  // Thunks
  extraReducers(builder) {
    builder.addCase(login.pending, (state, action) => {
      state.isFetching = true;
      state.error = false;
      state.message = "";
      state.name = "";
      /* no hace falta poner logged false  */
    });

    builder.addCase(login.fulfilled, (state, action) => {
      state.isFetching = false;
      state.logged = true;
      state.error = false;
      state.loggedUser = action.payload.user;
    });

    builder.addCase(login.rejected, (state, action) => {
      state.isFetching = false;
      state.error = true;
    });
    builder.addCase(signUp.pending, (state, action) => {
      state.isFetching = true;
      state.error = false;
      state.message = "";
      /* no hace falta poner logged false  */
    });

    builder.addCase(signUp.fulfilled, (state, action) => {
      state.isFetching = false;
      state.logged = true;
      state.error = false;
    });

    builder.addCase(signUp.rejected, (state, action) => {
      state.isFetching = false;
      state.error = true;
      /*  state.message = action.payload.message; */
    });

    builder.addCase(validate.pending, (state, action) => {
      state.isFetching = true;
    });

    builder.addCase(validate.fulfilled, (state, action) => {
      state.logged = true;
      state.error = false;
      state.isFetching = false;
      state.loggedUser = action.payload.user;
    });

    builder.addCase(validate.rejected, (state, action) => {
      state.logged = false;
      state.isFetching = false;
    });

    builder.addCase(logout.pending, (state, action) => {
      state.isFetching = true;
    });

    builder.addCase(logout.fulfilled, (state, action) => {
      state.logged = false;
      state.name = "";
      state.error = false;
      state.isFetching = false;
      state.message = "";
    });

    builder.addCase(logout.rejected, (state, action) => {
      state.error = true;
      state.logged = false;
      state.message = "Error";
      state.isFetching = false;
    });
  },
});

export default userSlice.reducer; // Esto en el store

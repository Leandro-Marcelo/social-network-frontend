import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { aPost, aGet } from "./axios/index";

export const login = createAsyncThunk(
  "user/login",
  async (credentials, thunkAPI) => {
    const response = await aPost("api/auth/login", {
      email: credentials.email,
      password: credentials.password,
    });
    console.log(`el backend`, response);
    //action.payload del reducer (fullfilled)
    /* console.log(`backend`, response.data); */
    return response.data;
  }
);

export const signUp = createAsyncThunk(
  "user/signUp",
  async (credentials, thunkAPI) => {
    const response = await aPost("api/auth/signup", {
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
    const response = await aPost("api/auth/validate");
    return response.data;
  }
);
/* al final no lo utilizamos porque necesitamos desmontarlo para que no actualice el estado */
export const setPostRedux = createAsyncThunk(
  "user/post",
  async (credentials, thunkAPI) => {
    const response = credentials.username
      ? await aGet("api/posts/profile/" + credentials.username)
      : await aGet(`api/posts/timeline/${credentials.logged}`);
    return response.data;
  }
);

export const logout = createAsyncThunk("user/logout", async () => {
  const res = await aPost("api/auth/logout");
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
    posts: [],
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
      state.logged = action.payload.success;
      state.error = false;
      state.loggedUser = action.payload.user;
      state.message = action.payload.message;
    });
    /* para que entre a rejected, es importante que el backend envie un status 404, 400, etc */
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

    builder.addCase(setPostRedux.pending, (state, action) => {
      state.isFetching = true;
    });

    builder.addCase(setPostRedux.fulfilled, (state, action) => {
      state.logged = true;
      state.error = false;
      state.isFetching = false;
      state.posts = action.payload;
    });

    builder.addCase(setPostRedux.rejected, (state, action) => {
      state.logged = false;
      state.isFetching = false;
    });
  },
});

export default userSlice.reducer; // Esto en el store

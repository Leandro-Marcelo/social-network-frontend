/* import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { aDelete, aGet, aPost, aPut } from "../../axios";

const initialState = {
    usersList: [],
};

export const usersList = createAsyncThunk(
    "user/usersList",
    async ({ username }, { rejectWithValue }) => {
        console.log(username);
        try {
            const usersList = await aGet(
                `api/users/all/users?username=${user.loggedUser.username}`
            );

            console.log(response.data);
            return response.data;
        } catch (error) {
            console.log(error.response.data);

            return rejectWithValue(error.response?.data);
        }
    }
);

const postSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: {
        [usersList.pending]: (state, action) => {
            return {
                ...state,
                usersList,
            };
        },
        [usersList.fulfilled]: (state, action) => {
            return {
                ...state,
                usersList,
            };
        },
        [usersList.rejected]: (state, action) => {
            return {
                ...state,
                usersList,
            };
        },
    },
});

//export const {logout,validate} = userSlice.actions // Esto se utiliza en el dispatch
export default postSlice.reducer; // Esto en el store
 */

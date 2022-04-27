import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { aDelete, aGet, aPost, aPut } from "../../axios";

const initialState = {
    usersList: [],
    userProfileData: {},
    friendsList: [],
    /* el status pending debería ir uno por cada solicitud ya sea friendList o userProfiledata, o para un login ya que sino todos se activarían y quizas no se estan ni ejecutando viste, como paso en login que entrabas y el validate ponia el status en pending y se veía como que le habías dado a logearte xd */
    status: "",
    message: "",
};

export const usersList = createAsyncThunk(
    "user/usersList",
    async (name, { rejectWithValue }) => {
        try {
            const response = await aGet(`/users/all/users?name=${name}`);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data);
        }
    }
);

export const userProfileData = createAsyncThunk(
    "user/userProfileData",
    async (name, { rejectWithValue }) => {
        try {
            const response = await aGet(`/users?name=${name}`);

            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data);
        }
    }
);

/* Get the followings of a certain user */
export const getFriends = createAsyncThunk(
    "user/getFriends",
    async (userId, { rejectWithValue }) => {
        try {
            const response = await aGet("/users/friend/" + userId);

            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data);
        }
    }
);

export const follow = createAsyncThunk(
    "user/follow",
    async ({ profileId, userId }, { rejectWithValue }) => {
        try {
            const response = await aPut(`/users/${profileId}/follow`, {
                userId: userId,
            });

            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data);
        }
    }
);

export const unfollow = createAsyncThunk(
    "user/unfollow",
    async ({ profileId, userId }, { rejectWithValue }) => {
        try {
            const response = await aPut(`/users/${profileId}/unfollow`, {
                userId: userId,
            });

            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data);
        }
    }
);

export const setAvatar = createAsyncThunk(
    "user/setAvatar",
    async (userImage, { rejectWithValue }) => {
        console.log(userImage);
        try {
            const response = await aPut(`/users/avatar/setAvatar`, userImage);
            console.log(response.data);
            return response.data;
        } catch (error) {
            console.log(error.response?.data);
            return rejectWithValue(error.response?.data);
        }
    }
);

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: {
        [usersList.pending]: (state, action) => {
            return {
                ...state,
                status: "pending",
                message: "",
            };
        },
        [usersList.fulfilled]: (state, action) => {
            return {
                ...state,
                usersList: action.payload,
                status: "success",
                message: "",
            };
        },
        [usersList.rejected]: (state, action) => {
            return {
                ...state,
                status: "rejected",
                message: "",
            };
        },
        [userProfileData.pending]: (state, action) => {
            return {
                ...state,
                status: "pending",
                message: "",
            };
        },
        [userProfileData.fulfilled]: (state, action) => {
            return {
                ...state,
                userProfileData: action.payload,
                status: "success",
                message: "",
            };
        },
        [userProfileData.rejected]: (state, action) => {
            return {
                ...state,
                status: "rejected",
                message: "",
            };
        },
        [getFriends.pending]: (state, action) => {
            return {
                ...state,
                status: "pending",
                message: "",
            };
        },
        [getFriends.fulfilled]: (state, action) => {
            return {
                ...state,
                friendsList: action.payload.followings,
                status: "success",
                message: "",
            };
        },
        [getFriends.rejected]: (state, action) => {
            return {
                ...state,
                status: "rejected",
                message: "",
            };
        },
        [follow.pending]: (state, action) => {
            return {
                ...state,
                status: "pending",
                message: "",
            };
        },
        [follow.fulfilled]: (state, action) => {
            return {
                ...state,
                status: "success",
                message: "",
            };
        },
        [follow.rejected]: (state, action) => {
            return {
                ...state,
                status: "rejected",
                message: "",
            };
        },
        [unfollow.pending]: (state, action) => {
            return {
                ...state,
                status: "pending",
                message: "",
            };
        },
        [unfollow.fulfilled]: (state, action) => {
            return {
                ...state,
                status: "success",
                message: "",
            };
        },
        [unfollow.rejected]: (state, action) => {
            return {
                ...state,
                status: "rejected",
                message: "",
            };
        },
        [setAvatar.pending]: (state, action) => {
            return {
                ...state,
            };
        },
        [setAvatar.fulfilled]: (state, action) => {
            return {
                ...state,
            };
        },
        [setAvatar.rejected]: (state, action) => {
            return {
                ...state,
            };
        },
    },
});

//export const {logout,validate} = userSlice.actions // Esto se utiliza en el dispatch
export default userSlice.reducer; // Esto en el store

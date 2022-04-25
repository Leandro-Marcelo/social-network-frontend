import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { aDelete, aGet, aPost, aPut } from "../../axios";

const initialState = {
    friendsList: [],
    statusFriendsList: "",
    currentSelected: undefined,
    currentChat: undefined,
    messages: [],
    arrivalMessage: null,
};

export const getAllMessages = createAsyncThunk(
    "chats/getAllMessages",
    async (data, { rejectWithValue }) => {
        try {
            const response = await aPost("/messages/getAllMessages/", data);
            console.log(response.data);
            return response.data;
        } catch (error) {
            console.log(error.response.data);
            return rejectWithValue(error.response?.data);
        }
    }
);

export const addMessage = createAsyncThunk(
    "chats/addMessage",
    async (data, { rejectWithValue }) => {
        try {
            const response = await aPost("/messages/addMessage/", data);
            console.log(response.data);
            return data;
        } catch (error) {
            console.log(error.response.data);
            return rejectWithValue(error.response?.data);
        }
    }
);

const chatsSlice = createSlice({
    name: "chats",
    initialState,
    reducers: {
        setCurrentSelected(state, action) {
            state.currentSelected = action.payload;
        },
        setCurrentChat(state, action) {
            state.currentChat = action.payload;
        },
        cleanupMsg(state, action) {
            state.msg = "";
        },
        setArrivalMessage(state, action) {
            state.arrivalMessage = action.payload;
        },
        setMessages(state, action) {
            const updatedMessages = [...state.messages, action.payload];
            state.messages = updatedMessages;
        },
    },
    extraReducers: {
        [getAllMessages.pending]: (state, action) => {
            return {
                ...state,
            };
        },
        [getAllMessages.fulfilled]: (state, action) => {
            return {
                ...state,
                messages: action.payload,
            };
        },
        [getAllMessages.rejected]: (state, action) => {
            return {
                ...state,
            };
        },
        [addMessage.pending]: (state, action) => {
            return {
                ...state,
            };
        },
        [addMessage.fulfilled]: (state, action) => {
            const { message } = action.payload;
            const msgs = [
                ...state.messages,
                { fromSelf: true, message: message },
            ];

            return {
                ...state,
                /*    messages: msgs, */
            };
        },
        [addMessage.rejected]: (state, action) => {
            return {
                ...state,
            };
        },
    },
});

export const {
    setCurrentSelected,
    setCurrentChat,
    cleanupMsg,
    setArrivalMessage,
    setMessages,
} = chatsSlice.actions;
export default chatsSlice.reducer; // Esto en el store

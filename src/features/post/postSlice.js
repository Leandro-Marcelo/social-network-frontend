import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { aDelete, aGet, aPost, aPut } from "../../axios";

const initialState = {
    posts: [],
    status: "",
    message: "",
};

/* 

     ? await aGet("api/posts/profile/" + username)
        : await aGet(`api/posts/timeline/${logged}`);


*/

export const getPostsName = createAsyncThunk(
    "post/getPostsName",
    async ({ name }, { rejectWithValue }) => {
        try {
            const response = await aGet("/posts/profile/" + name);

            return response.data.sort(
                (post1, post2) =>
                    new Date(post2.createdAt) - new Date(post1.createdAt)
            );
        } catch (error) {
            return rejectWithValue(error.response?.data);
        }
    }
);

export const getPostsHome = createAsyncThunk(
    "post/getPostsHome",
    async ({ idUser }, { rejectWithValue }) => {
        try {
            const response = await aGet("/posts/timeline/" + idUser);

            return response.data.sort(
                (post1, post2) =>
                    new Date(post2.createdAt) - new Date(post1.createdAt)
            );
        } catch (error) {
            return rejectWithValue(error.response?.data);
        }
    }
);

/* export const postCreator = createAsyncThunk(
    "post/postCreator",
    async (userId, { rejectWithValue }) => {
        console.log(userId);
        try {
            const response = await aGet(`/users?userId=${userId}`);

            console.log(response.data);
            return response.data.sort(
                (post1, post2) =>
                    new Date(post2.createdAt) - new Date(post1.createdAt)
            );
        } catch (error) {
            console.log(error.response.data);

            return rejectWithValue(error.response?.data);
        }
    }
); */

export const createPost = createAsyncThunk(
    "post/createPost",
    async ({ newPost, userData }, { rejectWithValue }) => {
        try {
            const response = await aPost("/posts/", newPost);

            const responseData = { ...response.data, userId: { ...userData } };
            return responseData;
        } catch (error) {
            return rejectWithValue(error.response?.data);
        }
    }
);

/* si alguien likea, no debo actualizar el estado creo, solamente con mostrarle que se sumo 1 mas ya es suficiente, cuando recargue se le sumaran los likes que le dieron otras personas justo en ese momento tambien y el suyo obvio */
export const likeIt = createAsyncThunk(
    "post/likeIt",
    async ({ postId, userId }, { rejectWithValue }) => {
        try {
            const response = await aPut(`/posts/${postId}/like`, {
                userId: userId,
            });
            const responseData = {
                postId,
                userId,
                likeIt: response.data.likeIt,
            };
            return responseData;
        } catch (error) {
            return rejectWithValue(error.response?.data);
        }
    }
);

/* setPosts(
          response.data.sort(
            (post1, post2) =>
              new Date(post2.createdAt) - new Date(post1.createdAt)
          )
        ); */

/* [published, username, logged] */

const postSlice = createSlice({
    name: "post",
    initialState,
    reducers: {},
    extraReducers: {
        [getPostsName.pending]: (state, action) => {
            return {
                ...state,
                status: "pending",
                message: "",
            };
        },
        [getPostsName.fulfilled]: (state, action) => {
            return {
                ...state,
                posts: action.payload,
                status: "success",
                message: "",
            };
        },
        [getPostsName.rejected]: (state, action) => {
            return {
                ...state,
                posts: [],
                status: "rejected",
                message: "",
            };
        },
        [getPostsHome.pending]: (state, action) => {
            return {
                ...state,
                status: "pending",
                message: "",
            };
        },
        [getPostsHome.fulfilled]: (state, action) => {
            return {
                ...state,
                posts: action.payload,
                status: "success",
                message: "",
            };
        },
        [getPostsHome.rejected]: (state, action) => {
            return {
                ...state,
                status: "rejected",
                message: "",
            };
        },
        [createPost.pending]: (state, action) => {
            return {
                ...state,
                /* cuidado acá, que si pongo posts:[] luego abajo cuando lo agregue con lo que tenía, ese tenía va a ser vacio */
                status: "pending",
                message: "",
            };
        },
        [createPost.fulfilled]: (state, action) => {
            const updatedPosts = [action.payload, ...state.posts];
            return {
                ...state,
                posts: updatedPosts,
                status: "success",
                message: "",
            };
        },
        [createPost.rejected]: (state, action) => {
            return {
                ...state,
                posts: [],
                status: "rejected",
                message: "",
            };
        },
        [likeIt.pending]: (state, action) => {
            return {
                ...state,
                /* cuidado acá, que si pongo posts:[] luego abajo cuando lo agregue con lo que tenía, ese tenía va a ser vacio */
                status: "pending",
                message: "",
            };
        },
        [likeIt.fulfilled]: (state, action) => {
            /* arreglar lo de los post nuevos arribas, agregarle tambien el sort al otro, a pesar de que al crear lo ponga primero */
            const { postId, userId, likeIt } = action.payload;
            const filteredPost = state.posts.filter(
                (post) => post._id === postId
            );

            let updatedPosts;

            if (!likeIt) {
                // le quita el userId del arreglo likes
                const updatedLikes = filteredPost[0].likes.filter(
                    (likeId) => likeId !== userId
                );
                //actualiza el arreglo likes del post filtrado
                const updatedPost = { ...filteredPost[0], likes: updatedLikes };
                //reemplaza el antiguo post por el post actualizado por nosotros
                updatedPosts = state.posts.map((post) =>
                    post._id === updatedPost._id ? updatedPost : post
                );
            } else {
                // al post filtrado le pusheamos el userId
                const updatedLikes = [...filteredPost[0].likes, userId];
                const updatedPost = {
                    ...filteredPost[0],
                    likes: updatedLikes,
                };
                updatedPosts = state.posts.map((post) =>
                    post._id === updatedPost._id ? updatedPost : post
                );
            }

            return {
                ...state,
                /* posts: updatedPosts, */
                status: "success",
                message: "",
            };
        },
        [likeIt.rejected]: (state, action) => {
            return {
                ...state,
                posts: [],
                status: "rejected",
                message: "",
            };
        },
    },
});

//export const {logout,validate} = userSlice.actions // Esto se utiliza en el dispatch
export default postSlice.reducer; // Esto en el store

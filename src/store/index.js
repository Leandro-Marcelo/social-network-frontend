import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import postReducer from "../features/post/postSlice";
import authReducer from "../features/auth/authSlice";

const store = configureStore({
    /* al hacerlo de esta forma, no tenemos que crear un index reducer y ahí almacenar todo para luego importar el archivo y ponerlo acá, sino que hace directamente eso dentro de esta propiedad (la cual es un objeto por lo mismo que dije recién xd)*/
    reducer: {
        auth: authReducer,
        post: postReducer,
        user: userReducer,
    },
});

/* este tiene el subscribirse? */

export default store;

/* 


import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import teamsReducer from "../features/teams/teamsSlice";
import teamReducer from "../features/team/teamSlice";

const store = configureStore({
    reducer: {
        auth: authReducer,
        teams: teamsReducer,
        team: teamReducer,
    },
});

export default store;





*/

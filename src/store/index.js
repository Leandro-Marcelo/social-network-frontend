/* entre aprendiendo redux y este, es que acá usamos redux toolkit para crear el provider, ademas de que tzuzul pone el provider en lo mas alto de todo, es decir, en el index.js*/
import { configureStore } from "@reduxjs/toolkit";
/* acá trae el reducer userSlice */
import userReducer from "../userSlice";

const store = configureStore({
  /* al hacerlo de esta forma, no tenemos que crear un index reducer y ahí almacenar todo para luego importar el archivo y ponerlo acá, sino que hace directamente eso dentro de esta propiedad (la cual es un objeto por lo mismo que dije recién xd)*/
  reducer: {
    user: userReducer,
  },
});

/* este tiene el subscribirse? */

export default store;

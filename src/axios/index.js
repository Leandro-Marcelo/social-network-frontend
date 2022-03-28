import axios from "axios";

/* voy a usar la técnica de tzuzul aunque el agregó un proxy */
/* const URL = ; */

const instance = axios.create({
  /* aquí es http:localhost:4000/api para que funcione para los demas */
  baseURL: "http://localhost:4000/",
});

const aGet = async (url) => {
  return await instance.get(url, {
    withCredentials: true,
  });
};

const aPost = async (url, data) => {
  return await instance.post(url, data, {
    withCredentials: true,
  });
};

const aPut = async (url, data) => {
  return await instance.put(url, data, {
    withCredentials: true,
  });
};

export default instance;
export { aGet, aPost, aPut };

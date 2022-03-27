import { useContext, useEffect, useState } from "react";
import { aGet } from "../axios/index";
/* import { AuthContext } from "../context/AuthContext"; */
/* import { AuthContext } from "../../context/AuthContext"; */
import { useSelector, useDispatch } from "react-redux";
import Post from "./Post";
import Share from "./Share";
/* RECIBE USERNAME POR EL PROFILE */
export default function Feed({ username }) {
  const [posts, setPosts] = useState([]);
  const user = useSelector((state) => state.user);
  const loggedUser = user.loggedUser;

  useEffect(() => {
    const fetchPosts = async () => {
      const res = username
        ? await aGet("api/posts/profile/" + username)
        : await aGet(`api/posts/timeline/${loggedUser._id}`);
      console.log(`la dataaa`, res);
      setPosts(res.data);
    };
    fetchPosts();
    //y esto debe volver a renderizarse cuando cambie el username
    /* aca iba user y funcionaba perfect */
  }, [username, loggedUser._id]);

  return (
    <div className="feed flex-[5.5] ">
      <div className="feedWrapper px-5 py-5">
        <Share />
        {posts.map((post) => {
          console.log({ post });
          return <Post post={post} key={post._id} />;
        })}
      </div>
    </div>
  );
}

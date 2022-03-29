import { useEffect, useState } from "react";
import { aGet } from "../axios/index";
import { useSelector } from "react-redux";
import Post from "./Post";
import Share from "./Share";
/* RECIBE USERNAME POR EL PROFILE */
export default function Feed({ username }) {
  console.log(`logic render se ejecutó`);
  const [posts, setPosts] = useState([]);
  const [published, setPublished] = useState(false);
  const user = useSelector((state) => state.user);
  const logged = user.logged ? user.loggedUser._id : null;
  useEffect(() => {
    console.log(`useEffect se ejecutó`);
    console.log(
      `el valor de username:`,
      username,
      "el valor de logged:",
      logged
    );
    let isCancelled = false;
    const fetchUser = async () => {
      const response = username
        ? await aGet("api/posts/profile/" + username)
        : await aGet(`api/posts/timeline/${logged}`);
      console.log(response.data);
      if (!isCancelled) {
        setPosts(
          response.data.sort(
            (post1, post2) =>
              new Date(post2.createdAt) - new Date(post1.createdAt)
          )
        );
      }
    };

    fetchUser();
    return () => {
      isCancelled = true;
    };
  }, [published, username, logged]);

  const updatedPost = () => {
    setPublished(!published);
  };

  return (
    <div className="feed flex-[5.5] ">
      {console.log(`Render se ejecutó`)}
      <div className="feedWrapper px-5 py-5">
        {!username || username === user.loggedUser?.username ? (
          <Share updatedPost={updatedPost} />
        ) : (
          ""
        )}

        {posts.map((post) => {
          return <Post post={post} key={post._id} />;
        })}
      </div>
    </div>
  );
}

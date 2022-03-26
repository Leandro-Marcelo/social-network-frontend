/* import { useContext, useEffect, useState } from "react"; */
import { Posts } from "../dummyData";
/* import axios from "axios";
import { AuthContext } from "../../context/AuthContext"; */

import Post from "./Post";
import Share from "./Share";

export default function Feed({ username }) {
  /*   const [posts, setPosts] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = username
        ? await axios.get("/posts/profile/" + username)
        : await axios.get("posts/timeline/" + user._id);
      setPosts(
        res.data.sort((p1, p2) => {
          return new Date(p2.createdAt) - new Date(p1.createdAt);
        })
      );
    };
    fetchPosts();
  }, [username, user._id]); */

  return (
    <div className="feed flex-[5.5] ">
      <div className="feedWrapper px-5 py-5">
        <Share />
        {/* <Post /> */}
        {Posts.map((post) => {
          return <Post post={post} key={post.id} />;
        })}
        {/*  {(!username || username === user.username) && <Share />}
        {posts.map((p) => (
          <Post key={p._id} post={p} />
        ))} */}
      </div>
    </div>
  );
}

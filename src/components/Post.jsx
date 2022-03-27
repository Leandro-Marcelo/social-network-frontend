import { MoreVert } from "@material-ui/icons";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { aGet } from "../axios/index";

export default function Post({ post }) {
  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [user, setUser] = useState({});
  /*    const { user: currentUser } = useContext(AuthContext); */

  useEffect(() => {
    const fetchUser = async () => {
      const res = await aGet(`api/users?userId=${post.userId}`);
      console.log(`User`, res.data);
      setUser(res.data);
    };
    fetchUser();
    /* si la database cambiará el id, sería correcto volver a renderizar todo */
  }, [post.userId]);

  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };
  return (
    <div className="post w-full rounded-xl shadow-[0_0_16px_-8px_rgba(0,0,0,0.68)] my-8 mx-0">
      <div className="postWrapper px-3 py-3">
        <div className="postTop flex items-center justify-between">
          <div className="postTopLeft flex items-center ml-2">
            <Link to={`/profile/${user.username}`}>
              <img
                className="postProfileImg w-8 h-8 rounded-[50%] object-cover"
                src={user.profilePicture || PF + "person/noAvatar.png"}
                alt=""
              />
            </Link>
            <span className="postUsername text-[15px] font-medium my-0 mx-3">
              {user.username}
            </span>
            {/* encontrar un format */}
            <span className="postDate text-[12px]">{post.createdAt}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter mx-2 my-4">
          {/* esto dice si existe post.desc ? post.desc : ""     aunque también podría verse como null */}
          <span className="postText">{post?.desc}</span>
          <img
            className="postImg mt-5 w-full max-h-[700px] object-contain"
            src={post.img}
            alt=""
          />
        </div>
        <div className="postBottom flex items-center justify-between mx-2">
          <div className="postBottomLeft flex items-center">
            <img
              className="likeIcon w-6 h-6 mr-1 cursor-pointer"
              src={PF + "/like.png"}
              alt=""
              onClick={likeHandler}
            />
            <img
              className="likeIcon w-6 h-6 mr-1 cursor-pointer"
              src={PF + "/heart.png"}
              alt=""
              onClick={likeHandler}
            />
            <span className="postLikeCounter text-[15px]">
              {like} people like it
            </span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText cursor-pointer border-b border-gray-400">
              {post.comment} comments
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

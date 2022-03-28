import { MoreVert } from "@material-ui/icons";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { aGet, aPut } from "../axios/index";
import { useSelector } from "react-redux";
export default function Post({ post }) {
  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);
  const [postCreator, setPostCreator] = useState({});
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const user = useSelector((state) => state.user);
  const loggedUser = user.loggedUser;

  /* agrego este useEffect porque sino podría darle like dos veces, actualizar la pagina y volver a darle like, con esto decimos si en post.likes que es un array incluye este id del usuario logeado, entonces es true y cuando clickee, le va a restar 1*/
  useEffect(() => {
    setIsLiked(post.likes.includes(loggedUser._id));
  }, [loggedUser._id, post.likes]);

  useEffect(() => {
    const fetchUser = async () => {
      const res = await aGet(`api/users?userId=${post.userId}`);
      setPostCreator(res.data);
    };
    fetchUser();
    //si la database cambiará el id, sería correcto volver a renderizar todo
  }, [post.userId]);

  const likeHandler = async () => {
    await aPut(`api/posts/${post._id}/like`, {
      userId: loggedUser._id,
    });
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };
  return (
    <div className="post w-full rounded-xl shadow-[0_0_16px_-8px_rgba(0,0,0,0.68)] my-8 mx-0">
      <div className="postWrapper px-3 py-3">
        <div className="postTop flex items-center justify-between">
          <div className="postTopLeft flex items-center ml-2">
            <Link to={`/profile/${postCreator.username}`}>
              <img
                className="postProfileImg w-8 h-8 rounded-[50%] object-cover"
                src={postCreator.profilePicture || PF + "person/noAvatar.png"}
                alt=""
              />
            </Link>
            <span className="postUsername text-[15px] font-medium my-0 mx-3">
              {postCreator.username}
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
            src={post.img ? PF + post.img : ""}
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

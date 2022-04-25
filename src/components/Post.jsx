/* import { MoreVert } from "@material-ui/icons"; */
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { likeIt } from "../features/post/postSlice";
export default function Post({ post }) {
    const [like, setLike] = useState(post.likes.length);
    const [isLiked, setIsLiked] = useState(false);
    const dispatch = useDispatch();
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const auth = useSelector((state) => state.auth);

    useEffect(() => {
        setIsLiked(post.likes.includes(auth.user._id));
        setLike(post.likes.length);
    }, [post.likes]);

    const likeHandler = async () => {
        dispatch(likeIt({ postId: post._id, userId: auth.user._id }));
        /* esto va para el extra reducers, no hace falta, con actualizarlo mas que sobra */
        setLike(isLiked ? like - 1 : like + 1);
        setIsLiked(!isLiked);
    };

    return (
        <div className="post w-full rounded-xl shadow-[0_0_16px_-8px_rgba(0,0,0,0.68)] my-8 mx-0">
            <div className="postWrapper px-3 py-3">
                <div className="postTop flex items-center justify-between">
                    <div className="postTopLeft flex items-center ml-2">
                        <Link to={`/profile/${post.userId.name}`}>
                            <img
                                className="postProfileImg w-8 h-8 rounded-[50%] object-cover"
                                src={
                                    post.userId.img
                                        ? PF + post.userId.img
                                        : PF + "/files/noAvatar.png"
                                }
                                alt=""
                            />
                        </Link>
                        <span className="postUsername text-[15px] font-medium my-0 mx-3">
                            {post.userId.name}
                        </span>
                        {/* encontrar un format */}
                        {/* <span className="postDate text-[12px]">
                            {post.createdAt}
                        </span> */}
                    </div>
                    <div className="postTopRight">
                        <MoreVertIcon />
                    </div>
                </div>
                <div className="postCenter mx-2 my-4">
                    {/* esto dice si existe post.desc ? post.desc : ""     aunque también podría verse como null */}
                    <span className="postText">{post?.desc}</span>
                    <img
                        className="postImg mt-5 w-full max-h-[700px] object-contain"
                        /* src={post.img ? PF + post.img : ""} */
                        src={post.img ? PF + post.img : ""}
                        alt=""
                    />
                </div>
                <div className="postBottom flex items-center justify-between mx-2">
                    <div className="postBottomLeft flex items-center">
                        <img
                            className="likeIcon w-6 h-6 mr-1 cursor-pointer"
                            src={PF + "/files/like.png"}
                            alt=""
                            onClick={likeHandler}
                        />
                        <img
                            className="likeIcon w-6 h-6 mr-1 cursor-pointer"
                            src={PF + "/files/heart.png"}
                            alt=""
                            onClick={likeHandler}
                        />
                        <span className="postLikeCounter text-[15px]">
                            {like} people like it
                        </span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText border-b border-gray-400">
                            {post.comment} comments
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

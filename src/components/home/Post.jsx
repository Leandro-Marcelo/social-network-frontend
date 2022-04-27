import React from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { likeIt } from "../../features/post/postSlice";
import profile1 from "../../assets/Home/images/profile-1.jpg";
import feed1 from "../../assets/Home/images/feed-1.jpg";
import Checkbox from "@mui/material/Checkbox";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import ShareIcon from "@mui/icons-material/Share";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
const Post = ({ post }) => {
    console.log(post);
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

    /* HACER UNA CUANDO NO TENGA IMAGEN TIPO FACEBOOK Y CON IMAGEN, COMO ESTA AHORA TIPO IG */

    return (
        <div className="feed bg-hWhite rounded-[1rem] p-4 my-4 text-[0.85rem] leading-6">
            <div className="head flex justify-between">
                <div className="user flex gap-4 ">
                    <div
                        className={`profile-picture  w-[2.7rem] rounded-[50%] overflow-hidden`}
                    >
                        <img
                            src={
                                post.userId.img
                                    ? PF + post.userId.img
                                    : PF + "/files/noAvatar.png"
                            }
                            alt=""
                            className="block w-full"
                        />
                    </div>
                    <div className="ingo">
                        <h3> {post.userId.name}</h3>
                        <small>
                            Chile, {new Date(post.createdAt).toLocaleString()}
                        </small>
                    </div>
                </div>
                <MoreVertIcon className="text-[black]" />
            </div>
            <div className="photo rounded-[1rem] overflow-hidden my-[0.7rem]">
                <img src={post.img ? PF + post.img : ""} alt="" />
            </div>
            <div className="action-buttons flex justify-between items-center text-[1.4rem] m-[0.6rem]">
                <div className="iteraction-buttons flex items-center">
                    <Checkbox
                        icon={
                            <FavoriteBorderOutlinedIcon className="text-[black]" />
                        }
                        checkedIcon={<FavoriteIcon className="text-hPrimary" />}
                        onClick={likeHandler}
                    />
                    <Checkbox
                        icon={<ShareOutlinedIcon className="text-[black]" />}
                        checkedIcon={<ShareIcon className="text-hPrimary" />}
                    />
                    <Checkbox
                        icon={
                            <ChatBubbleOutlineIcon className="text-[black]" />
                        }
                        checkedIcon={
                            <ChatBubbleIcon className="text-hPrimary" />
                        }
                    />
                </div>
                <div className="bookmark">
                    <Checkbox
                        icon={
                            <BookmarkBorderOutlinedIcon className="text-[black]" />
                        }
                        checkedIcon={<BookmarkIcon className="text-hPrimary" />}
                    />
                </div>
            </div>
            <div className="liked-by flex">
                <span className="w-[1.4rem] h-[1.4rem] block rounded-[50%] overflow-hidden border-2 border-solid border-hWhite ml-[0.6rem]">
                    <img
                        src={
                            post.userId.img
                                ? PF + post.userId.img
                                : PF + "/files/noAvatar.png"
                        }
                        alt=""
                        className="block w-full"
                    />
                </span>
                <span className="w-[1.4rem] h-[1.4rem] block rounded-[50%] overflow-hidden border-2 border-solid border-hWhite ml-[-0.6rem]">
                    <img
                        src={
                            post.userId.img
                                ? PF + post.userId.img
                                : PF + "/files/noAvatar.png"
                        }
                        alt=""
                        className="block w-full"
                    />
                </span>
                <span className="w-[1.4rem] h-[1.4rem] block rounded-[50%] overflow-hidden border-2 border-solid border-hWhite ml-[-0.6rem]">
                    <img
                        src={
                            post.userId.img
                                ? PF + post.userId.img
                                : PF + "/files/noAvatar.png"
                        }
                        alt=""
                        className="block w-full"
                    />
                </span>
                <p className="ml-2">
                    Liked by <b>Ernest Achiever</b> and <b>{like} others</b>
                </p>
            </div>
            <div className="caption">
                <p className="ml-4">
                    <b>{post.userId.name}</b> {post.desc}{" "}
                    <span className="harsh-tag">#lifestyle</span>
                </p>
            </div>
            <div className="comments text-hGray ml-4">
                View all 277 comments
            </div>
        </div>
    );
};

export default Post;

import React from "react";
import profile1 from "../../assets/Home/images/profile-1.jpg";
import feed1 from "../../assets/Home/images/feed-1.jpg";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Checkbox from "@mui/material/Checkbox";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import ShareIcon from "@mui/icons-material/Share";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
const Middle = () => {
    return (
        <div className="middle w-[80vw]  530:p-0 530:w-auto mt-[5.4rem]">
            {/* ********************************* STORIES ****************************** */}
            <div className="stories flex justify-between h-48 gap-2">
                {/* aquí le agrega como 20 mil before para que se vea mas el nombre blanco */}
                <div className="story p-4 rounded-[1rem] flex flex-col justify-between items-center text-white text-[0.75rem] w-full relative overflow-hidden bg-story-img bg-no-repeat bg-center bg-cover">
                    <div
                        className={`profile-picture w-[2rem] h-[2rem] self-start border-[3px] border-solid border-hPrimary rounded-[50%] overflow-hidden `}
                    >
                        <img src={profile1} alt="" className="block w-full" />
                    </div>
                    <p className="name text-[#fff] z-2">Your Story</p>
                </div>
                <div className="story p-4 rounded-[1rem] flex flex-col justify-between items-center text-white text-[0.75rem] w-full relative overflow-hidden bg-story-img bg-no-repeat bg-center bg-cover">
                    <div
                        className={`profile-picture w-[2rem] h-[2rem] self-start border-[3px] border-solid border-hPrimary rounded-[50%] overflow-hidden `}
                    >
                        <img src={profile1} alt="" className="block w-full" />
                    </div>
                    <p className="name">Your Story</p>
                </div>
                <div className="story p-4 rounded-[1rem] flex flex-col justify-between items-center text-white text-[0.75rem] w-full relative overflow-hidden bg-story-img bg-no-repeat bg-center bg-cover">
                    <div
                        className={`profile-picture w-[2rem] h-[2rem] self-start border-[3px] border-solid border-hPrimary rounded-[50%] overflow-hidden `}
                    >
                        <img src={profile1} alt="" className="block w-full" />
                    </div>
                    <p className="name">Your Story</p>
                </div>
                <div className="story p-4 rounded-[1rem] flex flex-col justify-between items-center text-white text-[0.75rem] w-full relative overflow-hidden bg-story-img bg-no-repeat bg-center bg-cover">
                    <div
                        className={`profile-picture w-[2rem] h-[2rem] self-start border-[3px] border-solid border-hPrimary rounded-[50%] overflow-hidden `}
                    >
                        <img src={profile1} alt="" className="block w-full" />
                    </div>
                    <p className="name">Your Story</p>
                </div>
                <div className="story p-4 rounded-[1rem] flex flex-col justify-between items-center text-white text-[0.75rem] w-full relative overflow-hidden bg-story-img bg-no-repeat bg-center bg-cover">
                    <div
                        className={`profile-picture w-[2rem] h-[2rem] self-start border-[3px] border-solid border-hPrimary rounded-[50%] overflow-hidden `}
                    >
                        <img src={profile1} alt="" className="block w-full" />
                    </div>
                    <p className="name">Your Story</p>
                </div>
                <div className="story p-4 rounded-[1rem] flex flex-col justify-between items-center text-white text-[0.75rem] w-full relative overflow-hidden bg-story-img bg-no-repeat bg-center bg-cover">
                    <div
                        className={`profile-picture w-[2rem] h-[2rem] self-start border-[3px] border-solid border-hPrimary rounded-[50%] overflow-hidden `}
                    >
                        <img src={profile1} alt="" className="block w-full" />
                    </div>
                    <p className="name">Your Story</p>
                </div>
            </div>
            {/* ********************************* END STORIES ****************************** */}

            <form className="create-post w-full flex items-center justify-between mt-4 bg-hWhite py-[0.4rem] px-4 rounded-[2rem]">
                <div className="profile-picture w-[2.7rem] rounded-[50%] overflow-hidden">
                    <img src={profile1} alt="" className="block w-full" />
                </div>
                <input
                    type="text"
                    placeholder="dsoakdsao"
                    className="w-full ml-4 bg-[transparent] text-hDark mr-4 outline-none"
                />
                <input
                    type="submit"
                    value={"Post"}
                    className="btn bg-hPrimary text-white"
                />
            </form>

            {/* ********************************* FEEDS ****************************** */}

            <div className="feeds">
                <div className="feed bg-hWhite rounded-[1rem] p-4 my-4 text-[0.85rem] leading-6">
                    <div className="head flex justify-between">
                        <div className="user flex gap-4 ">
                            <div
                                className={`profile-picture  w-[2.7rem] rounded-[50%] overflow-hidden`}
                            >
                                <img
                                    src={profile1}
                                    alt=""
                                    className="block w-full"
                                />
                            </div>
                            <div className="ingo">
                                <h3>Lana Rose</h3>
                                <small>Dubai, 15 minutes ago</small>
                            </div>
                        </div>
                        <MoreVertIcon className="text-[black]" />
                    </div>
                    <div className="photo rounded-[1rem] overflow-hidden my-[0.7rem]">
                        <img src={feed1} alt="" />
                    </div>
                    <div className="action-buttons flex justify-between items-center text-[1.4rem] m-[0.6rem]">
                        <div className="iteraction-buttons flex items-center">
                            <Checkbox
                                icon={
                                    <FavoriteBorderOutlinedIcon className="text-[black]" />
                                }
                                checkedIcon={
                                    <FavoriteIcon className="text-hPrimary" />
                                }
                            />
                            <Checkbox
                                icon={
                                    <ShareOutlinedIcon className="text-[black]" />
                                }
                                checkedIcon={
                                    <ShareIcon className="text-hPrimary" />
                                }
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
                                checkedIcon={
                                    <BookmarkIcon className="text-hPrimary" />
                                }
                            />
                        </div>
                    </div>
                    <div className="liked-by flex">
                        <span className="w-[1.4rem] h-[1.4rem] block rounded-[50%] overflow-hidden border-2 border-solid border-hWhite ml-[0.6rem]">
                            <img
                                src={profile1}
                                alt=""
                                className="block w-full"
                            />
                        </span>
                        <span className="w-[1.4rem] h-[1.4rem] block rounded-[50%] overflow-hidden border-2 border-solid border-hWhite ml-[-0.6rem]">
                            <img
                                src={profile1}
                                alt=""
                                className="block w-full"
                            />
                        </span>
                        <span className="w-[1.4rem] h-[1.4rem] block rounded-[50%] overflow-hidden border-2 border-solid border-hWhite ml-[-0.6rem]">
                            <img
                                src={profile1}
                                alt=""
                                className="block w-full"
                            />
                        </span>
                        <p className="ml-2">
                            Liked by <b>Ernest Achiever</b> and{" "}
                            <b>2,323 others</b>
                        </p>
                    </div>
                    <div className="caption">
                        <p className="ml-4">
                            <b>lean</b> Lorem ipsum dolor sdasdasda{" "}
                            <span className="harsh-tag">#lifestyle</span>
                        </p>
                    </div>
                    <div className="comments text-hGray ml-4">
                        View all 277 comments
                    </div>
                </div>
            </div>

            {/* ********************* */}
        </div>
    );
};

export default Middle;

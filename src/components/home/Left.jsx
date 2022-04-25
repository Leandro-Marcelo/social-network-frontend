import React, { useState } from "react";
import { Link } from "react-router-dom";
import profile1 from "../../assets/Home/images/profile-1.jpg";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import BrushOutlinedIcon from "@mui/icons-material/BrushOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import TravelExploreOutlinedIcon from "@mui/icons-material/TravelExploreOutlined";

const Left = () => {
    /* 
    borderRadius: rounded-[2rem]  
    cardBorderRadius: rounded-[1rem] 
    btnPadding: py-[0.6rem] px-[2rem] 
    searchPadding: py-[0.6rem] px-[1rem] 
    cardPadding: p-4
    sticky-top-left: 5.4rem
    sticky-top-right: -18rem
    */

    const [active, setActive] = useState(false);

    return (
        /* top-[5.4rem] */
        /* sticky top-[5.4rem] */
        <div className="left  992:w-20  992:z-[5] 1200:w-auto 1200:z-0 h-max sticky top-[5.4rem]">
            <Link
                to={"/"}
                className="profile hidden p-4 bg-hWhite rounded-[1rem] 1200:flex items-center gap-x-4 w-full"
            >
                <div className="profile-picture w-[2.7rem] rounded-[50%] overflow-hidden">
                    <img src={profile1} alt="" className="block w-full" />
                </div>
                <div className="handle">
                    <h4>Leandro</h4>
                    <p className="text-hGray">@lean2785</p>
                </div>
            </Link>
            <div
                className={`sidebar 1200:mt-4 bg-hWhite rounded-[1rem] mx-auto`}
            >
                <Link
                    className={`flex items-center h-16 cursor-pointer relative w-full justify-center  1200:justify-start transition-btn hover:bg-hLight ${
                        active
                            ? `bg-hLight before:block before:w-[0.5rem] before:h-full before:absolute before:bg-hPrimary rounded-t-[1rem] overflow-hidden`
                            : ""
                    }`}
                    to={"/"}
                >
                    <HomeOutlinedIcon
                        className={`"text-[1.4rem] ${
                            active ? `text-hPrimary ` : `text-hGray`
                        } 1200:ml-8 relative"`}
                    />
                    <h3
                        className={`hidden 1200:block ml-[1.5rem] text-[1rem] ${
                            active ? "text-hPrimary" : ""
                        }`}
                    >
                        Inicio
                    </h3>
                </Link>
                <Link
                    className={`flex items-center h-16 cursor-pointer relative w-full justify-center  1200:justify-start transition-btn hover:bg-hLight ${
                        active
                            ? `bg-hLight before:block before:w-[0.5rem] before:h-full before:absolute before:bg-hPrimary  overflow-hidden`
                            : ""
                    }`}
                    to={"/"}
                >
                    <TravelExploreOutlinedIcon className="text-[1.4rem] text-hGray 1200:ml-8 relative" />
                    {/* Explore */}
                    {/* podría ser lo de subir paisajes del otro tipo */}
                    <h3 className="hidden 1200:block ml-[1.5rem] text-[1rem]">
                        Explorar
                    </h3>
                </Link>
                <Link
                    className={`flex items-center h-16 cursor-pointer relative w-full justify-center  1200:justify-start transition-btn hover:bg-hLight ${
                        active
                            ? `bg-hLight before:block before:w-[0.5rem] before:h-full before:absolute before:bg-hPrimary overflow-hidden`
                            : ""
                    }`}
                    to={"/"}
                >
                    {/* <span>
                        <NotificationsNoneOutlinedIcon className="text-[1.4rem] text-hGray ml-8 relative" />
                        <small className="notification-count bg-hDanger text-white text-[0.7rem] w-fit rounded-[0.8rem] py-[0.1rem] px-[0.4rem] top-[-0.2rem] right-[-0.3rem]">
                            9
                        </small>
                    </span> */}
                    <div className="topbarIconsItem relative">
                        <NotificationsNoneOutlinedIcon className="text-[1.4rem] text-hGray 1200:ml-8" />
                        <span className="topbarIconBadge w-4 h-4 bg-hDanger rounded-[50%] text-white absolute top-[-5px] right-[-5px] flex justify-center items-center text-[0.7rem]">
                            2
                        </span>
                    </div>
                    <h3 className="hidden 1200:block ml-[1.5rem] text-[1rem]">
                        Notificaciones
                    </h3>
                    {/* *************************************** NOTIFICATION POPUP ***************************** */}
                    <div className="notifications absolute top-0 left-[110%] w-[30rem] bg-hWhite rounded-[1rem] p-4 shadow-[0_0_2rem_hsl(hPrimary)] before:w-[1.2rem] before:h-[1.2rem] before:block before:bg-hWhite before:absolute before:left-[-0.6rem] before:transform before:rotate-[45deg] z-8 hidden">
                        <div className="flex items-start gap-4 mb-4">
                            <div className="profile-picture w-[2.7rem] rounded-[50%] overflow-hidden">
                                <img
                                    src={profile1}
                                    alt=""
                                    className="block w-full"
                                />
                            </div>
                            <div className="notifaction-body">
                                <b>user</b> accepted your friend request{" "}
                                <small className="text-hGray block">
                                    2 DAYS AGO
                                </small>
                            </div>
                        </div>
                        <div className="flex items-start gap-4 mb-4">
                            <div className="profile-picture w-[2.7rem] rounded-[50%] overflow-hidden">
                                <img
                                    src={profile1}
                                    alt=""
                                    className="block w-full"
                                />
                            </div>
                            <div className="notifaction-body">
                                <b>user</b> accepted your friend request{" "}
                                <small className="text-hGray block">
                                    2 DAYS AGO
                                </small>
                            </div>
                        </div>
                        <div className="flex items-start gap-4 mb-4">
                            <div className="profile-picture w-[2.7rem] rounded-[50%] overflow-hidden">
                                <img
                                    src={profile1}
                                    alt=""
                                    className="block w-full"
                                />
                            </div>
                            <div className="notifaction-body">
                                <b>user</b> accepted your friend request{" "}
                                <small className="text-hGray block">
                                    2 DAYS AGO
                                </small>
                            </div>
                        </div>
                        <div className="flex items-start gap-4 mb-4">
                            <div className="profile-picture w-[2.7rem] rounded-[50%] overflow-hidden">
                                <img
                                    src={profile1}
                                    alt=""
                                    className="block w-full"
                                />
                            </div>
                            <div className="notifaction-body">
                                <b>user</b> accepted your friend request{" "}
                                <small className="text-hGray block">
                                    2 DAYS AGO
                                </small>
                            </div>
                        </div>
                    </div>
                    {/* ******************************* END NOTIFICATION POPUP ************************** */}
                </Link>
                <Link
                    className={`flex items-center h-16 cursor-pointer relative w-full justify-center  1200:justify-start transition-btn hover:bg-hLight ${
                        active
                            ? `bg-hLight before:block before:w-[0.5rem] before:h-full before:absolute before:bg-hPrimary  overflow-hidden`
                            : ""
                    }`}
                    to={"/"}
                >
                    <ChatOutlinedIcon className="text-[1.4rem] text-hGray 1200:ml-8 relative" />
                    {/* Messages */}
                    <h3 className="hidden 1200:block ml-[1.5rem] text-[1rem]">
                        Mensajes / chatear
                    </h3>
                </Link>
                <Link
                    className={`flex items-center h-16 cursor-pointer relative w-full justify-center  1200:justify-start transition-btn hover:bg-hLight ${
                        active
                            ? `bg-hLight before:block before:w-[0.5rem] before:h-full before:absolute before:bg-hPrimary  overflow-hidden`
                            : ""
                    }`}
                    to={"/"}
                >
                    <BookmarkBorderOutlinedIcon className="text-[1.4rem] text-hGray 1200:ml-8 relative" />
                    {/* Home */}
                    <h3 className="hidden 1200:block ml-[1.5rem] text-[1rem]">
                        Bookmarks
                    </h3>
                </Link>
                <Link
                    className={`flex items-center h-16 cursor-pointer relative w-full justify-center  1200:justify-start transition-btn hover:bg-hLight ${
                        active
                            ? `bg-hLight before:block before:w-[0.5rem] before:h-full before:absolute before:bg-hPrimary overflow-hidden`
                            : ""
                    }`}
                    to={"/"}
                >
                    <BarChartOutlinedIcon className="text-[1.4rem] text-hGray 1200:ml-8 relative" />
                    {/* Analytics */}
                    <h3 className="hidden 1200:block ml-[1.5rem] text-[1rem]">
                        Analiticas
                    </h3>
                </Link>
                <Link
                    className={`flex items-center h-16 cursor-pointer relative w-full justify-center  1200:justify-start transition-btn hover:bg-hLight ${
                        active
                            ? `bg-hLight before:block before:w-[0.5rem] before:h-full before:absolute before:bg-hPrimary overflow-hidden`
                            : ""
                    }`}
                    to={"/"}
                >
                    <BrushOutlinedIcon className="text-[1.4rem] text-hGray 1200:ml-8 relative" />
                    {/* Theme */}
                    <h3 className="hidden 1200:block ml-[1.5rem] text-[1rem]">
                        Theme
                    </h3>
                </Link>
                <Link
                    className={`flex items-center h-16 cursor-pointer relative w-full justify-center  1200:justify-start transition-btn hover:bg-hLight ${
                        active
                            ? `bg-hLight before:block before:w-[0.5rem] before:h-full before:absolute before:bg-hPrimary rounded-b-[1rem] overflow-hidden`
                            : ""
                    }`}
                    to={"/"}
                >
                    <SettingsOutlinedIcon
                        className={`"text-[1.4rem] ${
                            active ? `text-hPrimary ` : `text-hGray`
                        } 1200:ml-8 relative"`}
                    />
                    {/* Settings */}
                    {/* podría ser la configuración de la cuenta */}
                    <h3
                        className={`hidden 1200:block ml-[1.5rem] text-[1rem] ${
                            active ? "text-hPrimary" : ""
                        }`}
                    >
                        Configuración
                    </h3>
                </Link>
            </div>
            <label
                htmlFor="create-post"
                className="hidden 1200:flex py-[0.6rem] px-[2rem] 1200:font-medium rounded-[2rem] cursor-pointer 1200:text-[0.9rem] transition-btn bg-hPrimary w-full justify-center mt-4 text-[#fff] "
                onClick={() => setActive(!active)}
            >
                Create Post
            </label>
        </div>
    );
};

export default Left;

import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../features/auth/authSlice";

const Topbar = () => {
    const auth = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const logoutUser = () => {
        dispatch(logout());
    };

    console.log(auth.user.img);

    return (
        <div className="topbarContainer h-[50px] w-full bg-[#1877f2] flex items-center sticky top-0 z-50">
            <div className="topbarLeft flex-[2] md:flex-[3] ">
                <Link to={"/social-network-frontend"}>
                    <span className="cursor-pointer font-semibold ml-5 text-white text-xs md:text-2xl ">
                        Home
                    </span>
                </Link>
            </div>
            <div className="topbarCenter flex-[3] md:flex-[5] ">
                <div className="searchBar w-[80%] md:w-full md:h-[30px] bg-white rounded-[30px] flex items-center ">
                    <SearchIcon className="searchIcon text-xl ml-[10px] md:mr-[10px]" />
                    <input
                        /* Search for friend, post or video */
                        placeholder="Search..."
                        className="searchInput border-none w-[50%] md:w-[80%] text-xs md:text-xl focus:outline-none"
                    />
                </div>
            </div>
            <div className="topbarRight flex-[4] flex items-center justify-around text-white">
                <div className="topbarLinks">
                    {auth.logged && (
                        <span
                            className="topbarLink mr-[10px] text-xs md:text-xl cursor-pointer"
                            onClick={logoutUser}
                        >
                            Logout
                        </span>
                    )}
                    {/* {auth.logged && (
                        <span className="topbarLink mr-[10px] text-xs md:text-xl cursor-pointer">
                            Cuenta
                        </span>
                    )} */}
                </div>
                <div className="topbarIcons flex ">
                    <div className="hidden md:block topbarIconsItem mr-6  relative">
                        <PersonIcon />
                        <span className="topbarIconBadge w-4 h-4 bg-red-600 rounded-[50%] text-white absolute top-[-5px] right-[-5px] flex justify-center items-center text-xs">
                            1
                        </span>
                    </div>
                    <Link to={"/home2"}>
                        <div className="hidden md:block topbarIconsItem mr-6  relative">
                            <ChatIcon />
                            <span className="topbarIconBadge w-4 h-4 bg-red-600 rounded-[50%] text-white absolute top-[-5px] right-[-5px] flex justify-center items-center text-xs">
                                2
                            </span>
                        </div>
                    </Link>
                    <div className="hidden md:block topbarIconsItem mr-6 relative">
                        <NotificationsIcon />
                        <span className="topbarIconBadge w-4 h-4 bg-red-600 rounded-[50%] text-white absolute top-[-5px] right-[-5px] flex justify-center items-center text-xs">
                            1
                        </span>
                    </div>
                </div>
                <Link to={`/profile/${auth.user.name}`}>
                    <img
                        src={
                            auth.user.img
                                ? PF + auth.user.img
                                : PF + "/files/noAvatar.png"
                        }
                        alt=""
                        className="topbarImg w-8 h-8 rounded-[50%] object-cover cursor-pointer mr-4 md:mr-2"
                    />
                </Link>
            </div>
        </div>
    );
};

export default Topbar;
